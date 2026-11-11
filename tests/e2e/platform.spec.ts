import { test, expect } from '@playwright/test';
import { openDemo, setPlatform, box } from './helpers';

/** Satu komponen, dua skala huruf: ukuran mengikuti data-sd-platform (Mobile 15/22, Desktop 16/24). */

const metrics = (loc: import('@playwright/test').Locator) =>
  loc.evaluate((e) => { const c = getComputedStyle(e); return { size: c.fontSize, line: c.lineHeight }; });

test('Mobile: Button lg 46px dengan teks 15/22', async ({ page }) => {
  const demo = await openDemo(page, 'button');
  await setPlatform(page, 'Mobile');
  const b = demo.getByRole('button', { name: 'Simpan', exact: true }).first();
  expect(await metrics(b)).toEqual({ size: '15px', line: '22px' });
  expect((await box(b)).h).toBe(46);
});

test('Desktop: Button lg 48px dengan teks 16/24, md 40px', async ({ page }) => {
  const demo = await openDemo(page, 'button');
  await setPlatform(page, 'Desktop');
  const lg = demo.getByRole('button', { name: 'Simpan', exact: true }).first();
  expect(await metrics(lg)).toEqual({ size: '16px', line: '24px' });
  expect((await box(lg)).h).toBe(48);
  expect((await box(demo.getByRole('button', { name: 'Medium' }).first())).h).toBe(40);
});

test('TextField mengikuti skala: 46px Mobile, 48px Desktop', async ({ page }) => {
  const demo = await openDemo(page, 'text-field');
  const input = demo.getByLabel('Nama lengkap');
  await setPlatform(page, 'Mobile'); expect((await box(input)).h).toBe(46);
  await setPlatform(page, 'Desktop'); expect((await box(input)).h).toBe(48);
});

test('Otomatis mengikuti lebar layar: Mobile di bawah 1024px, Desktop mulai 1024px', async ({ page }) => {
  await page.setViewportSize({ width: 800, height: 900 });
  const demo = await openDemo(page, 'button');
  await setPlatform(page, 'Otomatis');
  const b = demo.getByRole('button', { name: 'Simpan', exact: true }).first();
  expect((await metrics(b)).size).toBe('15px');
  await page.setViewportSize({ width: 1200, height: 900 });
  expect((await metrics(b)).size).toBe('16px');
});

test('Table: header 13/16 Mobile dan 14/16 Desktop', async ({ page }) => {
  const demo = await openDemo(page, 'table');
  const th = demo.locator('th').first();
  await setPlatform(page, 'Mobile'); expect((await metrics(th)).size).toBe('13px');
  await setPlatform(page, 'Desktop'); expect((await metrics(th)).size).toBe('14px');
});
