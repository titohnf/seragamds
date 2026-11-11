import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { color, typeAction, typo } from '../tokens';

export type TabItem = string | { label: string; count?: number; disabled?: boolean };

/**
 * Tabs Seragam: tinggi 56px (padding atas 12px), label Action semibold (Mobile 15/22, Desktop 16/24; tinggi 56 pas untuk Desktop).
 * Aktif = Action/Default dengan garis bawah 4px (lebar label + 12px); tidak aktif = Text/Subdued. Hitungan (`count`) pada tab aktif memakai latar Action/Default dan teks putih agar terlihat (ekstensi).
 * `fill` membagi lebar sama rata (2 sampai 3 tab) = Fixed Tabs; tanpa `fill` tab berurutan dari kiri dan bisa di-scroll = Scrollable Tabs (pakai bila tab melebihi lebar layar; JANGAN memotong label).
 * Scrollable: bila isinya meluber, tepi yang masih bisa digeser memudar dan muncul tombol panah gulir (kiri/kanan; pengguna keyboard memakai ←/→, jadi tombol ini tidak masuk urutan Tab); `disabled` per tab = Disabled (tidak bisa dipilih, dilewati keyboard).
 * Keyboard (pola WAI-ARIA Tabs): hanya tab aktif yang masuk urutan Tab; ←/→ berpindah dan mengaktifkan tab (melingkar), Home/End ke tab pertama/terakhir. Hanya satu tab aktif; tab tidak berpindah halaman.
 */
export function Tabs({ items, active, onChange, fill = false, className = '' }: { items: TabItem[]; active: number; onChange: (i: number) => void; fill?: boolean; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ left: false, right: false });
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const measure = () => setEdge({ left: el.scrollLeft > 1, right: el.scrollLeft + el.clientWidth < el.scrollWidth - 1 });
    measure(); el.addEventListener('scroll', measure, { passive: true });
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null; ro?.observe(el);
    return () => { el.removeEventListener('scroll', measure); ro?.disconnect(); };
  }, [items.length, fill]);
  const off = (i: number) => { const it = items[i]; return typeof it !== 'string' && !!it.disabled; };
  const step = (from: number, dir: 1 | -1) => { const n = items.length; for (let k = 1; k <= n; k++) { const i = (from + dir * k + n * k) % n; if (!off(i)) return i; } return from; };
  const mask = edge.left || edge.right ? `linear-gradient(to right, ${edge.left ? 'transparent, #000 32px' : '#000, #000'}, ${edge.right ? '#000 calc(100% - 32px), transparent' : '#000, #000'})` : undefined;
  return (
    <div className={`relative border-b ${className}`} style={{ borderColor: color.border }}>
    {(['left', 'right'] as const).map((d) => edge[d] && (
      <button key={d} type="button" tabIndex={-1} aria-label={d === 'left' ? 'Gulir tab ke kiri' : 'Gulir tab ke kanan'}
        onClick={() => ref.current?.scrollBy({ left: (d === 'left' ? -1 : 1) * Math.max(120, (ref.current?.clientWidth ?? 240) * 0.6), behavior: 'smooth' })}
        className={`absolute top-1/2 z-10 grid size-[28px] -translate-y-1/2 place-items-center rounded-full bg-white text-sd-gray-90 shadow-sd-01 hover:bg-sd-gray-5 ${d === 'left' ? 'left-[4px]' : 'right-[4px]'}`}>
        {d === 'left' ? <ChevronLeft aria-hidden className="size-[18px]" /> : <ChevronRight aria-hidden className="size-[18px]" />}
      </button>
    ))}
    <div ref={ref} role="tablist" className={`flex overflow-x-auto ${fill ? '' : 'gap-[24px] px-[16px]'}`} style={{ maskImage: mask, WebkitMaskImage: mask }}
      onKeyDown={(e) => {
        const n = items.length; const first = off(0) ? step(0, 1) : 0, last = off(n - 1) ? step(n - 1, -1) : n - 1;
        const to = e.key === 'ArrowRight' ? step(active, 1) : e.key === 'ArrowLeft' ? step(active, -1) : e.key === 'Home' ? first : e.key === 'End' ? last : -1;
        if (to < 0) return; e.preventDefault(); onChange(to);
        const list = e.currentTarget; // currentTarget dikosongkan React setelah handler selesai
        requestAnimationFrame(() => (list.querySelectorAll('[role=tab]')[to] as HTMLElement | undefined)?.focus());
      }}>
      {items.map((it, i) => {
        const label = typeof it === 'string' ? it : it.label;
        const count = typeof it === 'string' ? undefined : it.count;
        const disabled = typeof it !== 'string' && !!it.disabled;
        const on = i === active;
        return (
          <button
            key={label}
            role="tab"
            aria-selected={on}
            aria-disabled={disabled || undefined}
            disabled={disabled}
            tabIndex={on ? 0 : -1}
            onClick={() => onChange(i)}
            className={`${fill ? 'flex-1' : ''} whitespace-nowrap grid place-items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] disabled:cursor-not-allowed`}
            style={{ height: '56px', outlineColor: color.actionDefault }}
          >
            <span className="relative inline-flex items-center gap-[6px] pt-[14px] pb-[18px]" style={{ ...typeAction, color: on ? color.actionDefault : disabled ? color.textDisabled : color.textSubdued }}>
              {label}
              {count !== undefined && <span className="rounded-full px-[8px]" style={{ background: on ? color.actionDefault : '#f0f0f0', color: on ? color.textInverse : color.textDefault, ...typo.helper, lineHeight: '18px' }}>{count}</span>}
              {on && <span className="absolute bottom-0 -left-[6px] -right-[6px]" style={{ height: '4px', background: color.actionDefault }} />}
            </span>
          </button>
        );
      })}
    </div>
    </div>
  );
}
export type { ReactNode };
