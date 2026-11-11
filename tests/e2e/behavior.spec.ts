import { test, expect } from '@playwright/test';
import { openDemo, box } from './helpers';

/** Perilaku komponen sesuai panduan (docs/guidelines/komponen/*.md). Tiap tes memakai keyboard dan mouse sungguhan. */

test.describe('Tabs', () => {
  test('←/→/Home/End berpindah, melingkar, dan melewati tab nonaktif; fokus ikut pindah', async ({ page }) => {
    const demo = await openDemo(page, 'tabs');
    const group = demo.getByRole('tablist').filter({ hasText: 'Terkunci' });
    const tabs = group.getByRole('tab');
    await tabs.nth(0).focus();
    await page.keyboard.press('ArrowRight');
    await expect(tabs.nth(2)).toHaveAttribute('aria-selected', 'true'); // melewati "Terkunci"
    await expect(tabs.nth(2)).toBeFocused();
    await page.keyboard.press('ArrowRight');
    await expect(tabs.nth(0)).toHaveAttribute('aria-selected', 'true'); // melingkar
    await expect(tabs.nth(1)).toBeDisabled();
    await expect(tabs.nth(0)).toHaveAttribute('tabindex', '0');
    await expect(tabs.nth(2)).toHaveAttribute('tabindex', '-1');
  });

  test('Scrollable: panah gulir muncul hanya saat meluber dan hilang di ujung', async ({ page }) => {
    const demo = await openDemo(page, 'tabs');
    const scroller = demo.getByRole('tablist').filter({ hasText: 'Komunitas' });
    const wrap = scroller.locator('..');
    await expect(wrap.getByRole('button', { name: 'Gulir tab ke kanan' })).toBeVisible();
    await expect(wrap.getByRole('button', { name: 'Gulir tab ke kiri' })).toHaveCount(0);
    await scroller.evaluate((el) => { el.scrollLeft = el.scrollWidth; });
    await expect(wrap.getByRole('button', { name: 'Gulir tab ke kanan' })).toHaveCount(0);
    await expect(wrap.getByRole('button', { name: 'Gulir tab ke kiri' })).toBeVisible();
    await expect(wrap.getByRole('button', { name: 'Gulir tab ke kiri' })).toHaveAttribute('tabindex', '-1');
  });
});

test.describe('Modal', () => {
  test('fokus masuk, Tab terkurung, Esc menutup dan fokus kembali, gulir terkunci', async ({ page }) => {
    const demo = await openDemo(page, 'modal');
    const trigger = demo.getByRole('button', { name: 'Buka modal' });
    await trigger.focus(); await trigger.click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveAttribute('aria-labelledby', /.+/);
    expect(await page.evaluate(() => document.body.style.overflow)).toBe('hidden');
    for (let i = 0; i < 6; i++) { await page.keyboard.press('Tab'); expect(await dialog.evaluate((d) => d.contains(document.activeElement))).toBe(true); }
    await page.keyboard.press('Escape');
    await expect(dialog).toHaveCount(0);
    await expect(trigger).toBeFocused();
    expect(await page.evaluate(() => document.body.style.overflow)).toBe('');
  });

  test('klik overlay menutup (dismissOnOverlay bawaan true)', async ({ page }) => {
    const demo = await openDemo(page, 'modal');
    await demo.getByRole('button', { name: 'Buka modal' }).click();
    await page.mouse.click(5, 5);
    await expect(page.getByRole('dialog')).toHaveCount(0);
  });
});

test.describe('Bottom Sheet', () => {
  test('geser pegangan ke bawah menutup; geser kecil tidak', async ({ page }) => {
    const demo = await openDemo(page, 'bottom-sheet');
    await demo.getByRole('button', { name: 'Buka bottom sheet' }).click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    const h = await dialog.locator('.touch-none').boundingBox();
    const x = h!.x + h!.width / 2, y = h!.y + 6;
    await page.mouse.move(x, y); await page.mouse.down(); await page.mouse.move(x, y + 30, { steps: 4 }); await page.mouse.up();
    await expect(dialog).toBeVisible();
    await page.mouse.move(x, y); await page.mouse.down(); await page.mouse.move(x, y + 160, { steps: 6 }); await page.mouse.up();
    await expect(dialog).toHaveCount(0);
  });
});

test.describe('Popover', () => {
  test('fokus ke item pertama, panah dan End berpindah (nonaktif dilewati), Esc mengembalikan fokus', async ({ page }) => {
    const demo = await openDemo(page, 'popover');
    const trigger = demo.getByRole('button', { name: 'Menu' });
    await trigger.click();
    const items = page.getByRole('menuitem');
    await expect(items.first()).toBeFocused();
    await page.keyboard.press('ArrowDown');
    await expect(items.nth(1)).toBeFocused();
    await page.keyboard.press('End');
    await expect(items.nth(1)).toBeFocused(); // item ke-3 nonaktif
    await page.keyboard.press('Escape');
    await expect(page.getByRole('menu')).toHaveCount(0);
    await expect(trigger).toBeFocused();
  });
});

test.describe('Toast', () => {
  test('tampil minimal 4 detik lalu hilang sendiri', async ({ page }) => {
    await page.clock.install();
    const demo = await openDemo(page, 'toast');
    await demo.getByRole('button', { name: /Tampilkan toast otomatis/ }).click();
    const toast = demo.getByText('Berhasil mengirim laporan!');
    await expect(toast).toBeVisible();
    await page.clock.fastForward(3500);
    await expect(toast).toBeVisible();
    await page.clock.fastForward(1000);
    await expect(toast).toHaveCount(0);
  });
});

test.describe('Breadcrumb', () => {
  test('maxItems memotong jalur menjadi awal, "…", dan akhir', async ({ page }) => {
    const demo = await openDemo(page, 'breadcrumb');
    const trimmed = demo.getByRole('navigation', { name: 'Breadcrumb' }).nth(1);
    await expect(trimmed).toContainText('Beranda');
    await expect(trimmed).toContainText('…');
    await expect(trimmed).toContainText('Pegawai');
    await expect(trimmed).toContainText('Detail');
    await expect(trimmed).not.toContainText('Kepegawaian');
    await expect(trimmed.locator('[aria-current=page]')).toHaveText('Detail');
  });

  test('maxItems="auto" menyesuaikan lebar wadah dan pulih saat melebar', async ({ page }) => {
    const demo = await openDemo(page, 'breadcrumb');
    const auto = demo.getByRole('navigation', { name: 'Breadcrumb' }).last();
    await expect(auto).toContainText('…');
    await auto.locator('..').evaluate((el) => { (el as HTMLElement).style.width = '900px'; });
    await expect(auto).not.toContainText('…');
    await expect(auto).toContainText('Kepegawaian');
  });
});

test.describe('Accordion', () => {
  test('single expand menutup panel lain; panel punya aria-controls dan region', async ({ page }) => {
    const demo = await openDemo(page, 'accordion');
    const heads = demo.getByRole('button', { expanded: true }).or(demo.getByRole('button', { expanded: false })).filter({ hasText: /Apa itu|Siapa|Bagaimana/ });
    await expect(heads.first()).toHaveAttribute('aria-expanded', 'true');
    await heads.nth(1).click();
    await expect(heads.nth(1)).toHaveAttribute('aria-expanded', 'true');
    await expect(heads.first()).toHaveAttribute('aria-expanded', 'false');
    await expect(heads.nth(1)).toHaveAttribute('aria-controls', /.+/);
    await expect(demo.getByRole('region').first()).toBeVisible();
  });
});

test.describe('Chip', () => {
  test('toggle aria-pressed, pilihan banyak, hapus, dan ukuran small 28px', async ({ page }) => {
    const demo = await openDemo(page, 'chip');
    const group = demo.getByRole('group', { name: 'Jenis konten' });
    const modul = group.getByRole('button', { name: 'Modul ajar', exact: true });
    const aksi = group.getByRole('button', { name: 'Aksi nyata', exact: true });
    await expect(modul).toHaveAttribute('aria-pressed', 'true');
    await aksi.click();
    await expect(aksi).toHaveAttribute('aria-pressed', 'true');
    await expect(modul).toHaveAttribute('aria-pressed', 'true');
    await group.getByRole('button', { name: 'Hapus Video' }).click();
    await expect(group.getByRole('button', { name: 'Video', exact: true })).toHaveCount(0);
    const small = demo.getByRole('group', { name: 'Ukuran kecil' }).getByRole('button').first();
    expect((await box(small)).h).toBe(28);
  });
});

test.describe('Banner', () => {
  test('critical memakai role=alert; entry punya CTA, border gray-50 dan tanpa ikon', async ({ page }) => {
    const demo = await openDemo(page, 'banner');
    await expect(demo.getByRole('alert')).toHaveCount(1);
    await expect(demo.getByRole('alert')).toContainText('Laporan gagal dikirim');
    const entry = demo.getByRole('status').filter({ hasText: 'Bank Soal' });
    await expect(entry.getByRole('button')).toHaveCount(1);
    await expect(entry.getByRole('link')).toHaveCount(1);
    await expect(entry.locator('svg')).toHaveCount(0);
    expect(await entry.evaluate((e) => getComputedStyle(e).backgroundColor)).toBe('rgb(255, 255, 255)');
  });
});

test.describe('Button', () => {
  test('iconOnly persegi, floating pill 27px dengan bayangan, inverse putih di latar gelap', async ({ page }) => {
    const demo = await openDemo(page, 'button');
    await page.getByRole('radio', { name: 'Mobile' }).click();
    const icon = demo.getByRole('button', { name: 'Cari' }).first();
    expect(await box(icon)).toEqual({ w: 46, h: 46 });
    const fl = demo.getByRole('button', { name: 'Kembali ke atas' });
    const s = await fl.evaluate((e) => { const c = getComputedStyle(e); return { r: c.borderRadius, sh: c.boxShadow }; });
    expect(s.r).toBe('27px'); expect(s.sh).not.toBe('none');
    const inv = demo.locator('div.bg-sd-gray-90').getByRole('button', { name: 'Secondary' });
    expect(await inv.evaluate((e) => getComputedStyle(e).borderColor)).toBe('rgb(255, 255, 255)');
  });
});

test.describe('Custom Select', () => {
  test('keyboard membuka, memilih, Esc, opsi nonaktif dilewati, dan mode list-menu membuka Modal', async ({ page }) => {
    const demo = await openDemo(page, 'select');
    const cs = demo.getByRole('combobox', { name: 'Custom Select' });
    await cs.focus(); await page.keyboard.press('ArrowDown');
    await expect(page.getByRole('listbox')).toBeVisible();
    await expect(page.getByRole('listbox').getByRole('option')).toHaveCount(5);
    await page.keyboard.press('End');
    await expect(cs).toHaveAttribute('aria-activedescendant', /.+-o3$/); // SMK; SLB (o4) nonaktif
    await page.keyboard.press('Home'); await page.keyboard.press('ArrowDown'); await page.keyboard.press('Enter');
    await expect(cs).toContainText('SMP');
    await expect(cs).toBeFocused();
    await cs.click(); await page.keyboard.press('Escape');
    await expect(page.getByRole('listbox')).toHaveCount(0);
    await demo.getByRole('combobox', { name: 'Custom List Menu' }).click();
    const dialog = page.getByRole('dialog', { name: 'Pilih jenjang' });
    await expect(dialog).toBeVisible();
    await dialog.getByRole('option', { name: /SMA/ }).click();
    await expect(dialog).toHaveCount(0);
    await expect(demo.getByRole('combobox', { name: 'Custom List Menu' })).toContainText('SMA');
  });
});

test.describe('Table', () => {
  test('stickyHeader: header tetap terlihat saat isi menggulir', async ({ page }) => {
    const demo = await openDemo(page, 'table');
    const scroller = demo.locator('div.overflow-auto').filter({ has: page.locator('table') }).filter({ hasText: 'Pegawai 14' });
    const th = scroller.locator('th').first();
    await scroller.evaluate((el) => { el.scrollTop = 150; });
    const top = (await scroller.boundingBox())!.y;
    expect(Math.abs((await th.boundingBox())!.y - top)).toBeLessThan(2);
    expect(await th.evaluate((e) => getComputedStyle(e).position)).toBe('sticky');
  });

  test('stacked: di bawah 768px sel menampilkan label dari header', async ({ page }) => {
    await page.setViewportSize({ width: 600, height: 900 });
    const demo = await openDemo(page, 'table');
    const stacked = demo.locator('table').filter({ has: page.locator('td[data-label]') }).first();
    const cell = stacked.locator('tbody tr').first().locator('td').nth(1);
    await expect(cell).toHaveAttribute('data-label', 'Jabatan');
    expect(await cell.evaluate((e) => getComputedStyle(e, '::before').content)).toBe('"Jabatan"');
  });
});

test.describe('TextArea & SearchBar', () => {
  test('autoGrow tumbuh mengikuti isi lalu dibatasi maxRows', async ({ page }) => {
    const demo = await openDemo(page, 'text-field');
    const ta = demo.getByLabel('Catatan (autoGrow)');
    const h0 = (await box(ta)).h;
    await ta.fill('a\n'.repeat(5) + 'a');
    const h1 = (await box(ta)).h;
    await ta.fill('a\n'.repeat(40));
    const h2 = (await box(ta)).h;
    expect(h1).toBeGreaterThan(h0);
    expect(h2).toBeGreaterThan(h1);
    expect(h2).toBeLessThan(40 * 20);
  });

  test('SearchBar error: border merah, aria-invalid, dan teks bantu terhubung', async ({ page }) => {
    const demo = await openDemo(page, 'search-bar');
    const input = demo.getByRole('searchbox').nth(1);
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    const id = await input.getAttribute('aria-describedby');
    await expect(page.locator(`[id="${id}"]`)).toHaveText('Ketik kata kunci dulu.');
    expect(await input.evaluate((e) => getComputedStyle(e).borderColor)).toBe('rgb(223, 33, 33)');
  });
});

test.describe('Navigation Bar', () => {
  test('menu yang tak muat masuk "Lainnya" dan item aktif menandai pemicunya', async ({ page }) => {
    const demo = await openDemo(page, 'navigation-bar');
    const bar = demo.locator('header').nth(1);
    const more = bar.getByRole('button', { name: 'Lainnya' });
    await expect(more).toBeVisible();
    await more.click();
    await expect(bar.getByRole('menu')).toContainText('Bantuan');
    await expect(more.locator('span').first()).toHaveCSS('color', 'rgb(9, 84, 217)');
  });

  test('di bawah 769px menjadi hamburger; Esc menutup; tanpa menu tidak ada hamburger', async ({ page }) => {
    await page.setViewportSize({ width: 600, height: 900 });
    const demo = await openDemo(page, 'navigation-bar');
    const bars = demo.locator('header');
    const burger = bars.nth(0).getByRole('button', { name: 'Buka menu' });
    await expect(burger).toBeVisible();
    await burger.click();
    await expect(bars.nth(0).getByRole('navigation', { name: 'Navigasi utama' })).toBeVisible();
    await expect(bars.nth(0).getByRole('button', { name: 'Tutup menu' })).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Escape');
    await expect(bars.nth(0).getByRole('navigation', { name: 'Navigasi utama' })).toHaveCount(0);
    await expect(bars.nth(3).getByRole('button', { name: /menu$/ })).toHaveCount(0); // tanpa menu
  });
});

test.describe('Vertical Navigation', () => {
  test('menu tambahan menempel di dasar; lebar 300px di desktop dan penuh di bawah 800px', async ({ page }) => {
    const demo = await openDemo(page, 'vertical-navigation');
    const nav = demo.getByRole('navigation', { name: 'Navigasi samping' }).first();
    const add = nav.getByRole('list', { name: 'Menu tambahan' });
    await expect(add).toContainText('Pengaturan');
    const nb = (await nav.boundingBox())!, ab = (await add.boundingBox())!;
    expect(Math.abs(nb.y + nb.height - (ab.y + ab.height))).toBeLessThan(2);
    expect(Math.round(nb.width)).toBe(300);
    await page.setViewportSize({ width: 600, height: 900 });
    const parent = (await nav.locator('..').boundingBox())!;
    expect(Math.round((await nav.boundingBox())!.width)).toBe(Math.round(parent.width));
  });
});
