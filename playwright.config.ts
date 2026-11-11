import { defineConfig, devices } from '@playwright/test';

/**
 * Tes perilaku, aksesibilitas, dan ukuran komponen Seragam terhadap galeri situs (vite), lintas peramban dan perangkat:
 * - desktop (Chromium): semua tes, termasuk aksesibilitas axe;
 * - firefox, webkit: perilaku, popup, dan skala huruf (aksesibilitas cukup di Chromium);
 * - mobile (Pixel 7, sentuh) dan iphone (WebKit, sentuh): tes seluler (tanpa gulir horizontal, tap, target sentuh, geser).
 * Lokal Chromium memakai Google Chrome yang terpasang; Firefox/WebKit: `npx playwright install firefox webkit`.
 * Di CI: `npx playwright install --with-deps chromium firefox webkit`.
 */
const chrome = process.env.CI ? undefined : 'chrome';
const cross = /(behavior|popup|platform)\.spec\.ts/;

export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 30_000,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: { baseURL: 'http://localhost:5199', trace: 'retain-on-failure' },
  projects: [
    { name: 'desktop', testIgnore: /mobile\.spec\.ts/, use: { ...devices['Desktop Chrome'], channel: chrome, viewport: { width: 1440, height: 900 } } },
    { name: 'firefox', testMatch: cross, use: { ...devices['Desktop Firefox'], viewport: { width: 1440, height: 900 } } },
    { name: 'webkit', testMatch: cross, use: { ...devices['Desktop Safari'], viewport: { width: 1440, height: 900 } } },
    { name: 'mobile', testMatch: /mobile\.spec\.ts/, use: { ...devices['Pixel 7'], channel: chrome } },
    { name: 'iphone', testMatch: /mobile\.spec\.ts/, use: { ...devices['iPhone 14'] } },
  ],
  webServer: { command: 'npx vite --port 5199 --strictPort', url: 'http://localhost:5199', reuseExistingServer: !process.env.CI, timeout: 60_000 },
});
