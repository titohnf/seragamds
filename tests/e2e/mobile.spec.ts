import { test, expect } from '@playwright/test';
import { readdirSync } from 'node:fs';
import { openDemo, box } from './helpers';

/** Tes seluler (emulasi sentuh Pixel 7 dan iPhone 14): tata letak 360px, tap, dan target sentuh. */
const slugs = readdirSync('docs/guidelines/komponen').map((f) => f.replace(/\.md$/, ''));

test.describe('Tanpa gulir horizontal pada halaman di lebar 360px', () => {
  test.use({ viewport: { width: 360, height: 740 } });
  for (const slug of slugs) {
    test(`halaman ${slug}`, async ({ page }) => {
      await page.goto(`/#/c/${slug}`);
      test.skip((await page.getByTestId('demo').count()) === 0, 'belum punya demo');
      await page.getByTestId('demo').waitFor();
      await page.waitForTimeout(150);
      const over = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth }));
      expect(over.sw, `scrollWidth ${over.sw} > lebar layar ${over.iw}`).toBeLessThanOrEqual(over.iw);
    });
  }
});

test.describe('Sentuhan', () => {
  test('tap membuka Accordion dan berpindah Tabs', async ({ page }) => {
    let demo = await openDemo(page, 'accordion');
    const head = demo.getByRole('button', { name: /Siapa yang memakainya/ }).first();
    await head.tap();
    await expect(head).toHaveAttribute('aria-expanded', 'true');
    demo = await openDemo(page, 'tabs');
    const tabs = demo.getByRole('tablist').first().getByRole('tab');
    await tabs.nth(1).tap();
    await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true');
  });

  test('tap membuka dan menutup Modal lewat tombol Tutup', async ({ page }) => {
    const demo = await openDemo(page, 'modal');
    await demo.getByRole('button', { name: 'Buka modal' }).tap();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await dialog.getByRole('button', { name: 'Tutup' }).tap();
    await expect(dialog).toHaveCount(0);
  });

  test('tap pada Popover membuka menu dan memilih item menutupnya', async ({ page }) => {
    const demo = await openDemo(page, 'popover');
    await demo.getByRole('button', { name: 'Menu', exact: true }).tap();
    const menu = page.getByRole('menu');
    await expect(menu).toBeVisible();
    await menu.getByRole('menuitem', { name: 'Ubah' }).tap();
    await expect(menu).toHaveCount(0);
  });

  test('Tooltip tampil saat tap pada pemicu', async ({ page }) => {
    const demo = await openDemo(page, 'tooltip');
    await demo.getByRole('button', { name: 'Hover saya' }).tap();
    await expect(page.getByRole('tooltip', { name: 'Teks tooltip di atas' })).toBeVisible();
  });
});

test.describe('Target sentuh', () => {
  test('Button lg dan sel Calendar minimal 44px', async ({ page }) => {
    let demo = await openDemo(page, 'button');
    expect((await box(demo.getByRole('button', { name: 'Simpan', exact: true }).first())).h).toBeGreaterThanOrEqual(44);
    demo = await openDemo(page, 'date-picker');
    await demo.getByRole('button', { name: 'Pilih tanggal' }).first().tap();
    const day = page.getByRole('dialog').getByRole('button', { name: /17 Mei 1990/ });
    const b = await box(day);
    expect(b.w).toBeGreaterThanOrEqual(44); expect(b.h).toBeGreaterThanOrEqual(44);
  });
});

test('Bottom Sheet: geser dengan sentuhan sungguhan (CDP) menutup', async ({ page, browserName }) => {
  test.skip(browserName !== 'chromium', 'CDP hanya di Chromium');
  const demo = await openDemo(page, 'bottom-sheet');
  await demo.getByRole('button', { name: 'Buka bottom sheet' }).tap();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  const h = (await dialog.locator('.touch-none').boundingBox())!;
  const x = h.x + h.width / 2, y = h.y + 6;
  const cdp = await page.context().newCDPSession(page);
  const touch = (type: string, yy: number) => cdp.send('Input.dispatchTouchEvent', { type, touchPoints: type === 'touchEnd' ? [] : [{ x, y: yy }] });
  await touch('touchStart', y);
  for (let i = 1; i <= 8; i++) await touch('touchMove', y + i * 20);
  await touch('touchEnd', y + 160);
  await expect(dialog).toHaveCount(0);
});
