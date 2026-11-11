import { Fragment, type ReactNode } from 'react';
import { typo } from '../tokens';

export type Crumb = { label: ReactNode; href?: string; onClick?: () => void };

/** Breadcrumb Seragam: tautan 15/22 gray-60 (hover gray-90 bergaris bawah), halaman aktif gray-90, pemisah chevron, gap 4. `inverse` (ekstensi) untuk latar gelap: tautan text-inverse-subdued, aktif putih, pemisah gray-30. */
export function Breadcrumb({ items, inverse = false }: { items: Crumb[]; inverse?: boolean }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-[4px]" style={{ ...typo.body }}>
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <Fragment key={i}>
              <li>
                {last ? <span aria-current="page" className={inverse ? 'text-white' : 'text-sd-gray-90'}>{c.label}</span>
                  : <a href={c.href} onClick={c.onClick} className={inverse ? 'cursor-pointer text-sd-text-inverse-subdued hover:text-white hover:underline' : 'cursor-pointer text-sd-gray-60 hover:text-sd-gray-90 hover:underline'}>{c.label}</a>}
              </li>
              {!last && <li aria-hidden className={inverse ? 'text-sd-gray-30' : 'text-sd-gray-60'}><svg viewBox="0 0 24 24" className="size-[16px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg></li>}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
