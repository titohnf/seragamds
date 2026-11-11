import { test, expect, type Locator, type Page } from '@playwright/test';
import { openDemo } from './helpers';

/**
 * Popup tahan tepi layar dan wadah overflow-hidden (src/popup.ts): membalik sisi bila tidak muat, tetap di dalam layar,
 * tidak terpotong wadah, dan mengikuti pemicu saat halaman menggulir.
 */
const inViewport = (b: { x: number; y: number; width: number; height: number }, vp: { width: number; height: number }) =>
  b.x >= -0.5 && b.y >= -0.5 && b.x + b.width <= vp.width + 0.5 && b.y + b.height <= vp.height + 0.5;

/** Perkecil tinggi layar sehingga hanya tersisa `slack` px di bawah pemicu. */
async function squeezeBelow(page: Page, trigger: Locator, slack = 24) {
  await trigger.scrollIntoViewIfNeeded();
  const b = (await trigger.boundingBox())!;
  const scrollY = await page.evaluate(() => window.scrollY);
  await page.setViewportSize({ width: 1440, height: Math.ceil(b.y + b.height + slack) });
  await page.evaluate((y) => window.scrollTo(0, y), scrollY);
}

test('Popover: membalik ke atas bila ruang bawah sempit dan tetap di dalam layar', async ({ page }) => {
  const demo = await openDemo(page, 'popover');
  const trigger = demo.getByRole('button', { name: 'Menu', exact: true });
  await squeezeBelow(page, trigger);
  await trigger.click();
  const menu = page.getByRole('menu');
  await expect(menu).toBeVisible();
  const m = (await menu.boundingBox())!, t = (await trigger.boundingBox())!;
  expect(m.y + m.height).toBeLessThanOrEqual(t.y + 1); // di atas pemicu
  expect(inViewport(m, page.viewportSize()!)).toBe(true);
});

test('Popover: tidak terpotong wadah overflow-hidden (menu tampil di luar batas wadah)', async ({ page }) => {
  const demo = await openDemo(page, 'popover');
  const trigger = demo.getByRole('button', { name: /dalam wadah overflow-hidden/ });
  await trigger.click();
  const menu = page.getByRole('menu');
  await expect(menu).toBeVisible();
  const box = (await menu.boundingBox())!;
  const container = (await demo.locator('div.overflow-hidden').boundingBox())!;
  expect(box.y + box.height).toBeGreaterThan(container.y + container.height); // melewati bawah wadah
  // titik tengah menu benar-benar milik menu (tidak tertutup atau terpotong)
  const hit = await page.evaluate(({ x, y }) => !!document.elementFromPoint(x, y)?.closest('[role=menu]'), { x: box.x + box.width / 2, y: box.y + box.height - 10 });
  expect(hit).toBe(true);
});

test('Popover mengikuti pemicu saat halaman digulir', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 500 });
  const demo = await openDemo(page, 'popover');
  const trigger = demo.getByRole('button', { name: 'Menu', exact: true });
  await trigger.click();
  const menu = page.getByRole('menu');
  const before = ((await menu.boundingBox())!.y - (await trigger.boundingBox())!.y);
  await page.evaluate(() => window.scrollBy(0, 40));
  await page.waitForTimeout(100);
  const after = ((await menu.boundingBox())!.y - (await trigger.boundingBox())!.y);
  expect(Math.abs(after - before)).toBeLessThan(2);
});

test('Custom Select: daftar membalik ke atas dan tingginya dibatasi ruang yang ada', async ({ page }) => {
  const demo = await openDemo(page, 'select');
  const cs = demo.getByRole('combobox', { name: 'Custom Select' });
  await squeezeBelow(page, cs, 20);
  await cs.click();
  const list = page.getByRole('listbox');
  await expect(list).toBeVisible();
  const l = (await list.boundingBox())!, c = (await cs.boundingBox())!;
  expect(l.y + l.height).toBeLessThanOrEqual(c.y + 1);
  expect(inViewport(l, page.viewportSize()!)).toBe(true);
  expect(Math.round(l.width)).toBe(Math.round(c.width)); // selebar pemicu
});

test('Date Picker: panel membalik ke atas di dasar layar dan tetap di dalam layar', async ({ page }) => {
  const demo = await openDemo(page, 'date-picker');
  const field = demo.getByLabel('Tanggal berakhir (opsional)');
  await squeezeBelow(page, field, 16);
  await demo.getByRole('button', { name: 'Pilih tanggal' }).nth(2).click();
  const dialog = page.getByRole('dialog', { name: 'Pilih tanggal' });
  await expect(dialog).toBeVisible();
  const d = (await dialog.boundingBox())!, f = (await field.boundingBox())!;
  expect(d.y + d.height).toBeLessThanOrEqual(f.y + 1);
  expect(inViewport(d, page.viewportSize()!)).toBe(true);
});

test('Navigation Bar: menu "Lainnya" tetap di dalam layar sempit', async ({ page }) => {
  await page.setViewportSize({ width: 900, height: 700 });
  const demo = await openDemo(page, 'navigation-bar');
  const bar = demo.locator('header').nth(1);
  await bar.getByRole('button', { name: 'Lainnya' }).click();
  const menu = bar.getByRole('menu');
  await expect(menu).toBeVisible();
  expect(inViewport((await menu.boundingBox())!, page.viewportSize()!)).toBe(true);
});

test.describe('Tooltip', () => {
  test('hover dan fokus menampilkan, Esc menutup, dan pemicu memiliki aria-describedby', async ({ page }) => {
    const demo = await openDemo(page, 'tooltip');
    const trigger = demo.getByRole('button', { name: 'Hover saya' });
    const tip = page.getByRole('tooltip', { name: 'Teks tooltip di atas' });
    await expect(tip).toBeHidden();
    await expect(trigger).toHaveAttribute('aria-describedby', /.+/);
    await trigger.hover(); await expect(tip).toBeVisible();
    await page.keyboard.press('Escape'); await expect(tip).toBeHidden();
    await page.mouse.move(0, 0); await trigger.focus(); await expect(tip).toBeVisible();
    await trigger.blur(); await expect(tip).toBeHidden();
  });

  test('membalik ke bawah bila pemicu menempel tepi atas, dan bergeser dari tepi kiri', async ({ page }) => {
    const demo = await openDemo(page, 'tooltip');
    const trigger = demo.getByRole('button', { name: 'Hover saya' });
    await trigger.evaluate((el) => { const w = el.parentElement!; w.style.position = 'fixed'; w.style.top = '2px'; w.style.left = '2px'; w.style.zIndex = '60'; });
    await trigger.hover();
    const tip = page.getByRole('tooltip', { name: 'Teks tooltip di atas' });
    await expect(tip).toBeVisible();
    const t = (await tip.boundingBox())!, b = (await trigger.boundingBox())!;
    expect(t.y).toBeGreaterThanOrEqual(b.y + b.height); // dibalik ke bawah
    expect(t.x).toBeGreaterThanOrEqual(7.5); // digeser agar tidak keluar dari tepi kiri
    expect(inViewport(t, page.viewportSize()!)).toBe(true);
  });
});
