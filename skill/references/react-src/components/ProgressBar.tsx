import type { ReactNode } from 'react';
import { typo } from '../tokens';

/** Progress bar Seragam: tinggi 6, radius penuh, track #D9DBDD, isi blue-70. Label opsional di kiri/kanan (15/22). `inverse` (ekstensi) untuk latar gelap: track putih 25%, isi blue-30, label terang. `tone="green"` (ekstensi): isi hijau (green-60, green-30 bila inverse). `tone="auto"`: biru selama berjalan, hijau saat 100%. */
export function ProgressBar({ value, label, labelPosition = 'right', inverse = false, tone = 'blue' }: { value: number; label?: ReactNode; labelPosition?: 'left' | 'right'; inverse?: boolean; tone?: 'blue' | 'green' | 'auto' }) {
  const v = Math.min(100, Math.max(0, value));
  const bar = (
    <div role="progressbar" aria-valuenow={v} aria-valuemin={0} aria-valuemax={100} className={`h-[6px] w-full overflow-hidden rounded-full ${inverse ? 'bg-white/25' : 'bg-sd-modal-footer-border'}`}>
      <div className={`h-full rounded-full transition-[width] ${tone === 'green' || (tone === 'auto' && v >= 100) ? (inverse ? 'bg-sd-green-30' : 'bg-sd-green-60') : inverse ? 'bg-sd-blue-30' : 'bg-sd-blue-70'}`} style={{ width: `${v}%` }} />
    </div>
  );
  if (!label) return bar;
  const text = <span className={`shrink-0 ${inverse ? 'text-sd-text-inverse' : 'text-sd-gray-90'}`} style={{ ...typo.body }}>{label}</span>;
  return <div className="flex items-center gap-[12px]">{labelPosition === 'left' && text}{bar}{labelPosition === 'right' && text}</div>;
}
