// Pemeriksaan hidrasi: render komponen di server (tanpa window), lalu hidrasi di jsdom yang `matchMedia`-nya SENGAJA bernilai true
// (layar sempit, gerak berkurang) untuk memancing ketidakcocokan HTML server/klien. Gagal bila React melaporkan ketidakcocokan hidrasi.
// Pakai: node tools/hydration-check.mjs   (butuh `npm run build:lib` dulu)
import { createElement as h } from 'react';
import { renderToString } from 'react-dom/server';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { JSDOM } from 'jsdom';

const S = await import(pathToFileURL(resolve('lib/index.js')).href);
const noop = () => {};
const steps = [{ key: 'a', label: 'Satu', state: 'done' }, { key: 'b', label: 'Dua', state: 'active' }, { key: 'c', label: 'Tiga', state: 'todo' }];
const nav = [{ key: 'a', label: 'Beranda' }, { key: 'b', label: 'Layanan' }, { key: 'c', label: 'Bantuan' }];
const cases = {
  NavigationBar: () => h(S.NavigationBar, { items: nav, active: 'a', logo: h('span', null, 'Logo'), actions: h(S.Button, null, 'Masuk') }),
  'NavigationBar (menu saja)': () => h(S.NavigationBar, { items: nav, active: 'a' }),
  Carousel: () => h(S.Carousel, { label: 'Slide', autoplay: 3000, slides: [h('div', { key: 1 }, 'A'), h('div', { key: 2 }, 'B')] }),
  Tabs: () => h(S.Tabs, { items: ['A', { label: 'B', disabled: true }, 'C'], active: 0, onChange: noop }),
  'Table (stacked, sticky)': () => h(S.Table, { stacked: true, stickyHeader: true, caption: 'Uji' }, h(S.TableHead, null, h(S.TableRow, null, h(S.TableHeaderCell, null, 'Nama'))), h(S.TableBody, null, h(S.TableRow, null, h(S.TableCell, null, 'x')))),
  'Breadcrumb (auto)': () => h(S.Breadcrumb, { maxItems: 'auto', items: [{ label: 'A', href: '#' }, { label: 'B', href: '#' }, { label: 'C', href: '#' }, { label: 'D', href: '#' }, { label: 'E' }] }),
  Tooltip: () => h(S.Tooltip, { text: 'Info' }, h(S.Button, null, 'Hover')),
  Popover: () => h(S.Popover, { trigger: ({ toggle }) => h(S.Button, { onClick: toggle }, 'Menu'), items: [{ label: 'Ubah', onSelect: noop }] }),
  CustomSelect: () => h(S.CustomSelect, { label: 'Jenjang', options: [{ value: 'a', label: 'SD' }], onChange: noop }),
  DatePicker: () => h(S.DatePicker, { label: 'Tanggal', value: '2025-11-12', onChange: noop }),
  Accordion: () => h(S.AccordionGroup, { items: [{ key: 'a', title: 'T', content: 'C' }] }),
  Modal: () => h(S.Modal, { open: false, onClose: noop, title: 'Judul' }, 'Isi'),
  FormField: () => h(S.FormField, { label: 'Unit', helper: 'Bantu' }, (p) => h('input', p)),
  FieldGroup: () => h(S.FieldGroup, { legend: 'Jenjang' }, h(S.Radio, { name: 'x', label: 'SD', onChange: noop })),
  Footer: () => h(S.Footer, { copyright: 'Hak cipta', sections: [{ title: 'Menu', links: [{ label: 'Beranda', href: '#' }] }] }),
  PageHeader: () => h(S.PageHeader, { title: 'Judul', description: 'Deskripsi' }),
  ProcessSteps: () => h(S.ProcessSteps, { steps, current: 'b' }),
  Toast: () => h(S.Toast, { tone: 'success' }, 'Berhasil'),
  Banner: () => h(S.Banner, { tone: 'entry', action: h(S.Button, { size: 'sm' }, 'Coba') }, 'Fitur'),
  Platform: () => h(S.Platform, { platform: 'auto' }, h(S.TextField, { label: 'Nama' })),
  SearchBar: () => h(S.SearchBar, { placeholder: 'Cari', error: 'Isi dulu' }),
  ChipGroup: () => h(S.ChipGroup, { items: ['A', 'B'], active: 0, onChange: noop }),
  Pagination: () => h(S.Pagination, { page: 3, pageCount: 20, onPageChange: noop }),
  VerticalNavigation: () => h(S.VerticalNavigation, { items: [{ key: 'a', label: 'Beranda', href: '#' }], additional: [{ key: 'p', label: 'Pengaturan', href: '#' }], active: 'a' }),
  'Spinner/Skeleton': () => h('div', null, h(S.Spinner), h(S.Skeleton)),
};

// 1) server: tanpa window/document
const server = Object.fromEntries(Object.entries(cases).map(([k, f]) => [k, renderToString(f())]));

// 2) klien: jsdom dengan matchMedia selalu true dan ResizeObserver tiruan
const dom = new JSDOM('<!doctype html><body></body>', { pretendToBeVisual: true, url: 'http://localhost/' });
const g = globalThis;
const set = (k, v) => Object.defineProperty(g, k, { value: v, configurable: true, writable: true });
set('window', dom.window); set('document', dom.window.document); set('navigator', dom.window.navigator);
for (const k of ['HTMLElement', 'Node', 'Element', 'Event', 'KeyboardEvent', 'MouseEvent', 'CustomEvent', 'MutationObserver', 'getComputedStyle']) set(k, dom.window[k]);
dom.window.matchMedia = (q) => ({ matches: true, media: q, addEventListener: noop, removeEventListener: noop, addListener: noop, removeListener: noop });
set('ResizeObserver', class { observe() {} unobserve() {} disconnect() {} }); dom.window.ResizeObserver = g.ResizeObserver;
set('requestAnimationFrame', dom.window.requestAnimationFrame.bind(dom.window)); set('cancelAnimationFrame', dom.window.cancelAnimationFrame.bind(dom.window));
g.IS_REACT_ACT_ENVIRONMENT = false;

const { hydrateRoot } = await import('react-dom/client');
const problems = [];
const origError = console.error;
let current = '';
console.error = (...a) => { const m = a.map(String).join(' '); if (/hydrat|did not match|mismatch/i.test(m)) problems.push(`${current}: ${m.split('\n')[0].slice(0, 160)}`); };

for (const [name, make] of Object.entries(cases)) {
  current = name;
  const el = document.createElement('div'); el.innerHTML = server[name]; document.body.appendChild(el);
  const root = hydrateRoot(el, make(), { onRecoverableError: (e) => problems.push(`${name}: ${String(e.message).split('\n')[0].slice(0, 160)}`) });
  await new Promise((r) => setTimeout(r, 60));
  root.unmount();
}
console.error = origError;
if (problems.length) { console.error('GAGAL: ketidakcocokan hidrasi:\n - ' + problems.join('\n - ')); process.exit(1); }
console.log(`OK: ${Object.keys(cases).length} komponen dirender di server lalu dihidrasi tanpa ketidakcocokan (matchMedia dipaksa true)`);
process.exit(0);
