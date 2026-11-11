import { useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { Menu, X } from 'lucide-react';
import { typo } from '../tokens';
import { useMediaQuery } from '../hooks';
import { useFixedPopup } from '../popup';

export type NavItem = { key: string; label: ReactNode; href?: string; onClick?: () => void };

const useBelow = (px: number) => useMediaQuery(`(max-width: ${px - 1}px)`);

function Item({ it, on, block = false, onPick }: { it: NavItem; on: boolean; block?: boolean; onPick?: () => void }) {
  const Tag = it.href ? 'a' : 'button';
  return (
    <Tag href={it.href} onClick={() => { it.onClick?.(); onPick?.(); }} aria-current={on ? 'page' : undefined} className={block ? 'relative flex min-h-[48px] w-full items-center text-left' : 'relative flex h-[64px] shrink-0 items-center'}>
      <span className={`rounded-[4px] px-[12px] py-[8px] outline-none hover:bg-sd-gray-5 active:bg-sd-gray-5 ${on ? 'text-sd-blue-70' : 'text-sd-gray-90'}`} style={{ ...typo.action }}>{it.label}</span>
      {on && (block ? <span className="absolute inset-y-[8px] left-0 w-[4px] rounded-r-[4px] bg-sd-blue-70" /> : <span className="absolute bottom-0 left-[12px] right-[12px] h-[4px] rounded-t-[4px] bg-sd-blue-70" />)}
    </Tag>
  );
}

/**
 * Navigation Bar Seragam ("Navbar", panduan seragam.belajar.id/navigation-bar): item Action semibold, padding 8x12, radius 4; hover/tekan #F1F1F1; aktif teks blue-70 dengan garis bawah 4px selebar teks
 * (di Figma 44px = lebar label "Menu" 68px dikurangi padding 12; jangan 44px tetap); fokus ring blue-50.
 * Tanpa `logo` dan `actions` hanya menu (`<nav>`). Dengan `logo` atau `actions` menjadi **navbar utuh** (Navbar Desktop Figma: tinggi 64, putih, Elevation 01, logo kiri bisa diklik ke beranda, menu, aksi kanan):
 * varian lewat kelengkapan props: Default (logo+menu+aksi) · tanpa aksi (tanpa `actions`) · tanpa menu (`items` kosong; admin/dashboard, pasangkan dengan VerticalNavigation) · hanya logo.
 * `sticky` (bawaan true pada navbar utuh): menempel di atas. Perilaku responsif: **overflow** menu yang tak muat (jarak ke logo/aksi < 24px) dipindah ke menu "Lainnya"; di bawah `collapseBelow` (bawaan 769px) menu dan aksi dilipat ke ikon hamburger.
 * Halaman anak tetap menyalakan menu induknya (`active` = key induk).
 */
export function NavigationBar({ items, active, logo, actions, collapseBelow = 769, sticky = true, moreLabel = 'Lainnya', 'aria-label': ariaLabel = 'Navigasi utama', className = '' }: {
  items: NavItem[]; active: string; logo?: ReactNode; actions?: ReactNode; collapseBelow?: number; sticky?: boolean; moreLabel?: string; 'aria-label'?: string; className?: string;
}) {
  const shell = !!(logo || actions);
  const compact = useBelow(collapseBelow) && shell && items.length > 0; // tanpa menu (admin/dashboard) tidak ada yang dilipat: aksi tetap tampil
  const [panel, setPanel] = useState(false);
  const [more, setMore] = useState(false);
  const [visible, setVisible] = useState(items.length);
  const wrapRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const moreRef = useRef<HTMLDivElement>(null);
  const moreMenu = useRef<HTMLUListElement>(null);
  const morePos = useFixedPopup(more, moreRef, moreMenu, { align: 'end', constrainHeight: true });

  // Overflow: hitung berapa item muat di wadah menu dengan sisa jarak >= 24px; sisanya ke "Lainnya".
  useLayoutEffect(() => {
    const wrap = wrapRef.current, m = measureRef.current;
    if (!shell || compact || !wrap || !m) { setVisible(items.length); return; }
    const calc = () => {
      const w = [...m.children].map((c) => (c as HTMLElement).offsetWidth); const moreW = w.pop() ?? 0;
      const room = wrap.clientWidth - 24; let used = 0, n = 0;
      for (let i = 0; i < w.length; i++) { const next = used + w[i] + (i ? 4 : 0); if (next > room) break; used = next; n = i + 1; }
      if (n < w.length) { n = 0; used = 0; for (let i = 0; i < w.length; i++) { const next = used + w[i] + (i ? 4 : 0); if (next + 4 + moreW > room) break; used = next; n = i + 1; } }
      setVisible(n);
    };
    calc();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(calc) : null; ro?.observe(wrap);
    return () => ro?.disconnect();
  }, [shell, compact, items]);
  useEffect(() => { if (!compact) setPanel(false); }, [compact]);
  useEffect(() => {
    if (!panel && !more) return;
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') { setPanel(false); setMore(false); } };
    const down = (e: MouseEvent) => { if (!wrapRef.current?.parentElement?.contains(e.target as Node)) { setPanel(false); setMore(false); } };
    document.addEventListener('keydown', key); document.addEventListener('mousedown', down);
    return () => { document.removeEventListener('keydown', key); document.removeEventListener('mousedown', down); };
  }, [panel, more]);

  const shown = items.slice(0, visible), hidden = items.slice(visible);
  const menu = items.length > 0 && !compact && (
    <div ref={wrapRef} className="relative flex min-w-0 flex-1 items-end justify-end gap-[4px]">
      <nav aria-label={ariaLabel} className="flex items-end gap-[4px]">
        {shown.map((it) => <Item key={it.key} it={it} on={it.key === active} />)}
        {hidden.length > 0 && (
          <div ref={moreRef} className="relative">
            <button type="button" aria-haspopup="menu" aria-expanded={more} onClick={() => setMore((o) => !o)} className="relative flex h-[64px] items-center">
              <span className={`rounded-[4px] px-[12px] py-[8px] hover:bg-sd-gray-5 ${hidden.some((h) => h.key === active) ? 'text-sd-blue-70' : 'text-sd-gray-90'}`} style={{ ...typo.action }}>{moreLabel}</span>
              {hidden.some((h) => h.key === active) && <span className="absolute bottom-0 left-[12px] right-[12px] h-[4px] rounded-t-[4px] bg-sd-blue-70" />}
            </button>
            {more && (
              <ul ref={moreMenu} role="menu" style={morePos.style} className="z-50 min-w-[200px] overflow-y-auto rounded-[8px] bg-white px-[8px] py-[4px] shadow-sd-03">
                {hidden.map((it) => <li key={it.key} role="none"><Item it={it} on={it.key === active} block onPick={() => setMore(false)} /></li>)}
              </ul>
            )}
          </div>
        )}
      </nav>
      {/* pengukur tak terlihat: lebar tiap item + "Lainnya" */}
      <div ref={measureRef} aria-hidden className="pointer-events-none invisible absolute -z-10 flex gap-0 whitespace-nowrap" style={{ left: 0, top: 0, height: 0, overflow: 'hidden' }}>
        {items.map((it) => <span key={it.key} className="inline-block px-[12px]" style={{ ...typo.action }}>{it.label}</span>)}
        <span className="inline-block px-[12px]" style={{ ...typo.action }}>{moreLabel}</span>
      </div>
    </div>
  );

  if (!shell) {
    return (
      <nav aria-label={ariaLabel} className={`flex items-end gap-[4px] ${className}`}>
        {items.map((it) => <Item key={it.key} it={it} on={it.key === active} />)}
      </nav>
    );
  }
  return (
    <header className={`${sticky ? 'sticky top-0 z-40' : 'relative'} bg-white shadow-sd-01 ${className}`}>
      <div className="mx-auto flex h-[64px] max-w-[1440px] items-center gap-[24px] px-[16px] md:px-[24px] lg:px-[80px]">
        {logo && <div className="flex shrink-0 items-center">{logo}</div>}
        {!compact && <div className="flex min-w-0 flex-1 items-center">{menu || <span className="flex-1" />}</div>}
        {compact ? <span className="flex-1" /> : null}
        {!compact && actions && <div className="flex shrink-0 items-center gap-[12px]">{actions}</div>}
        {compact && (
          <button type="button" aria-label={panel ? 'Tutup menu' : 'Buka menu'} aria-expanded={panel} aria-controls={panelId} onClick={() => setPanel((o) => !o)}
            className="grid size-[44px] place-items-center rounded-[4px] text-sd-gray-90 hover:bg-sd-gray-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sd-blue-50">
            {panel ? <X aria-hidden className="size-[24px]" /> : <Menu aria-hidden className="size-[24px]" />}
          </button>
        )}
      </div>
      {compact && panel && (
        <div id={panelId} className="absolute inset-x-0 top-full border-t border-sd-modal-footer-border bg-white px-[16px] py-[8px] shadow-sd-03 md:px-[24px]">
          <nav aria-label={ariaLabel} className="flex flex-col">
            {items.map((it) => <Item key={it.key} it={it} on={it.key === active} block onPick={() => setPanel(false)} />)}
          </nav>
          {actions && <div className="flex flex-wrap items-center gap-[12px] border-t border-sd-modal-footer-border py-[12px]">{actions}</div>}
        </div>
      )}
    </header>
  );
}
