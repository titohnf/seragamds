import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readdirSync } from 'node:fs';

/**
 * Pemeriksaan aksesibilitas otomatis (axe, WCAG 2.1 A/AA) pada demo tiap komponen, dalam skala Mobile dan Desktop.
 * axe tidak menandai teks nonaktif untuk kontras (dikecualikan WCAG). Pengecualian lain ditulis di EXCLUDE beserta alasannya.
 */
const slugs = readdirSync('docs/guidelines/komponen').map((f) => f.replace(/\.md$/, ''));

// Elemen demo yang sengaja tidak memenuhi aturan karena murni ilustrasi cara salah/benar (belum ada).
const EXCLUDE: string[] = [];

for (const slug of slugs) {
  for (const platform of ['Mobile', 'Desktop'] as const) {
    test(`a11y ${slug} (${platform})`, async ({ page }) => {
      await page.goto(`/#/c/${slug}`);
      const demo = page.getByTestId('demo');
      test.skip((await demo.count()) === 0, 'komponen ini belum punya demo di galeri');
      await page.getByRole('radio', { name: platform }).click();
      await page.waitForTimeout(150);
      let axe = new AxeBuilder({ page }).include('[data-testid="demo"]').withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']);
      for (const sel of EXCLUDE) axe = axe.exclude(sel);
      const { violations } = await axe.analyze();
      expect(violations.map((v) => `${v.id}: ${v.help} (${v.nodes.length}) ${v.nodes.slice(0, 2).map((n) => n.target.join(' ')).join(' | ')}`)).toEqual([]);
    });
  }
}
