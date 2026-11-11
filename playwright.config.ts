import { defineConfig, devices } from '@playwright/test';

/**
 * Tes perilaku, aksesibilitas, dan ukuran komponen Seragam terhadap galeri situs (vite).
 * Lokal memakai Google Chrome yang terpasang (tanpa mengunduh peramban); di CI memakai Chromium bawaan Playwright
 * (`npx playwright install --with-deps chromium`).
 */
export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 30_000,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: { baseURL: 'http://localhost:5199', trace: 'retain-on-failure' },
  projects: [{ name: 'desktop', use: { ...devices['Desktop Chrome'], channel: process.env.CI ? undefined : 'chrome', viewport: { width: 1440, height: 900 } } }],
  webServer: { command: 'npx vite --port 5199 --strictPort', url: 'http://localhost:5199', reuseExistingServer: !process.env.CI, timeout: 60_000 },
});
