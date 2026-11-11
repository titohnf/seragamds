import { useId, useState, type ReactNode } from 'react';
import { typo } from '../tokens';

/**
 * Accordion Seragam (gaya Card): header padding 16x12, judul Heading Small semibold, border #D9DBDD, radius 4; terbuka border #C9CBCF dan isi padding 16. Tekan: latar #D9DBDD.
 * Bawaan TERTUTUP (`defaultOpen` untuk membuka di awal). Header = tombol (`aria-expanded`, `aria-controls`; Enter/Space membuka-menutup, fokus tampak); isi `role="region"` berlabel judul.
 * Satu panel mandiri di sini; untuk **single expand** (satu terbuka) atau **multi expand** pakai `AccordionGroup`. Variasi Custom (selebar halaman, tanpa kartu) belum ada.
 */
export function Accordion({ title, children, defaultOpen = false, open: controlled, onOpenChange }: {
  title: ReactNode; children: ReactNode; defaultOpen?: boolean; open?: boolean; onOpenChange?: (o: boolean) => void;
}) {
  const [inner, setInner] = useState(defaultOpen);
  const open = controlled ?? inner;
  const uid = useId();
  const toggle = () => { const n = !open; setInner(n); onOpenChange?.(n); };
  return (
    <div className={`overflow-hidden rounded-[4px] border bg-white ${open ? 'border-sd-modal-border' : 'border-sd-modal-footer-border'}`}>
      <button type="button" id={`${uid}-h`} aria-expanded={open} aria-controls={`${uid}-p`} onClick={toggle}
        className="flex w-full items-center justify-between gap-[12px] bg-white px-[12px] py-[16px] text-left outline-none active:bg-sd-modal-footer-border focus-visible:shadow-[inset_0_0_0_2px_var(--sd-interactive-focused)]">
        <span className="text-sd-gray-90" style={{ ...typo.headingSmall }}>{title}</span>
        <svg aria-hidden viewBox="0 0 24 24" className={`size-[20px] shrink-0 text-sd-gray-90 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
      </button>
      {open && <div id={`${uid}-p`} role="region" aria-labelledby={`${uid}-h`} className="border-t border-sd-modal-border p-[16px] text-sd-gray-90" style={{ ...typo.body }}>{children}</div>}
    </div>
  );
}

/**
 * Kelompok Accordion dengan aturan buka-tutup (panduan: Single Expand / Multi Expand). `type="single"` (bawaan) = membuka satu panel menutup yang lain; `type="multiple"` = bebas.
 * `defaultOpen` = daftar `key` yang terbuka di awal. Batasi jumlah panel agar informasi tidak berlebihan; judul panel deskriptif.
 */
export function AccordionGroup({ items, type = 'single', defaultOpen = [], className = '' }: {
  items: { key: string; title: ReactNode; content: ReactNode }[]; type?: 'single' | 'multiple'; defaultOpen?: string[]; className?: string;
}) {
  const [openKeys, setOpenKeys] = useState<string[]>(type === 'single' ? defaultOpen.slice(0, 1) : defaultOpen);
  const set = (key: string, o: boolean) => setOpenKeys((cur) => (o ? (type === 'single' ? [key] : [...cur, key]) : cur.filter((k) => k !== key)));
  return (
    <div className={`flex flex-col gap-[8px] ${className}`}>
      {items.map((it) => <Accordion key={it.key} title={it.title} open={openKeys.includes(it.key)} onOpenChange={(o) => set(it.key, o)}>{it.content}</Accordion>)}
    </div>
  );
}
