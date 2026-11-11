import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { typo } from '../tokens';
import { useFixedPopup } from '../popup';

export type PopoverItem = { label: ReactNode; onSelect: () => void; disabled?: boolean };
export type PopoverSide = 'bottom' | 'top' | 'right' | 'left';

const OPEN_EVENT = 'sd-popover-open';

/**
 * Popover (menu) Seragam: panel putih radius 8, padding 4x8, bayangan 0 2 10 rgba(0,0,0,.1) + 0 0 2 rgba(0,0,0,.2); item padding 8 radius 4, Body; hover #F5F5F5, tekan #D9DBDD, fokus ring blue-50.
 * Posisi tahan tepi layar dan wadah overflow-hidden (`position: fixed`, membalik sisi bila tak muat; lihat `src/popup.ts`).
 * Perilaku (panduan seragam.belajar.id/popover): SATU Popover terbuka sekali waktu (membuka yang lain menutup ini); muncul di atas/bawah/samping pemicu (`side`, bawaan bawah; `align` kiri/kanan);
 * klik di luar atau Esc menutup (fokus kembali ke pemicu); keyboard: ↓/↑ pindah item, Home/End, Enter memilih. Isi singkat saja.
 */
export function Popover({ trigger, items, align = 'left', side = 'bottom' }: { trigger: (p: { open: boolean; toggle: () => void }) => ReactNode; items: PopoverItem[]; align?: 'left' | 'right'; side?: PopoverSide }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const id = useId();
  const pop = useFixedPopup(open, ref, menuRef, { placement: side, align: align === 'right' ? 'end' : 'start', constrainHeight: true });
  useEffect(() => {
    if (!open) return;
    const down = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); ref.current?.querySelector<HTMLElement>('button')?.focus(); } };
    const other = (e: Event) => (e as CustomEvent).detail !== id && setOpen(false);
    document.addEventListener('mousedown', down); document.addEventListener('keydown', key); document.addEventListener(OPEN_EVENT, other);
    document.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: id }));
    return () => { document.removeEventListener('mousedown', down); document.removeEventListener('keydown', key); document.removeEventListener(OPEN_EVENT, other); };
  }, [open, id]);
  // menu baru terlihat setelah posisinya terhitung; elemen tersembunyi tidak bisa difokuskan
  useEffect(() => { if (open && pop.ready) ref.current?.querySelector<HTMLElement>('[role=menuitem]:not(:disabled)')?.focus(); }, [open, pop.ready]);
  const move = (e: React.KeyboardEvent) => {
    const els = [...(ref.current?.querySelectorAll<HTMLElement>('[role=menuitem]:not(:disabled)') ?? [])];
    const i = els.indexOf(document.activeElement as HTMLElement);
    const to = e.key === 'ArrowDown' ? els[(i + 1) % els.length] : e.key === 'ArrowUp' ? els[(i - 1 + els.length) % els.length] : e.key === 'Home' ? els[0] : e.key === 'End' ? els[els.length - 1] : null;
    if (to) { e.preventDefault(); to.focus(); }
  };
  return (
    <div ref={ref} className="relative inline-block">
      {trigger({ open, toggle: () => setOpen((o) => !o) })}
      {open && (
        <ul ref={menuRef} role="menu" onKeyDown={move} style={pop.style} className="z-50 min-w-[120px] overflow-y-auto rounded-[8px] bg-white px-[8px] py-[4px] shadow-[0_2px_10px_rgba(0,0,0,0.1),0_0_2px_rgba(0,0,0,0.2)]">
          {items.map((it, i) => (
            <li key={i} role="none">
              <button role="menuitem" disabled={it.disabled} onClick={() => { it.onSelect(); setOpen(false); }}
                className="w-full whitespace-nowrap rounded-[4px] p-[8px] text-left text-sd-gray-90 outline-none hover:bg-sd-modal-header active:bg-sd-modal-footer-border focus-visible:shadow-[inset_0_0_0_2px_var(--sd-interactive-focused)] disabled:text-sd-gray-50 disabled:hover:bg-transparent"
                style={{ ...typo.body }}>{it.label}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
