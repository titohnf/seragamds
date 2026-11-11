import { useEffect, type RefObject } from 'react';

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Perilaku dialog (Modal, BottomSheet): mengunci gulir halaman, memindahkan fokus ke dalam dialog saat dibuka,
 * menjaga Tab tetap di dalam dialog, dan mengembalikan fokus ke pemicu saat ditutup.
 */
export function useDialogBehavior(open: boolean, ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const el = ref.current;
    if (el) (el.querySelector<HTMLElement>('[data-autofocus]') ?? el).focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !el) return;
      const items = [...el.querySelectorAll<HTMLElement>(FOCUSABLE)];
      if (!items.length) { e.preventDefault(); el.focus(); return; }
      const first = items[0], last = items[items.length - 1], now = document.activeElement;
      if (e.shiftKey && (now === first || now === el)) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && now === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = overflow; prev?.focus?.(); };
  }, [open, ref]);
}
