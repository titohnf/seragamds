import { cloneElement, isValidElement, useEffect, useId, useRef, useState, type ReactElement, type ReactNode } from 'react';
import { typo } from '../tokens';
import { useFixedPopup } from '../popup';

/**
 * Tooltip Seragam: latar gray-90, teks putih Body Small, padding 8, radius 4. Muncul saat hover atau fokus, hilang dengan `Esc` (WCAG 1.4.13).
 * `side`: sisi pilihan (`top`, `bottom`, `left`, `right`); membalik sendiri bila tidak muat di layar dan bergeser agar tetap terlihat (`src/popup.ts`).
 * Bila `children` satu elemen, ia diberi `aria-describedby` ke tooltip supaya pembaca layar membacakannya; tooltip tetap ada di DOM (disembunyikan) agar deskripsinya terhitung.
 * `inline` (ekstensi) membuat pembungkus `inline`, bukan `inline-flex`, agar istilah di tengah kalimat tidak memaksa tanda baca sesudahnya turun sendirian ke baris baru.
 */
export function Tooltip({ text, side = 'top', inline = false, children }: { text: ReactNode; side?: 'top' | 'bottom' | 'left' | 'right'; inline?: boolean; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLSpanElement>(null);
  const tip = useRef<HTMLSpanElement>(null);
  const id = useId();
  const pop = useFixedPopup(open, wrap, tip, { placement: side, align: 'center', gap: 6 });
  useEffect(() => {
    if (!open) return;
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', key);
    return () => document.removeEventListener('keydown', key);
  }, [open]);
  const trigger = isValidElement(children) ? cloneElement(children as ReactElement<{ 'aria-describedby'?: string }>, { 'aria-describedby': id }) : children;
  return (
    <span ref={wrap} className={`${inline ? 'inline' : 'inline-flex'}`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}>
      {trigger}
      <span ref={tip} id={id} role="tooltip" hidden={!open} style={open ? pop.style : undefined}
        className="pointer-events-none z-50 w-max max-w-[240px] rounded-[4px] bg-sd-gray-90 p-[8px] text-white" data-side={pop.placement}>
        <span style={{ ...typo.bodySmall }}>{text}</span>
      </span>
    </span>
  );
}
