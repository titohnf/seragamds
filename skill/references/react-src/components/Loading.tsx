import type { CSSProperties } from 'react';

export type SpinnerSize = 'sm' | 'md' | 'lg';
const SPIN: Record<SpinnerSize, { box: number; stroke: number }> = { sm: { box: 16, stroke: 2 }, md: { box: 24, stroke: 3 }, lg: { box: 40, stroke: 4 } };

/**
 * Spinner Seragam (Loading): lingkaran yang berputar untuk proses tanpa perkiraan waktu.
 * Ukuran 16/24/40. Warna bawaan `blue-70`; `inverse` (putih) untuk latar gelap atau di dalam tombol berwarna.
 * Dibacakan pembaca layar lewat `role="status"` dan `label` (bawaan "Memuat…"). Berputar lebih lambat bila pengguna memilih gerak berkurang.
 */
export function Spinner({ size = 'md', inverse = false, label = 'Memuat…', className = '' }: { size?: SpinnerSize; inverse?: boolean; label?: string; className?: string }) {
  const { box, stroke } = SPIN[size];
  return (
    <span role="status" aria-label={label} className={`inline-flex ${className}`}>
      <svg width={box} height={box} viewBox="0 0 24 24" fill="none" aria-hidden="true" className="animate-spin motion-reduce:[animation-duration:2.5s]">
        <circle cx="12" cy="12" r="9" strokeWidth={stroke} className={inverse ? 'stroke-sd-white opacity-30' : 'stroke-sd-gray-20'} />
        <path d="M21 12a9 9 0 0 0-9-9" strokeWidth={stroke} strokeLinecap="round" className={inverse ? 'stroke-sd-white' : 'stroke-sd-blue-70'} />
      </svg>
    </span>
  );
}

const SHIMMER_CSS = '@keyframes sd-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}@media (prefers-reduced-motion:reduce){.sd-skeleton{animation:none!important}}';

/**
 * Skeleton Seragam (Loading "Shimmer"): kerangka abu dengan kilau bergerak, bentuknya meniru konten yang sedang dimuat.
 * `shape`: `text` (satu baris, tinggi 16), `block` (kotak radius 8, atur `height`), `circle` (avatar). Atur ukuran lewat `width`/`height`.
 * Dekoratif (`aria-hidden`); beri `aria-busy` pada wadah dan umumkan "Memuat" sekali dengan `Spinner` atau teks tersembunyi.
 */
export function Skeleton({ shape = 'text', width, height, className = '' }: { shape?: 'text' | 'block' | 'circle'; width?: number | string; height?: number | string; className?: string }) {
  const base: CSSProperties = {
    width: width ?? (shape === 'circle' ? 40 : '100%'),
    height: height ?? (shape === 'text' ? 16 : shape === 'circle' ? 40 : 80),
    backgroundImage: 'linear-gradient(90deg, var(--sd-gray-5) 25%, var(--sd-gray-0) 50%, var(--sd-gray-5) 75%)',
    backgroundSize: '200% 100%',
    animation: 'sd-shimmer 1.6s linear infinite',
  };
  return (
    <>
      <style>{SHIMMER_CSS}</style>
      <span aria-hidden="true" className={`sd-skeleton block ${shape === 'circle' ? 'rounded-full' : shape === 'text' ? 'rounded-[4px]' : 'rounded-[8px]'} ${className}`} style={base} />
    </>
  );
}
