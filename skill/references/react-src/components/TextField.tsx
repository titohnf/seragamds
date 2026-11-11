import { forwardRef, type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes } from 'react';
import { typo } from '../tokens';

const BASE = 'w-full rounded-[4px] border bg-white text-sd-gray-90 placeholder:text-sd-gray-50 outline-none transition-shadow';
const STATE = 'border-sd-gray-50 focus:border-sd-blue-50 focus:shadow-[0_0_0_2px_var(--sd-interactive-focused)] disabled:bg-sd-badge-neutral disabled:border-sd-modal-footer-border disabled:text-sd-gray-50 read-only:bg-sd-badge-neutral read-only:border-sd-modal-footer-border read-only:text-sd-gray-50 read-only:focus:border-sd-modal-footer-border read-only:focus:shadow-none';
const ERROR = 'border-sd-critical-border bg-sd-surface-critical-subdued focus:border-sd-critical-border focus:shadow-[0_0_0_2px_var(--sd-critical-border)]';
/** Kelas dasar kolom isian Seragam (border, fokus, nonaktif) untuk elemen input/select/textarea mentah. */
export const fieldClass = `${BASE} ${STATE}`;
const TEXT = { ...typo.body } as const;

type Common = { label?: string; helper?: ReactNode; error?: ReactNode };

/** Bila ada `label`, akarnya `<label>` sehingga teks label terhubung ke isiannya (klik label memfokuskan, dibacakan pembaca layar). */
function Wrap({ label, helper, error, children }: Common & { children: ReactNode }) {
  const Root = label ? 'label' : 'div';
  return (
    <Root className="flex flex-col gap-[4px]">
      {label && <span className="text-sd-gray-90" style={{ ...typo.body }}>{label}</span>}
      {children}
      {(error || helper) && <span className={error ? 'text-sd-red-60' : 'text-sd-gray-60'} style={{ ...typo.helper }}>{error || helper}</span>}
    </Root>
  );
}

/** Text Field Seragam: tinggi 46, padding 12x16, radius 4, border gray-50; fokus blue-50 + ring 2px; error red + latar red-5. */
export const TextField = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & Common & { leftIcon?: ReactNode; rightIcon?: ReactNode }>(
  ({ label, helper, error, leftIcon, rightIcon, className = '', ...rest }, ref) => (
    <Wrap label={label} helper={helper} error={error}>
      <div className="relative">
        {leftIcon && <span className="pointer-events-none absolute left-[12px] top-1/2 -translate-y-1/2 text-sd-gray-60">{leftIcon}</span>}
        <input ref={ref} aria-invalid={!!error || undefined} {...rest} style={TEXT}
          className={`${BASE} ${error ? ERROR : STATE} h-[calc(var(--sd-text-body-line)_+_24px)] py-[12px] ${leftIcon ? 'pl-[40px]' : 'pl-[16px]'} ${rightIcon ? 'pr-[40px]' : 'pr-[16px]'} ${className}`} />
        {rightIcon && <span className="absolute right-[12px] top-1/2 -translate-y-1/2 text-sd-gray-60">{rightIcon}</span>}
      </div>
    </Wrap>
  ),
);
TextField.displayName = 'TextField';

/**
 * Text Area Seragam: tinggi awal ±3 baris (Mobile 102 / Desktop 108), padding 12x16, bisa di-resize (`resize-y`).
 * `autoGrow`: tinggi mengikuti isi (disarankan di mobile) sampai `maxRows` baris (bawaan 8), lalu menggulir; resize manual dimatikan.
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement> & Common & { autoGrow?: boolean; maxRows?: number }>(
  ({ label, helper, error, className = '', autoGrow = false, maxRows = 8, onInput, ...rest }, ref) => {
    const fit = (el: HTMLTextAreaElement) => {
      if (!autoGrow) return;
      const cs = getComputedStyle(el); const line = parseFloat(cs.lineHeight) || 22; const pad = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom) + parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth);
      el.style.height = 'auto'; el.style.height = `${Math.min(el.scrollHeight + (parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth)), line * maxRows + pad)}px`;
      el.style.overflowY = el.scrollHeight > line * maxRows + pad ? 'auto' : 'hidden';
    };
    return (
    <Wrap label={label} helper={helper} error={error}>
      <textarea ref={(el) => { if (el && autoGrow) fit(el); if (typeof ref === 'function') ref(el); else if (ref) ref.current = el; }} aria-invalid={!!error || undefined} {...rest}
        onInput={(e) => { fit(e.currentTarget); onInput?.(e); }} style={TEXT}
        className={`${BASE} ${error ? ERROR : STATE} min-h-[calc(var(--sd-text-body-line)_*_3_+_36px)] ${autoGrow ? 'resize-none' : 'resize-y'} px-[16px] py-[12px] ${className}`} />
    </Wrap>
    );
  },
);
TextArea.displayName = 'TextArea';
