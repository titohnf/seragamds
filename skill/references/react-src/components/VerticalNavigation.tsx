import { useId, useState } from 'react';
import type { ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export type VerticalNavItem = {
  key: string;
  label: ReactNode;
  /** Ikon 24px di kiri label (mis. ikon lucide). Hanya untuk item tingkat atas. */
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
  /** Sub-menu satu tingkat. Item yang punya `children` menjadi pembuka accordion, bukan tautan. */
  children?: { key: string; label: ReactNode; href?: string; onClick?: () => void }[];
};

type Tone = 'dark' | 'light';

// Kelas ditulis utuh agar terbaca Tailwind. Hover dan aktif memakai lapisan putih 10% di latar gelap (Figma);
// di latar terang Figma memakai lapisan yang sama sehingga tak terlihat, jadi dipakai gray-5 (ekstensi).
const TONE = {
  dark: { root: 'bg-sd-surface-dark-blue text-white', row: 'hover:bg-white/10', on: 'bg-white/10', ring: 'focus-visible:outline-white' },
  light: { root: 'bg-white text-sd-gray-90', row: 'hover:bg-sd-gray-5', on: 'bg-sd-gray-5', ring: 'focus-visible:outline-sd-blue-50' },
} as const;

const ROW = 'flex w-full items-start gap-[12px] rounded-[8px] p-[12px] text-left outline-none focus-visible:rounded-[4px] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2';
const LABEL = { fontSize: 16, lineHeight: '24px' } as const;

/**
 * Vertical Navigation Seragam (Figma Seragam Web): menu samping 300px, padding 20x12, jarak antar item 12.
 * Item 48px (padding 12, gap 12, label 16/24, ikon 24, radius 8). Aktif = label bold + lapisan putih 10%;
 * fokus = border 2px putih (radius 4). Item dengan `children` membuka accordion (chevron 24) dan sub-menu
 * menjorok 36px dengan jarak 8. `tone="dark"` (default, Surface/Dark Blue) atau `"light"` (putih, teks gray-90).
 * `active` adalah key item atau sub-menu yang sedang dibuka; induknya terbuka otomatis. Kontrol buka-tutup dengan
 * `expanded` + `onExpandedChange`, atau biarkan tak terkendali lewat `defaultExpanded`.
 */
export function VerticalNavigation({
  items, active, tone = 'dark', expanded, defaultExpanded, onExpandedChange, 'aria-label': ariaLabel = 'Navigasi samping', className = '',
}: {
  items: VerticalNavItem[]; active?: string; tone?: Tone;
  expanded?: string[]; defaultExpanded?: string[]; onExpandedChange?: (keys: string[]) => void;
  'aria-label'?: string; className?: string;
}) {
  const uid = useId();
  const t = TONE[tone];
  const [inner, setInner] = useState<string[]>(() => defaultExpanded ?? items.filter((i) => i.children?.some((c) => c.key === active)).map((i) => i.key));
  const open = expanded ?? inner;
  const toggle = (key: string) => {
    const next = open.includes(key) ? open.filter((k) => k !== key) : [...open, key];
    if (expanded === undefined) setInner(next);
    onExpandedChange?.(next);
  };

  const rowClass = (on: boolean) => `${ROW} ${t.ring} ${on ? t.on : t.row}`;
  const leaf = (it: { key: string; label: ReactNode; href?: string; onClick?: () => void }, icon?: ReactNode) => {
    const on = it.key === active;
    const Tag = it.href ? 'a' : 'button';
    return (
      <Tag href={it.href} type={it.href ? undefined : 'button'} onClick={it.onClick} aria-current={on ? 'page' : undefined} className={rowClass(on)}>
        {icon && <span aria-hidden className="grid size-[24px] shrink-0 place-items-center [&>svg]:size-[24px]">{icon}</span>}
        <span className="min-w-px flex-1" style={{ ...LABEL, fontWeight: on ? 700 : 400 }}>{it.label}</span>
      </Tag>
    );
  };

  return (
    <nav aria-label={ariaLabel} className={`w-[300px] shadow-sd-01 ${t.root} ${className}`}>
      <ul className="flex flex-col gap-[12px] px-[12px] pb-[20px] pt-[20px]">
        {items.map((it) => {
          if (!it.children?.length) return <li key={it.key}>{leaf(it, it.icon)}</li>;
          const isOpen = open.includes(it.key);
          const panelId = `${uid}-${it.key}`;
          const Chevron = isOpen ? ChevronUp : ChevronDown;
          return (
            <li key={it.key} className="flex flex-col gap-[12px]">
              <button type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => toggle(it.key)} className={rowClass(false)}>
                {it.icon && <span aria-hidden className="grid size-[24px] shrink-0 place-items-center [&>svg]:size-[24px]">{it.icon}</span>}
                <span className="min-w-px flex-1" style={{ ...LABEL, fontWeight: 400 }}>{it.label}</span>
                <Chevron aria-hidden className="size-[24px] shrink-0" />
              </button>
              {isOpen && (
                <ul id={panelId} className="ml-[36px] flex flex-col gap-[8px]">
                  {it.children.map((c) => <li key={c.key}>{leaf(c)}</li>)}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
