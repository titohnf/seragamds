import { expect, type Page } from '@playwright/test';

/** Buka halaman demo sebuah komponen di galeri situs dan tunggu demonya tampil. */
export async function openDemo(page: Page, slug: string) {
  await page.goto(`/#/c/${slug}`);
  const demo = page.getByTestId('demo');
  await expect(demo).toBeVisible();
  return demo;
}

/** Pilih skala huruf lewat pemilih di galeri (Otomatis, Mobile, Desktop). */
export async function setPlatform(page: Page, name: 'Otomatis' | 'Mobile' | 'Desktop') {
  await page.getByRole('radio', { name }).click();
}

export const box = async (loc: import('@playwright/test').Locator) => {
  const b = await loc.boundingBox();
  if (!b) throw new Error('elemen tidak terlihat');
  return { w: Math.round(b.width), h: Math.round(b.height) };
};
