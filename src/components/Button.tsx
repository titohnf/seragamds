import type { ButtonHTMLAttributes, ReactNode } from 'react';

/**
 * Button Seragam (Figma: Button, 429 varian). Tipe mengikuti nama di Figma:
 * - ultimate: aksi utama, biru (blue-70; hover blue-80; tekan blue-90)
 * - primary: hitam (gray-90; hover gray-100; tekan hitam)
 * - secondary: outline (border gray-50, teks gray-90; hover gray-0; tekan gray-10)
 * - quiet: teks biru tanpa border (hover latar gray-0)
 * - destructive: merah (red-60; hover red-70; tekan red-80)
 * - destructive-secondary: EKSTENSI DS (tidak ada di Figma): outline merah (border dan teks red-60; hover latar red-5; tekan red-10) untuk aksi destruktif bernada rendah seperti Tolak atau Hapus.
 * Ukuran: lg 46 (padding 12x20), md 38 (8x16), sm 28 (4x8, teks 13/20). Teks 15/22 semibold, radius 4, gap 4.
 * Nonaktif: latar gray-20, teks gray-50. Fokus: ring 2px putih + 4px blue-50. Loading: spinner 18px.
 */
export type ButtonVariant = 'ultimate' | 'primary' | 'secondary' | 'quiet' | 'destructive' | 'destructive-secondary';
export type ButtonSize = 'lg' | 'md' | 'sm';

const SIZE: Record<ButtonSize, string> = {
  lg: 'h-[46px] px-[20px] py-[12px] text-[15px] leading-[22px]',
  md: 'h-[38px] px-[16px] py-[8px] text-[15px] leading-[22px]',
  sm: 'h-[28px] px-[8px] py-[4px] text-[13px] leading-[20px]',
};
// Kelas ditulis literal agar terdeteksi Tailwind.
const VARIANT: Record<ButtonVariant, string> = {
  ultimate: 'bg-sd-blue-70 text-white hover:bg-sd-blue-80 active:bg-sd-blue-90',
  primary: 'bg-sd-gray-90 text-white hover:bg-sd-gray-100 active:bg-black',
  secondary: 'bg-transparent border border-sd-gray-50 text-sd-gray-90 hover:bg-sd-gray-0 active:bg-sd-gray-10 focus-visible:border-sd-gray-70',
  quiet: 'bg-transparent text-sd-blue-70 hover:bg-sd-gray-0 hover:text-sd-blue-80 active:text-sd-blue-90',
  destructive: 'bg-sd-red-60 text-white hover:bg-sd-red-70 active:bg-sd-red-80',
  'destructive-secondary': 'bg-transparent border border-sd-red-60 text-sd-red-60 hover:bg-sd-red-5 active:bg-sd-red-10',
};
const DISABLED = 'disabled:cursor-not-allowed disabled:border-transparent disabled:bg-sd-gray-20 disabled:text-sd-gray-50 disabled:hover:bg-sd-gray-20';
const BASE = 'inline-flex items-center justify-center gap-[4px] rounded-[4px] whitespace-nowrap font-semibold outline-none transition-colors focus-visible:shadow-[0_0_0_2px_#fff,0_0_0_4px_var(--sd-interactive-focused)]';

/** Kelas tombol untuk elemen non-button (mis. <a>). */
export const buttonClass = (variant: ButtonVariant = 'ultimate', size: ButtonSize = 'lg', fullWidth = false) =>
  `${BASE} ${SIZE[size]} ${VARIANT[variant]} ${DISABLED} ${fullWidth ? 'w-full' : ''}`;

const Spinner = () => (
  <svg aria-hidden viewBox="0 0 24 24" className="size-[18px] animate-spin" fill="none"><circle cx="12" cy="12" r="9" stroke="var(--sd-gray-10)" strokeWidth="3" /><path d="M21 12a9 9 0 0 0-9-9" stroke="var(--sd-blue-40)" strokeWidth="3" strokeLinecap="round" /></svg>
);

export function Button({ variant = 'ultimate', size = 'lg', fullWidth = false, loading = false, leadingIcon, trailingIcon, children, className = '', disabled, ...rest }: {
  variant?: ButtonVariant; size?: ButtonSize; fullWidth?: boolean; loading?: boolean; leadingIcon?: ReactNode; trailingIcon?: ReactNode; children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...rest} disabled={disabled || loading} aria-busy={loading || undefined} className={`${buttonClass(variant, size, fullWidth)} ${className}`}>
      {loading ? <Spinner /> : leadingIcon}
      {children}
      {!loading && trailingIcon}
    </button>
  );
}
