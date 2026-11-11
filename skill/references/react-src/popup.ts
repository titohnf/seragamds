import { useLayoutEffect, useState, type CSSProperties, type RefObject } from 'react';

export type PopupPlacement = 'bottom' | 'top' | 'right' | 'left';
export type PopupAlign = 'start' | 'center' | 'end';

/**
 * Posisi popup yang tahan tepi layar dan wadah `overflow-hidden` (Popover, CustomSelect, DatePicker, menu "Lainnya", Tooltip).
 * Popup memakai `position: fixed` dengan koordinat dari `getBoundingClientRect()` pemicunya, sehingga tidak terpotong wadah ber-overflow
 * dan urutan DOM (dan urutan Tab) tetap. Perilaku: **membalik** sisi (bawah ↔ atas, kanan ↔ kiri) bila sisi pilihan tidak muat dan sisi lawan lebih lega;
 * **menggeser** sepanjang sumbu silang agar tetap di dalam layar (margin 8px); `constrainHeight` membatasi tinggi ke ruang yang tersedia (daftar bergulir);
 * posisi dihitung ulang saat gulir (di wadah mana pun) dan ubah ukuran. Sebelum dihitung popup `visibility: hidden` agar tidak berkedip di (0,0).
 */
export function useFixedPopup(open: boolean, anchor: RefObject<HTMLElement | null>, popup: RefObject<HTMLElement | null>, o: {
  placement?: PopupPlacement; align?: PopupAlign; gap?: number; margin?: number; matchWidth?: boolean; constrainHeight?: boolean;
} = {}): { style: CSSProperties; placement: PopupPlacement; ready: boolean } {
  const { placement = 'bottom', align = 'start', gap = 4, margin = 8, matchWidth = false, constrainHeight = false } = o;
  const [pos, setPos] = useState<{ top: number; left: number; width?: number; maxHeight?: number; placement: PopupPlacement } | null>(null);

  useLayoutEffect(() => {
    if (!open) { setPos(null); return; }
    let raf = 0;
    const place = () => {
      const a = anchor.current?.getBoundingClientRect(), p = popup.current;
      if (!a || !p) return;
      const vw = document.documentElement.clientWidth, vh = window.innerHeight;
      const w = matchWidth ? a.width : p.offsetWidth;
      const h = Math.max(p.offsetHeight, p.scrollHeight);
      let resolved = placement, top = 0, left = 0, maxHeight: number | undefined;
      if (placement === 'bottom' || placement === 'top') {
        const below = vh - a.bottom - gap - margin, above = a.top - gap - margin;
        resolved = placement === 'bottom' ? (h > below && above > below ? 'top' : 'bottom') : (h > above && below > above ? 'bottom' : 'top');
        const room = resolved === 'bottom' ? below : above;
        if (constrainHeight && h > room) maxHeight = Math.max(80, room);
        const hh = maxHeight ?? h;
        top = resolved === 'bottom' ? a.bottom + gap : a.top - gap - hh;
        left = align === 'start' ? a.left : align === 'end' ? a.right - w : a.left + a.width / 2 - w / 2;
        left = Math.min(Math.max(left, margin), Math.max(margin, vw - w - margin));
        top = Math.max(margin, top);
      } else {
        const right = vw - a.right - gap - margin, leftRoom = a.left - gap - margin;
        resolved = placement === 'right' ? (w > right && leftRoom > right ? 'left' : 'right') : (w > leftRoom && right > leftRoom ? 'right' : 'left');
        left = resolved === 'right' ? a.right + gap : a.left - gap - w;
        top = align === 'end' ? a.bottom - h : align === 'center' ? a.top + a.height / 2 - h / 2 : a.top;
        top = Math.min(Math.max(top, margin), Math.max(margin, vh - h - margin));
      }
      setPos((prev) => (prev && prev.top === top && prev.left === left && prev.maxHeight === maxHeight && prev.placement === resolved && prev.width === (matchWidth ? a.width : undefined) ? prev : { top, left, width: matchWidth ? a.width : undefined, maxHeight, placement: resolved }));
    };
    const schedule = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(place); };
    place();
    window.addEventListener('resize', schedule); window.addEventListener('scroll', schedule, true);
    const ro = typeof ResizeObserver !== 'undefined' && popup.current ? new ResizeObserver(schedule) : null; if (popup.current) ro?.observe(popup.current);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', schedule); window.removeEventListener('scroll', schedule, true); ro?.disconnect(); };
  }, [open, anchor, popup, placement, align, gap, margin, matchWidth, constrainHeight]);

  return {
    style: { position: 'fixed', top: pos?.top ?? 0, left: pos?.left ?? 0, width: pos?.width, maxHeight: pos?.maxHeight, visibility: pos ? 'visible' : 'hidden' },
    placement: pos?.placement ?? placement,
    /** true setelah posisi dihitung: popup baru terlihat dan bisa menerima fokus (elemen `visibility: hidden` tidak bisa difokuskan). */
    ready: !!pos,
  };
}
