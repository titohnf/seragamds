import type { ReactNode } from 'react';
import { typo } from '../tokens';

/**
 * Page Header Seragam (ekstensi di luar Figma): kepala halaman penuh lebar dengan breadcrumb, judul, dan penjelasan singkat.
 * `tone="blue"` (default) memakai latar Surface/Dark Blue seperti banner Rapor Pendidikan; `tone="dark"` memakai gray-90 (terbaca hampir hitam);
 * `tone="light"` putih dengan garis bawah modal-footer-border. Dua nada gelap memakai teks inverse.
 * Judul 24/28 semibold (display-small mobile), penjelasan 15/22 maksimal 68 karakter per baris.
 * `compact`: pita tipis (padding 12) berisi breadcrumb di kiri dan `aside` (mis. info sekolah) di kanan; judul opsional. Judul, penjelasan, dan isi lain pindah ke badan halaman.
 * `children` (mis. ProcessSteps) tampil di bawah penjelasan. Lebar isi diatur `contentClassName`.
 */
export function PageHeader({
  breadcrumb, title, description, children, aside, tone = 'blue', compact = false, contentClassName = 'mx-auto w-full max-w-[1094px] px-[16px]',
}: {
  breadcrumb?: ReactNode; title?: ReactNode; aside?: ReactNode; description?: ReactNode; children?: ReactNode; tone?: 'blue' | 'dark' | 'light'; compact?: boolean; contentClassName?: string;
}) {
  const dark = tone !== 'light';
  const latar = tone === 'blue' ? 'bg-sd-surface-dark-blue text-sd-text-inverse' : tone === 'dark' ? 'bg-sd-gray-90 text-sd-text-inverse' : 'border-b border-sd-modal-footer-border bg-white text-sd-gray-90';
  if (compact) {
    return (
      <section className={latar}>
        <div className={`${contentClassName} flex flex-wrap items-center justify-between gap-x-[16px] gap-y-[4px] py-[12px]`}>
          <div>{breadcrumb}</div>
          {aside && <div className={dark ? 'text-sd-text-inverse-subdued' : 'text-sd-gray-60'} style={{ ...typo.bodySmall }}>{aside}</div>}
        </div>
      </section>
    );
  }
  return (
    <section className={latar}>
      <div className={`${contentClassName} flex flex-col gap-[16px] py-[24px]`}>
        {breadcrumb}
        <div className="flex flex-col gap-[4px]">
          <h1 style={{ ...typo.displaySmall }}>{title}</h1>
          {description && <p className={`max-w-[68ch] ${dark ? 'text-sd-text-inverse-subdued' : 'text-sd-gray-60'}`} style={{ ...typo.body }}>{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
