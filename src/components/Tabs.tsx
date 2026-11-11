import type { ReactNode } from 'react';
import { color, typeAction, typo } from '../tokens';

export type TabItem = string | { label: string; count?: number };

/**
 * Tabs Seragam: tinggi 56px (padding atas 12px), label Action semibold (Mobile 15/22, Desktop 16/24; tinggi 56 pas untuk Desktop).
 * Aktif = Action/Default dengan garis bawah 4px (lebar label + 12px); tidak aktif = Text/Subdued. Hitungan (`count`) pada tab aktif memakai latar Action/Default dan teks putih agar terlihat (ekstensi).
 * `fill` membagi lebar sama rata (2 sampai 3 tab) = Fixed Tabs; tanpa `fill` tab berurutan dari kiri dan bisa di-scroll = Scrollable Tabs (pakai bila tab melebihi lebar layar; JANGAN memotong label).
 * Keyboard (pola WAI-ARIA Tabs): hanya tab aktif yang masuk urutan Tab; ←/→ berpindah dan mengaktifkan tab (melingkar), Home/End ke tab pertama/terakhir. Hanya satu tab aktif; tab tidak berpindah halaman.
 */
export function Tabs({ items, active, onChange, fill = false, className = '' }: { items: TabItem[]; active: number; onChange: (i: number) => void; fill?: boolean; className?: string }) {
  return (
    <div role="tablist" className={`flex border-b overflow-x-auto ${fill ? '' : 'gap-[24px] px-[16px]'} ${className}`} style={{ borderColor: color.border }}
      onKeyDown={(e) => {
        const n = items.length; const to = e.key === 'ArrowRight' ? (active + 1) % n : e.key === 'ArrowLeft' ? (active - 1 + n) % n : e.key === 'Home' ? 0 : e.key === 'End' ? n - 1 : -1;
        if (to < 0) return; e.preventDefault(); onChange(to);
        const list = e.currentTarget; // currentTarget dikosongkan React setelah handler selesai
        requestAnimationFrame(() => (list.querySelectorAll('[role=tab]')[to] as HTMLElement | undefined)?.focus());
      }}>
      {items.map((it, i) => {
        const label = typeof it === 'string' ? it : it.label;
        const count = typeof it === 'string' ? undefined : it.count;
        const on = i === active;
        return (
          <button
            key={label}
            role="tab"
            aria-selected={on}
            tabIndex={on ? 0 : -1}
            onClick={() => onChange(i)}
            className={`${fill ? 'flex-1' : ''} whitespace-nowrap grid place-items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]`}
            style={{ height: '56px', outlineColor: color.actionDefault }}
          >
            <span className="relative inline-flex items-center gap-[6px] pt-[14px] pb-[18px]" style={{ ...typeAction, color: on ? color.actionDefault : color.textSubdued }}>
              {label}
              {count !== undefined && <span className="rounded-full px-[8px]" style={{ background: on ? color.actionDefault : '#f0f0f0', color: on ? color.textInverse : color.textDefault, ...typo.helper, lineHeight: '18px' }}>{count}</span>}
              {on && <span className="absolute bottom-0 -left-[6px] -right-[6px]" style={{ height: '4px', background: color.actionDefault }} />}
            </span>
          </button>
        );
      })}
    </div>
  );
}
export type { ReactNode };
