import { Fragment, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { typo } from '../tokens';

export type Crumb = { label: ReactNode; href?: string; onClick?: () => void };

/**
 * Breadcrumb Seragam (panduan seragam.belajar.id/breadcrumbs): jalur hierarki dari halaman awal ke halaman saat ini; halaman saat ini ditandai (`aria-current`, warna gray-90).
 * `maxItems` memotong jalur yang terlalu panjang: tampil item pertama, "…" (bukan tautan), lalu `maxItems - 1` item terakhir; pertahankan halaman awal, kedua dari akhir, dan halaman saat ini
 * (maxItems 3). `maxItems="auto"` memotong otomatis menurut lebar: jalur dipersingkat sampai muat dalam **70% lebar wadah** (minimal 3 level). Pedoman: mobile 2–3 level terakhir, tablet ±4–5 item, desktop semua level selama muat (potong bila > 70% lebar wadah). Maksimal 3 kata per level, sentence case.
 * Breadcrumb Seragam: tautan 15/22 gray-60 (hover gray-90 bergaris bawah), halaman aktif gray-90, pemisah chevron, gap 4. `inverse` (ekstensi) untuk latar gelap: tautan text-inverse-subdued, aktif putih, pemisah gray-30. */
export function Breadcrumb({ items: all, inverse = false, maxItems: max }: { items: Crumb[]; inverse?: boolean; maxItems?: number | 'auto' }) {
  const navRef = useRef<HTMLElement>(null);
  const [fit, setFit] = useState(all.length);
  const [width, setWidth] = useState(0);
  const auto = max === 'auto';
  useLayoutEffect(() => {
    if (!auto) return;
    const nav = navRef.current; if (!nav) return;
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => { setWidth(nav.clientWidth); setFit(all.length); }) : null;
    ro?.observe(nav); setWidth(nav.clientWidth);
    return () => ro?.disconnect();
  }, [auto, all.length]);
  useLayoutEffect(() => {
    if (!auto) return;
    const nav = navRef.current, ol = nav?.querySelector('ol'); if (!nav || !ol) return;
    // lebar isi sebenarnya (ol selalu selebar wadah karena flex-wrap): jumlah lebar item + jarak 4px
    const kids = [...ol.children] as HTMLElement[]; const content = kids.reduce((s, k) => s + k.offsetWidth, 0) + 4 * Math.max(0, kids.length - 1);
    if (content > nav.clientWidth * 0.7 && fit > 3) setFit(fit - 1);
  }, [auto, fit, width, all]);
  const maxItems = auto ? fit : max;
  const cut = !!maxItems && maxItems >= 2 && all.length > maxItems;
  const items: (Crumb | null)[] = cut ? [all[0], null, ...all.slice(all.length - (maxItems - 1))] : all;
  return (
    <nav aria-label="Breadcrumb" ref={navRef}>
      <ol className="flex flex-wrap items-center gap-[4px]" style={{ ...typo.body }}>
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <Fragment key={i}>
              <li>
                {c === null ? <span aria-label="Level tengah disembunyikan" className={inverse ? 'text-sd-text-inverse-subdued' : 'text-sd-gray-60'}>…</span>
                  : last ? <span aria-current="page" className={inverse ? 'text-white' : 'text-sd-gray-90'}>{c.label}</span>
                  : <a href={c.href} onClick={c.onClick} className={inverse ? 'cursor-pointer text-sd-text-inverse-subdued hover:text-white hover:underline' : 'cursor-pointer text-sd-gray-60 hover:text-sd-gray-90 hover:underline'}>{c.label}</a>}
              </li>
              {!last && <li aria-hidden className={inverse ? 'text-sd-gray-30' : 'text-sd-gray-60'}><svg viewBox="0 0 24 24" className="size-[16px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg></li>}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
