import { Marked } from 'marked';

const raw = import.meta.glob('../docs/**/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
/** Seluruh dokumen, kuncinya jalur relatif terhadap docs/, mis. `guidelines/komponen/button.md`. */
export const docs: Record<string, string> = Object.fromEntries(Object.entries(raw).map(([k, v]) => [k.replace('../docs/', ''), v]));

export const titleOf = (path: string) => (docs[path]?.match(/^#\s+(.+)$/m)?.[1] ?? path).trim();

const dirname = (p: string) => p.split('/').slice(0, -1).join('/');
function resolve(from: string, href: string): string {
  const parts = dirname(from).split('/').filter(Boolean);
  for (const seg of href.split('/')) {
    if (seg === '..') parts.pop();
    else if (seg && seg !== '.') parts.push(seg);
  }
  return parts.join('/');
}

/** Ubah tautan antar dokumen menjadi rute situs. */
export function routeFor(from: string, href: string): string | null {
  if (/^[a-z]+:/i.test(href) || href.startsWith('#')) return null;
  const [pathPart, anchor] = href.split('#');
  const target = resolve(from, pathPart);
  if (target === 'components') return '#/spesifikasi';
  if (target === 'foundations') return '#/d/foundations/warna.md';
  const m = target.match(/^guidelines\/komponen\/([\w-]+)\.md$/);
  if (m) return `#/c/${m[1]}`;
  if (docs[target]) return `#/d/${target}${anchor ? '#' + anchor : ''}`;
  return null;
}

let current = '';
const marked = new Marked({
  gfm: true,
  renderer: {
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens);
      if (/^mailto:/i.test(href)) return text; // contoh email di panduan bukan tautan
      const route = routeFor(current, href);
      const attrs = title ? ` title="${title}"` : '';
      if (route) return `<a href="${route}"${attrs}>${text}</a>`;
      const external = /^https?:/i.test(href);
      return `<a href="${href}"${attrs}${external ? ' target="_blank" rel="noreferrer"' : ''}>${text}</a>`;
    },
    table({ header, rows }) {
      const cell = (c: { tokens: any[]; align: string | null }, tag: string) => `<${tag}>${this.parser.parseInline(c.tokens)}</${tag}>`;
      return `<div class="table-wrap"><table><thead><tr>${header.map((c) => cell(c, 'th')).join('')}</tr></thead><tbody>${rows
        .map((r) => `<tr>${r.map((c) => cell(c, 'td')).join('')}</tr>`)
        .join('')}</tbody></table></div>`;
    },
  },
});

export function render(path: string): string {
  current = path;
  return marked.parse(docs[path] ?? `# Tidak ditemukan\n\nDokumen \`${path}\` tidak ada.`, { async: false }) as string;
}

/** Berkas spesifikasi Figma yang ditautkan sebuah halaman panduan komponen. */
export function specOf(slug: string): string | null {
  const t = docs[`guidelines/komponen/${slug}.md`];
  const m = t?.match(/\]\(\.\.\/\.\.\/components\/([\w-]+)\.md\)/);
  return m ? `components/${m[1]}.md` : null;
}

export const componentSlugs = Object.keys(docs)
  .filter((k) => k.startsWith('guidelines/komponen/'))
  .map((k) => k.replace('guidelines/komponen/', '').replace('.md', ''))
  .sort((a, b) => titleOf(`guidelines/komponen/${a}.md`).localeCompare(titleOf(`guidelines/komponen/${b}.md`)));

export const specPaths = Object.keys(docs).filter((k) => k.startsWith('components/')).sort((a, b) => titleOf(a).localeCompare(titleOf(b)));
