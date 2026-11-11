import { useEffect, useSyncExternalStore, type RefObject } from 'react';

// Safari tidak memfokuskan tombol saat diklik, sehingga document.activeElement saat dialog dibuka bukan pemicunya.
// Catat elemen yang terakhir ditekan sebagai cadangan agar fokus tetap kembali ke pemicu.
let lastPressed: HTMLElement | null = null;
if (typeof document !== 'undefined') {
  document.addEventListener('pointerdown', (e) => { lastPressed = (e.target as HTMLElement | null)?.closest?.('button, a[href], input, select, textarea, summary, [tabindex]') as HTMLElement | null; }, true);
}

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Perilaku dialog (Modal, BottomSheet): mengunci gulir halaman, memindahkan fokus ke dalam dialog saat dibuka,
 * menjaga Tab tetap di dalam dialog, dan mengembalikan fokus ke pemicu saat ditutup.
 */
export function useDialogBehavior(open: boolean, ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!open) return;
    const active = document.activeElement as HTMLElement | null;
    const prev = active && active !== document.body ? active : lastPressed;
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

/**
 * Media query yang aman untuk render di server dan hidrasi: di server dan saat hidrasi bernilai `false`, lalu mengikuti peramban.
 * Memakai useSyncExternalStore sehingga tidak ada beda HTML server/klien (tanpa peringatan hidrasi).
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = (cb: () => void) => {
    if (typeof window === 'undefined' || !window.matchMedia) return () => {};
    const mq = window.matchMedia(query); mq.addEventListener('change', cb);
    return () => mq.removeEventListener('change', cb);
  };
  const get = () => typeof window !== 'undefined' && !!window.matchMedia && window.matchMedia(query).matches;
  return useSyncExternalStore(subscribe, get, () => false);
}
