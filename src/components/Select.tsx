import { forwardRef, type ReactNode, type SelectHTMLAttributes } from 'react';
import { typo } from '../tokens';

/** Select Seragam (native): tinggi 46, padding 12x16, radius 4, border gray-50; fokus blue-50 + ring 2px; error red-60 + latar red-5. Label 15/22, helper 12/16. */
export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement> & { label?: string; helper?: ReactNode; error?: ReactNode; placeholder?: string }>(
  ({ label, helper, error, placeholder, children, className = '', ...rest }, ref) => {
    const Root = label ? 'label' : 'div'; // label membungkus agar terhubung ke <select>
    return (
    <Root className="flex flex-col gap-[4px]">
      {label && <span className="text-sd-gray-90" style={{ ...typo.body }}>{label}</span>}
      <div className="relative">
        <select ref={ref} aria-invalid={!!error || undefined} {...rest} style={{ ...typo.body }}
          className={`h-[calc(var(--sd-text-body-line)_+_24px)] w-full appearance-none rounded-[4px] border py-[12px] pl-[16px] pr-[40px] text-sd-gray-90 outline-none transition-shadow
            ${error ? 'border-sd-critical-border bg-sd-surface-critical-subdued focus:shadow-[0_0_0_2px_var(--sd-critical-border)]' : 'border-sd-gray-50 bg-white focus:border-sd-blue-50 focus:shadow-[0_0_0_2px_var(--sd-interactive-focused)]'}
            disabled:border-sd-modal-footer-border disabled:bg-sd-badge-neutral disabled:text-sd-gray-50 ${className}`}>
          {placeholder && <option value="">{placeholder}</option>}
          {children}
        </select>
        <svg aria-hidden viewBox="0 0 24 24" className="pointer-events-none absolute right-[12px] top-1/2 size-[24px] -translate-y-1/2 text-sd-gray-70" fill="currentColor"><path d="M7 10l5 5 5-5z" /></svg>
      </div>
      {(error || helper) && <span className={error ? 'text-sd-red-60' : 'text-sd-gray-60'} style={{ ...typo.helper }}>{error || helper}</span>}
    </Root>
    );
  },
);
Select.displayName = 'Select';
