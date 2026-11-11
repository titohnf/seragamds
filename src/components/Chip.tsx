import type { ReactNode } from 'react';
import { X } from 'lucide-react';
import { color, typo } from '../tokens';

export type ChipItem = string | { label: string; icon?: ReactNode; disabled?: boolean };
export type ChipSize = 'regular' | 'small';

const SIZE: Record<ChipSize, { pad: string; text: typeof typo.action }> = {
  regular: { pad: 'px-[16px] py-[8px]', text: typo.action },
  small: { pad: 'px-[12px] py-[4px]', text: typo.bodySmallBold },
};

/**
 * Chip Seragam: pill. Ukuran `regular` (padding 8x16, Action) dan `small` (4x12, 13/20 semibold; tinggi 28). Jarak antar chip 8 (minimum panduan).
 * Aktif = latar Surface/Selected + border dan teks Action/Default; nonaktif = putih + border/default.
 * Ikon: `icon` di depan (ikon sistem untuk mengenali kategori); `onRemove` menambah ikon × di belakang untuk menutup/menghapus chip.
 * Perilaku: tiap chip tombol toggle (`aria-pressed`), bisa difokuskan keyboard dengan cincin biru; `Tab` berpindah antar chip, `Enter`/`Space` memilih.
 * Chip untuk pilihan kontekstual dan filter, BUKAN pengganti Button (aksi maju/mundur alur pakai Button). Label 1–2 kata, maksimal 4; tanpa kata kerja ajakan.
 * Satu pilihan (`active` angka) atau banyak (`active` berupa daftar indeks).
 */
export function ChipGroup({ items, active, onChange, onRemove, size = 'regular', 'aria-label': ariaLabel, className = '' }: {
  items: ChipItem[]; active: number | number[]; onChange: (i: number) => void; onRemove?: (i: number) => void; size?: ChipSize; 'aria-label'?: string; className?: string;
}) {
  const on = (i: number) => (Array.isArray(active) ? active.includes(i) : active === i);
  const s = SIZE[size];
  return (
    <div role="group" aria-label={ariaLabel} className={`flex flex-wrap gap-[8px] ${className}`}>
      {items.map((it, i) => {
        const label = typeof it === 'string' ? it : it.label;
        const icon = typeof it === 'string' ? undefined : it.icon;
        const disabled = typeof it === 'string' ? false : !!it.disabled;
        const sel = on(i);
        return (
          <span key={label} className={`inline-flex items-center rounded-full border ${disabled ? 'opacity-50' : 'hover:bg-[#EEF5FF]'}`}
            style={{ borderColor: sel ? color.actionDefault : color.border, background: sel ? color.surfaceSelected : color.surfaceDefault, color: sel ? color.actionDefault : color.textDefault }}>
            <button type="button" aria-pressed={sel} disabled={disabled} onClick={() => onChange(i)}
              className={`inline-flex items-center gap-[4px] rounded-full whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${s.pad} ${onRemove ? 'pr-[8px]' : ''}`}
              style={{ ...s.text, outlineColor: color.focus }}>
              {icon}{label}
            </button>
            {onRemove && (
              <button type="button" aria-label={`Hapus ${label}`} disabled={disabled} onClick={() => onRemove(i)}
                className="mr-[8px] grid size-[20px] place-items-center rounded-full hover:bg-black/5 focus-visible:outline focus-visible:outline-2" style={{ outlineColor: color.focus }}>
                <X aria-hidden className="size-[14px]" />
              </button>
            )}
          </span>
        );
      })}
    </div>
  );
}
