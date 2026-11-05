import type { ReactNode } from 'react';

export type DescriptionItem = {
  label: ReactNode;
  value: ReactNode;
  /** Ikon kecil setelah label (mis. info). */
  hint?: ReactNode;
  /** Membentang selebar baris (nilai panjang seperti alamat). */
  full?: boolean;
  /** `strong` (default, 15/22 semibold) atau `normal` (15/22 regular). */
  emphasis?: 'strong' | 'normal';
  /** Nilai berwarna gray-60 (kosong, tidak berubah, atau pelengkap). */
  muted?: boolean;
};

// Kelas ditulis utuh agar terbaca Tailwind. Kolom ditentukan lebar WADAH (container query), bukan lebar layar,
// supaya daftar di dalam kartu sempit tetap rapi.
const COLS = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 @sm:grid-cols-2',
  3: 'grid-cols-1 @sm:grid-cols-2 @2xl:grid-cols-3',
} as const;
const SPAN = { 1: '', 2: '@sm:col-span-2', 3: '@sm:col-span-2 @2xl:col-span-3' } as const;

/**
 * Daftar Deskripsi Seragam (ekstensi di luar Figma): pasangan label di atas nilai, dalam 1–3 kolom.
 * Label 13/20 regular gray-60; nilai 15/22 semibold gray-90; jarak label–nilai 4, antar item 16.
 * Memakai `<dl>`/`<dt>`/`<dd>` agar pembaca layar mengumumkan pasangannya.
 */
export function DescriptionList({ items, columns = 2, className = '' }: { items: DescriptionItem[]; columns?: 1 | 2 | 3; className?: string }) {
  return (
    <div className="@container">
      <dl className={`grid gap-x-[16px] gap-y-[16px] ${COLS[columns]} ${className}`}>
        {items.map((it, i) => (
          <div key={i} className={`flex min-w-0 flex-col gap-[4px] ${it.full ? SPAN[columns] : ''}`}>
            <dt className="flex items-center gap-[4px] text-sd-gray-60" style={{ fontSize: 13, lineHeight: '20px' }}>
              {it.label}
              {it.hint && <span aria-hidden className="grid place-items-center [&>svg]:size-[13px]">{it.hint}</span>}
            </dt>
            <dd
              className={`break-words ${it.muted ? 'text-sd-gray-60' : 'text-sd-gray-90'}`}
              style={{ fontSize: 15, lineHeight: '22px', fontWeight: it.emphasis === 'normal' ? 400 : 600 }}
            >
              {it.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
