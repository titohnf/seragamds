import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { Check } from 'lucide-react';
import { typo } from '../tokens';
import { Modal } from './Modal';
import { useFixedPopup } from '../popup';

export type SelectOption = { value: string; label: ReactNode; description?: ReactNode; disabled?: boolean };

/**
 * Custom Select Seragam (panduan seragam.belajar.id/select; bukan di Figma): pilih satu opsi dengan daftar rancangan khusus, bukan dropdown bawaan browser.
 * `mode="dropdown"` (Custom Select): daftar `listbox` di bawah pemicu; opsi boleh punya `description`.
 * `mode="list-menu"` (Custom List Menu): pemicu membuka Modal berisi daftar yang memuat lebih banyak informasi dan konteks per opsi.
 * Tampilan pemicu sama dengan `Select` (tinggi 46/48, border gray-50, fokus blue-50, galat red-60). Pakai `Select` bawaan bila daftar sederhana.
 * Keyboard: Enter/Space/↓ membuka; ↑/↓/Home/End memindah sorotan; Enter memilih; Esc menutup dan fokus kembali ke pemicu; ketik huruf untuk melompat.
 */
export function CustomSelect({ options, value, onChange, label, helper, error, placeholder = 'Pilih salah satu', disabled = false, mode = 'dropdown', listTitle, className = '' }: {
  options: SelectOption[]; value?: string; onChange: (value: string) => void; label?: string; helper?: ReactNode; error?: ReactNode; placeholder?: string; disabled?: boolean;
  mode?: 'dropdown' | 'list-menu'; listTitle?: string; className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [hi, setHi] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const id = useId();
  const pop = useFixedPopup(open && mode === 'dropdown', btnRef, listRef, { matchWidth: true, constrainHeight: true });
  const sel = options.find((o) => o.value === value);
  const enabled = options.map((o, i) => (o.disabled ? -1 : i)).filter((i) => i >= 0);

  // Safari tidak memberi fokus pada tombol yang diklik: fokuskan pemicu agar keyboard (panah, Enter, Esc) langsung bekerja setelah dibuka dengan mouse.
  const openList = () => { if (disabled) return; setHi(Math.max(0, options.findIndex((o) => o.value === value))); setOpen(true); if (mode === 'dropdown') btnRef.current?.focus(); };
  const close = () => { setOpen(false); btnRef.current?.focus(); };
  const pick = (i: number) => { const o = options[i]; if (!o || o.disabled) return; onChange(o.value); close(); };

  useEffect(() => {
    if (!open || mode !== 'dropdown') return;
    const down = (e: MouseEvent) => !rootRef.current?.contains(e.target as Node) && setOpen(false);
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); btnRef.current?.focus(); } };
    document.addEventListener('mousedown', down); document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', down); document.removeEventListener('keydown', esc); };
  }, [open, mode]);

  const onKey = (e: React.KeyboardEvent) => {
    if (disabled) return;
    if (!open) { if (['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(e.key)) { e.preventDefault(); openList(); } return; }
    if (mode !== 'dropdown') return;
    const cur = enabled.indexOf(hi);
    if (e.key === 'ArrowDown') { e.preventDefault(); setHi(enabled[Math.min(enabled.length - 1, cur + 1)] ?? hi); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setHi(enabled[Math.max(0, cur - 1)] ?? hi); }
    else if (e.key === 'Home') { e.preventDefault(); setHi(enabled[0] ?? hi); }
    else if (e.key === 'End') { e.preventDefault(); setHi(enabled[enabled.length - 1] ?? hi); }
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(hi); }
    else if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'Tab') setOpen(false);
    else if (e.key.length === 1) { const n = options.findIndex((o, i) => !o.disabled && i > hi && String(o.label).toLowerCase().startsWith(e.key.toLowerCase())); const m = n >= 0 ? n : options.findIndex((o) => !o.disabled && String(o.label).toLowerCase().startsWith(e.key.toLowerCase())); if (m >= 0) setHi(m); }
  };

  const optionRow = (o: SelectOption, i: number, active: boolean) => (
    <li key={o.value} id={`${id}-o${i}`} role="option" aria-selected={o.value === value} aria-disabled={o.disabled || undefined}
      onMouseEnter={() => !o.disabled && setHi(i)} onMouseDown={(e) => e.preventDefault()} onClick={() => pick(i)}
      className={`flex cursor-pointer items-start gap-[8px] rounded-[4px] p-[8px] ${active ? 'bg-sd-modal-header' : ''} ${o.disabled ? 'cursor-not-allowed text-sd-gray-50' : 'text-sd-gray-90'}`}>
      <span className="min-w-0 flex-1"><span className="block" style={{ ...typo.body }}>{o.label}</span>{o.description && <span className="block text-sd-gray-60" style={{ ...typo.bodySmall }}>{o.description}</span>}</span>
      {o.value === value && <Check aria-hidden className="mt-[2px] size-[18px] shrink-0 text-sd-blue-70" />}
    </li>
  );

  return (
    <div ref={rootRef} className={`relative flex flex-col gap-[4px] ${className}`}>
      {label && <span id={`${id}-l`} className="text-sd-gray-90" style={{ ...typo.body }}>{label}</span>}
      <button ref={btnRef} type="button" disabled={disabled} role="combobox" aria-haspopup={mode === 'dropdown' ? 'listbox' : 'dialog'} aria-expanded={open} aria-controls={open && mode === 'dropdown' ? `${id}-lb` : undefined}
        aria-labelledby={label ? `${id}-l` : undefined} aria-invalid={!!error || undefined} aria-activedescendant={open && mode === 'dropdown' ? `${id}-o${hi}` : undefined}
        onClick={() => (open ? setOpen(false) : openList())} onKeyDown={onKey} style={{ ...typo.body }}
        className={`relative h-[calc(var(--sd-text-body-line)_+_24px)] w-full rounded-[4px] border py-[12px] pl-[16px] pr-[40px] text-left outline-none transition-shadow
          ${error ? 'border-sd-critical-border bg-sd-surface-critical-subdued focus-visible:shadow-[0_0_0_2px_var(--sd-critical-border)]' : 'border-sd-gray-50 bg-white focus-visible:border-sd-blue-50 focus-visible:shadow-[0_0_0_2px_var(--sd-interactive-focused)]'}
          disabled:border-sd-modal-footer-border disabled:bg-sd-badge-neutral disabled:text-sd-gray-50 ${sel ? 'text-sd-gray-90' : error ? 'text-sd-gray-70' : 'text-sd-gray-60'}`}>
        <span className="block truncate">{sel ? sel.label : placeholder}</span>
        <svg aria-hidden viewBox="0 0 24 24" className="pointer-events-none absolute right-[12px] top-1/2 size-[24px] -translate-y-1/2 text-sd-gray-70" fill="currentColor"><path d="M7 10l5 5 5-5z" /></svg>
      </button>
      {open && mode === 'dropdown' && (
        <ul ref={listRef} id={`${id}-lb`} role="listbox" aria-labelledby={label ? `${id}-l` : undefined} style={pop.style} className="z-50 max-h-[280px] overflow-y-auto rounded-[8px] bg-white p-[4px] shadow-[0_2px_10px_rgba(0,0,0,0.1),0_0_2px_rgba(0,0,0,0.2)]">
          {options.map((o, i) => optionRow(o, i, i === hi))}
        </ul>
      )}
      {mode === 'list-menu' && (
        <Modal open={open} onClose={close} title={listTitle ?? label ?? 'Pilih salah satu'} size="sm">
          <ul role="listbox" aria-labelledby={label ? `${id}-l` : undefined} className="-mx-[8px] flex flex-col">{options.map((o, i) => optionRow(o, i, false))}</ul>
        </Modal>
      )}
      {(error || helper) && <span className={error ? 'text-sd-red-60' : 'text-sd-gray-60'} style={{ ...typo.helper }}>{error || helper}</span>}
    </div>
  );
}
