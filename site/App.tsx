import { useEffect, useMemo, useState, type ReactNode } from 'react';
import * as S from '../src';
import Gallery from '../examples/Gallery';
import { componentSlugs, render, specOf, specPaths, titleOf } from './content';
import { demos } from './demos';

function useRoute() {
  const get = () => decodeURIComponent(location.hash.replace(/^#/, '') || '/');
  const [r, setR] = useState(get);
  useEffect(() => {
    const on = () => { setR(get()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return r;
}

const Md = ({ path }: { path: string }) => {
  const html = useMemo(() => render(path), [path]);
  return <article className="prose" dangerouslySetInnerHTML={{ __html: html }} />;
};

const NAV: { heading: string; items: { to: string; label: string }[] }[] = [
  { heading: 'Mulai', items: [{ to: '/', label: 'Beranda' }, { to: '/d/DECISIONS.md', label: 'Catatan keputusan' }, { to: '/d/extensions.md', label: 'Ekstensi di luar Figma' }] },
  { heading: 'Fondasi', items: ['warna', 'tipografi', 'elevasi-radius', 'spacing', 'container', 'token', 'palet-ilustrasi'].map((s) => ({ to: `/d/foundations/${s}.md`, label: titleOf(`foundations/${s}.md`) })) },
  { heading: 'Panduan', items: [{ to: '/d/guidelines/penulisan.md', label: 'Penulisan' }, { to: '/d/guidelines/prinsip-desain.md', label: 'Prinsip desain' }, { to: '/d/guidelines/keputusan-ux.md', label: 'Keputusan UX' }, { to: '/d/guidelines/ilustrasi.md', label: 'Ilustrasi' }, { to: '/d/guidelines/pemetaan-nama.md', label: 'Pemetaan nama' }, { to: '/d/guidelines/README.md', label: 'Penggunaan komponen' }] },
  { heading: 'Komponen', items: componentSlugs.map((s) => ({ to: `/c/${s}`, label: titleOf(`guidelines/komponen/${s}.md`) })) },
  { heading: 'Lainnya', items: [{ to: '/galeri', label: 'Galeri semua komponen' }, { to: '/spesifikasi', label: 'Semua spesifikasi Figma' }] },
];

function Sidebar({ route, open, onNavigate }: { route: string; open: boolean; onNavigate: () => void }) {
  return (
    <nav aria-label="Dokumentasi" className={`${open ? 'block' : 'hidden'} fixed inset-y-0 left-0 z-20 w-[272px] overflow-y-auto border-r border-sd-gray-10 bg-white px-[16px] py-[20px] lg:block`}>
      <a href="#/" className="mb-[16px] block text-sd-gray-90" style={{ fontSize: 18, lineHeight: '24px', fontWeight: 600 }}>Seragam</a>
      {NAV.map((g) => (
        <div key={g.heading} className="mb-[16px]">
          <div className="mb-[4px] px-[8px] text-sd-gray-60" style={{ fontSize: 12, lineHeight: '16px', fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase' }}>{g.heading}</div>
          <ul>
            {g.items.map((it) => {
              const on = route === it.to || (it.to !== '/' && route.startsWith(it.to + '/'));
              return (
                <li key={it.to}>
                  <a href={`#${it.to}`} onClick={onNavigate} aria-current={on ? 'page' : undefined}
                    className={`block rounded-[4px] px-[8px] py-[6px] hover:bg-sd-gray-5 ${on ? 'bg-sd-blue-5 text-sd-blue-70' : 'text-sd-gray-90'}`}
                    style={{ fontSize: 14, lineHeight: '20px', fontWeight: on ? 600 : 400 }}>{it.label}</a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

function ComponentPage({ slug, tab }: { slug: string; tab: string }) {
  const guide = `guidelines/komponen/${slug}.md`;
  const spec = specOf(slug);
  const demo = demos[slug] as (() => ReactNode) | undefined;
  const tabs = [
    ...(demo ? [{ key: 'demo', label: 'Demo' }] : []),
    { key: 'panduan', label: 'Panduan' },
    ...(spec ? [{ key: 'spesifikasi', label: 'Spesifikasi Figma' }] : []),
  ];
  const active = tabs.find((t) => t.key === tab)?.key ?? tabs[0].key;
  return (
    <>
      <div role="tablist" className="mb-[24px] flex gap-[4px] border-b border-sd-gray-10">
        {tabs.map((t) => (
          <a key={t.key} role="tab" aria-selected={t.key === active} href={`#/c/${slug}/${t.key}`}
            className={`-mb-px border-b-[3px] px-[12px] py-[8px] ${t.key === active ? 'border-sd-blue-70 text-sd-blue-70' : 'border-transparent text-sd-gray-90 hover:bg-sd-gray-5'}`}
            style={{ fontSize: 15, lineHeight: '22px', fontWeight: 600 }}>{t.label}</a>
        ))}
      </div>
      {active === 'demo' && demo && (
        <>
          <h1 className="mb-[16px] text-sd-gray-90" style={{ fontSize: 28, lineHeight: '36px', fontWeight: 600 }}>{titleOf(guide)}</h1>
          <div data-testid="demo" className="rounded-[8px] border border-sd-gray-10 bg-sd-gray-0 p-[24px]"><div className="flex flex-col gap-[16px]">{demo()}</div></div>
          <p className="mt-[12px] text-sd-gray-60" style={{ fontSize: 13, lineHeight: '20px' }}>Demo hidup memakai komponen dari <code>src/</code>. Props lengkap ada di tab Panduan.</p>
        </>
      )}
      {active === 'panduan' && <Md path={guide} />}
      {active === 'spesifikasi' && spec && <Md path={spec} />}
    </>
  );
}

function SpecIndex() {
  return (
    <article className="prose">
      <h1>Semua spesifikasi Figma</h1>
      <p>Ukuran, padding, radius, dan token warna tiap komponen dari Figma *Dokumentasi Seragam Mobile 3.0*. Tidak semuanya sudah punya kode.</p>
      <ul>{specPaths.map((p) => <li key={p}><a href={`#/d/${p}`}>{titleOf(p)}</a></li>)}</ul>
    </article>
  );
}

const PLATFORMS: { v: S.SeragamPlatform; label: string }[] = [{ v: 'auto', label: 'Otomatis' }, { v: 'mobile', label: 'Mobile' }, { v: 'desktop', label: 'Desktop' }];
function PlatformSwitch({ value, onChange }: { value: S.SeragamPlatform; onChange: (v: S.SeragamPlatform) => void }) {
  return (
    <div role="radiogroup" aria-label="Skala huruf komponen" className="mb-[24px] flex flex-wrap items-center gap-[8px] text-sd-gray-60" style={{ fontSize: 13 }}>
      <span>Skala huruf komponen:</span>
      {PLATFORMS.map((p) => (
        <button key={p.v} role="radio" aria-checked={value === p.v} onClick={() => onChange(p.v)}
          className={`rounded-full border px-[12px] py-[4px] ${value === p.v ? 'border-sd-blue-70 bg-sd-blue-5 text-sd-blue-70' : 'border-sd-gray-30 hover:bg-sd-gray-5'}`} style={{ fontWeight: 600 }}>{p.label}</button>
      ))}
      <span className="text-sd-gray-50">Otomatis = Desktop mulai lebar 1024px</span>
    </div>
  );
}

export default function App() {
  const route = useRoute();
  const [menu, setMenu] = useState(false);
  const [platform, setPlatform] = useState<S.SeragamPlatform>('auto');
  // Tautan contoh di demo (href="#") tidak boleh memindahkan halaman.
  useEffect(() => {
    const on = (e: MouseEvent) => { const a = (e.target as HTMLElement).closest('a'); if (a && a.getAttribute('href') === '#') e.preventDefault(); };
    document.addEventListener('click', on);
    return () => document.removeEventListener('click', on);
  }, []);
  const seg = route.split('/').filter(Boolean);
  let page: ReactNode;
  if (seg.length === 0) page = <Md path="README.md" />;
  else if (seg[0] === 'c') page = <ComponentPage slug={seg[1]} tab={seg[2] ?? ''} />;
  else if (seg[0] === 'd') page = <Md path={seg.slice(1).join('/')} />;
  else if (seg[0] === 'galeri') page = <Gallery />;
  else if (seg[0] === 'spesifikasi') page = <SpecIndex />;
  else page = <Md path="README.md" />;
  return (
    <div className="min-h-screen bg-white font-sans text-sd-gray-90">
      <header className="sticky top-0 z-10 flex h-[48px] items-center border-b border-sd-gray-10 bg-white px-[16px] lg:hidden">
        <button aria-expanded={menu} aria-label="Menu navigasi" onClick={() => setMenu(!menu)} className="rounded-[4px] px-[8px] py-[4px] text-sd-blue-70 hover:bg-sd-gray-5" style={{ fontSize: 15, fontWeight: 600 }}>{menu ? 'Tutup' : 'Menu'}</button>
        <span className="ml-[12px]" style={{ fontSize: 15, fontWeight: 600 }}>Seragam</span>
      </header>
      <Sidebar route={route} open={menu} onNavigate={() => setMenu(false)} />
      <main className="px-[16px] py-[24px] lg:ml-[272px] lg:px-[48px] lg:py-[40px]"><div className="mx-auto max-w-[860px]"><S.Platform platform={platform}><PlatformSwitch value={platform} onChange={setPlatform} />{page}</S.Platform></div></main>
    </div>
  );
}
