import type { ReactNode } from 'react';
import { CircleAlert, CircleCheck, Info, TriangleAlert, X } from 'lucide-react';
import { color, typo } from '../tokens';

export type BannerTone = 'info' | 'warning' | 'success' | 'critical' | 'neutral' | 'entry';

/** Warna banner dari Figma (Banner Default Desktop): token surface dan border per tipe (default). */
const TONE: Record<BannerTone, { bg: string; border: string; icon: ReactNode; iconColor: string }> = {
  success: { bg: 'var(--sd-green-5)', border: 'var(--sd-success-border)', iconColor: '#2D8A4E', icon: <CircleCheck className="size-[20px] shrink-0" /> },
  warning: { bg: 'var(--sd-warning-surface)', border: 'var(--sd-warning-border)', iconColor: '#B57F21', icon: <TriangleAlert className="size-[20px] shrink-0" /> },
  critical: { bg: 'var(--sd-red-5)', border: 'var(--sd-red-60)', iconColor: 'var(--sd-red-60)', icon: <CircleAlert className="size-[20px] shrink-0" /> },
  info: { bg: 'var(--sd-cyan-5)', border: 'var(--sd-cyan-10)', iconColor: 'var(--sd-blue-70)', icon: <Info className="size-[20px] shrink-0" /> },
  neutral: { bg: 'var(--sd-gray-5)', border: 'var(--sd-gray-50)', iconColor: '#45474A', icon: <Info className="size-[20px] shrink-0" /> },
  // Entry Point (Figma): putih, border gray-50, tanpa ikon; mengajak pengguna masuk ke fitur, wajib ber-CTA.
  entry: { bg: 'var(--sd-white)', border: 'var(--sd-gray-50)', iconColor: 'transparent', icon: null },
};

/**
 * Banner Seragam (Figma, Desktop): radius 4px, border 1px, padding 16px, jarak 12px, ikon 20px,
 * teks Body (judul semibold). `info` = Informational, `warning` = Warning, dan seterusnya.
 * `entry` (Entry Point) WAJIB punya `action` (tombol) atau `link`; tidak menandakan status atau galat.
 * `action` (Button sm secondary) dan `link` tampil di footer banner. `onClose` = Dismissable.
 * `fixed` (Banner Fixed): selebar halaman, tanpa radius dan border sudut, menempel (sticky) di atas halaman; untuk informasi yang perlu segera terlihat.
 * Disarankan maksimal 3 baris teks. `critical` memakai role="alert" (diumumkan segera); lainnya role="status".
 */
export function Banner({ tone = 'info', title, children, onClose, action, link, fixed = false, className = '' }: {
  tone?: BannerTone; title?: string; children: ReactNode; onClose?: () => void; action?: ReactNode; link?: ReactNode; fixed?: boolean; className?: string;
}) {
  const t = TONE[tone];
  if (tone === 'entry' && !action && !link && typeof console !== 'undefined') console.warn('Banner tone="entry" wajib punya action atau link (CTA).');
  const body = (
    <div className="flex items-start gap-[12px]">
      {t.icon && <span style={{ color: t.iconColor }} className="mt-[2px]">{t.icon}</span>}
      <div className="min-w-0 flex-1 flex flex-col gap-[12px]" style={{ ...typo.body }}>
        <div>
          {title && <p style={{ fontWeight: 600 }}>{title}</p>}
          {children}
        </div>
        {(action || link) && <div className="flex flex-wrap items-center gap-[12px]">{action}{link}</div>}
      </div>
      {onClose && <button onClick={onClose} aria-label="Tutup" className="shrink-0 p-[2px]"><X className="size-[22px]" /></button>}
    </div>
  );
  return (
    <div role={tone === 'critical' ? 'alert' : 'status'}
      className={fixed ? `sticky top-0 z-40 w-full border-b px-[16px] py-[20px] md:px-[80px] ${className}` : `rounded-[4px] border p-[16px] ${className}`}
      style={{ background: t.bg, borderColor: t.border, color: color.textDefault }}>
      {fixed ? <div className="mx-auto max-w-[1280px] lg:px-[32px]">{body}</div> : body}
    </div>
  );
}
