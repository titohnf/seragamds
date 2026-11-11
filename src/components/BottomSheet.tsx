import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { typo } from '../tokens';
import { useDialogBehavior } from '../hooks';

/**
 * Bottom Sheet Seragam: panel putih menempel di bawah, sudut atas radius 16, overlay hitam 70%; menu item tinggi 46 padding 12x16 (Heading Small semibold), tombol aksi tetap di bawah dengan garis atas #D9DBDD.
 * Perilaku (panduan seragam.belajar.id/bottom-sheets): muncul hanya saat dipicu; ditutup dengan GESER KE BAWAH pada pegangan di atas panel, mengetuk area luar (`dismissOnOverlay`, bawaan true), atau Esc;
 * tinggi menyesuaikan isi (maks. 90% layar, isi menggulir). Bentuk Dialog (ada `action`) menuntut pengguna menyelesaikan aksi: set `dismissOnOverlay={false}`.
 * Judul opsional untuk Default/Menu, wajib untuk Dialog. Di tablet/desktop pertimbangkan Modal.
 */
export function BottomSheet({ open, onClose, title, children, action, dismissOnOverlay = true }: { open: boolean; onClose: () => void; title?: ReactNode; children: ReactNode; action?: ReactNode; dismissOnOverlay?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const startY = useRef<number | null>(null);
  const [drag, setDrag] = useState(0);
  useDialogBehavior(open, ref);
  useEffect(() => { if (!open) setDrag(0); }, [open]);
  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70" onMouseDown={(e) => dismissOnOverlay && e.target === e.currentTarget && onClose()}>
      <div ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby={title ? titleId : undefined}
        className="flex max-h-[90%] w-full max-w-[640px] flex-col rounded-t-[16px] bg-white outline-none transition-transform motion-reduce:transition-none"
        style={{ transform: drag ? `translateY(${drag}px)` : undefined, transitionDuration: startY.current === null ? '200ms' : '0ms' }}>
        <div className="touch-none" aria-hidden
          onPointerDown={(e) => { startY.current = e.clientY; (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId); }}
          onPointerMove={(e) => { if (startY.current !== null) setDrag(Math.max(0, e.clientY - startY.current)); }}
          onPointerUp={() => { const d = drag; startY.current = null; if (d > 80) onClose(); else setDrag(0); }}
          onPointerCancel={() => { startY.current = null; setDrag(0); }}>
          <div className="mx-auto mt-[8px] h-[4px] w-[40px] rounded-full bg-sd-gray-20" />
          <div className="h-[8px]" />
        </div>
        {title && <h2 id={titleId} className="px-[16px] pb-[8px] pt-[12px] text-sd-gray-90" style={{ ...typo.headingSmall }}>{title}</h2>}
        <div className="overflow-y-auto px-[8px] py-[8px]">{children}</div>
        {action && <div className="border-t border-sd-modal-footer-border p-[16px]">{action}</div>}
      </div>
    </div>
  );
}

export function BottomSheetItem({ children, selected, disabled, onClick }: { children: ReactNode; selected?: boolean; disabled?: boolean; onClick?: () => void }) {
  return (
    <button type="button" disabled={disabled} onClick={onClick} aria-current={selected || undefined}
      className={`flex min-h-[46px] w-full items-center gap-[12px] rounded-[4px] py-[12px] pl-[8px] pr-[16px] text-left outline-none hover:bg-sd-modal-header active:bg-sd-modal-footer-border focus-visible:shadow-[inset_0_0_0_2px_var(--sd-interactive-focused)] disabled:text-sd-gray-50 ${selected ? 'bg-sd-blue-5 text-sd-blue-70' : 'text-sd-gray-90'}`}
      style={{ ...typo.headingSmall }}>{children}</button>
  );
}
