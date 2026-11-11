import type { ReactNode } from 'react';
import { typo } from '../tokens';

export type FooterLink = { label: string; href: string; external?: boolean };
export type FooterSection = { title?: string; links: FooterLink[] };

/**
 * Footer Seragam (Figma Footer; panduan seragam.belajar.id/footer). Dua lapis:
 * lapis 1 `gray-90`: logo di kiri atas, menu berkolom (mobile 1 kolom, tablet 2, desktop 4), media sosial, unduh aplikasi (opsional);
 * lapis 2 `gray-100`: hak cipta (12/16) dan pemilih bahasa di kanan.
 * Margin mobile 16/24, tablet 24, desktop 80/40 (lebar isi maks. 1280). Teks putih; logo memakai versi inverse (kecuali Tut Wuri Handayani).
 * Satu footer per halaman. Semua tautan bisa difokuskan keyboard.
 */
export function Footer({ logo, sections = [], social, download, copyright, language, 'aria-label': ariaLabel = 'Footer', className = '' }: {
  logo?: ReactNode;
  sections?: FooterSection[];
  /** Tautan media sosial, mis. deretan ikon bertautan (wajib ber-`aria-label`). */
  social?: ReactNode;
  /** Tombol unduh aplikasi (opsional). */
  download?: ReactNode;
  copyright: ReactNode;
  /** Pemilih bahasa (mis. `Select` atau tombol "ID"). */
  language?: ReactNode;
  'aria-label'?: string;
  className?: string;
}) {
  const hasNav = sections.length > 0;
  return (
    <footer aria-label={ariaLabel} className={`text-sd-white ${className}`}>
      <div className="bg-sd-gray-90 px-[16px] py-[24px] md:px-[24px] lg:px-[80px] lg:py-[40px]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-[40px] lg:px-[32px]">
          {logo && <div className="flex">{logo}</div>}
          {hasNav && (
            <nav aria-label={`${ariaLabel}: menu`} className="grid grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid-cols-4">
              {sections.map((s, i) => (
                <div key={s.title ?? i} className="flex flex-col gap-[12px]">
                  {s.title && <h2 className="text-sd-white" style={{ ...typo.action }}>{s.title}</h2>}
                  <ul className="flex flex-col gap-[8px]">
                    {s.links.map((l) => (
                      <li key={l.href + l.label}>
                        <a href={l.href} {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="inline-block text-sd-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sd-white" style={{ ...typo.body }}>
                          {l.label}{l.external && <span className="sr-only"> (membuka tab baru)</span>}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          )}
          {(social || download) && (
            <div className="flex flex-col gap-[24px] md:flex-row md:items-center md:justify-between">
              {social && <div className="flex flex-wrap items-center gap-[16px]">{social}</div>}
              {download && <div className="flex flex-wrap items-center gap-[12px]">{download}</div>}
            </div>
          )}
        </div>
      </div>
      <div className="bg-sd-gray-100 px-[16px] py-[16px] md:px-[24px] lg:px-[80px]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-[16px] md:flex-row md:items-center md:justify-between lg:px-[32px]">
          <p className="text-sd-white" style={{ ...typo.helper }}>{copyright}</p>
          {language && <div className="text-sd-white" style={{ ...typo.bodySmall }}>{language}</div>}
        </div>
      </div>
    </footer>
  );
}
