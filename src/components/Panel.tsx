import { useId } from 'react';
import type { ElementType, HTMLAttributes, ReactNode } from 'react';

export type PanelVariant = 'elevated' | 'outlined';

/**
 * Panel Seragam (ekstensi di luar Figma): kartu berbagian dengan header berjudul dan garis pemisah.
 * Radius 8, latar putih. `elevated` = bayangan Elevation 01; `outlined` = border 1px modal-footer-border.
 * Header: padding 12x16, judul 15/22 semibold gray-60, ikon 16 gray-60, garis bawah modal-footer-border;
 * `subtleHeader` memberi latar gray-0. Badan: padding 16 (`padded={false}` untuk tabel/daftar tepi ke tepi).
 */
export function Panel({
  title, subtitle, icon, action, variant = 'elevated', subtleHeader = false, padded = true, as: Heading = 'h3', className = '', children, ...rest
}: {
  title: ReactNode; subtitle?: ReactNode; icon?: ReactNode; action?: ReactNode;
  variant?: PanelVariant; subtleHeader?: boolean; padded?: boolean; as?: ElementType; className?: string; children: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, 'title' | 'className' | 'children'>) {
  const id = useId();
  return (
    <section
      aria-labelledby={id}
      {...rest}
      className={`overflow-hidden rounded-[8px] bg-white ${variant === 'elevated' ? 'shadow-sd-01' : 'border border-sd-modal-footer-border'} ${className}`}
    >
      <header className={`flex items-center justify-between gap-[12px] border-b border-sd-modal-footer-border px-[16px] py-[12px] ${subtleHeader ? 'bg-sd-gray-0' : ''}`}>
        <div className="flex min-w-0 items-center gap-[8px] text-sd-gray-60">
          {icon && <span aria-hidden className="grid shrink-0 place-items-center [&>svg]:size-[16px]">{icon}</span>}
          <div className="min-w-0">
            <Heading id={id} className="text-sd-gray-60" style={{ fontSize: 15, lineHeight: '22px', fontWeight: 600 }}>{title}</Heading>
            {subtitle && <p className="text-sd-gray-60" style={{ fontSize: 13, lineHeight: '20px' }}>{subtitle}</p>}
          </div>
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </header>
      <div className={padded ? 'p-[16px]' : ''}>{children}</div>
    </section>
  );
}
