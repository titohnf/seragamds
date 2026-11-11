import { createContext, useContext, useEffect, useRef, useState } from 'react';
import type { HTMLAttributes, ReactNode, TdHTMLAttributes, ThHTMLAttributes } from 'react';
import { typo } from '../tokens';

export type TableSize = 'lg' | 'md' | 'sm';
/** `default` putih, `subtle` abu muda #F5F5F5, `neutral` abu #EFEFEF (badge-neutral; terbaca beda dari latar halaman #F9F9F9). */
export type TableHeaderTone = 'default' | 'subtle' | 'neutral';
/** `true` (bawaan) = garis di semua sisi sel (Figma Border=True); `'rows'` = hanya garis horizontal antar baris (ekstensi); `false` = tanpa garis. */
export type TableBorder = boolean | 'rows';

type Ctx = { size: TableSize; striped: boolean; bordered: TableBorder; hoverable: boolean; sticky: boolean };
const TableContext = createContext<Ctx>({ size: 'lg', striped: false, bordered: true, hoverable: true, sticky: false });

const PX: Record<TableSize, number> = { lg: 16, md: 12, sm: 8 };
/** Di Figma garis 1px berada DI DALAM padding. Di CSS garis menambah ukuran, jadi padding dikurangi 1px di sisi yang bergaris. */
function pad(size: TableSize, bordered: TableBorder, bordersTop: boolean) {
  const p = PX[size], b = bordered ? 1 : 0, r = bordered === true ? 1 : 0;
  return { paddingTop: p - (bordersTop ? b : 0), paddingBottom: p - b, paddingLeft: p, paddingRight: p - r };
}

// Garis 1px antar sel dipasang dari tabel agar tidak ganda: kiri dan atas di tepi, kanan dan bawah di tiap sel.
const BORDER =
  '[&_th]:border-t [&_th]:border-b [&_th]:border-r [&_th:first-child]:border-l ' +
  '[&_td]:border-b [&_td]:border-r [&_td:first-child]:border-l ' +
  '[&_th]:border-sd-modal-footer-border [&_td]:border-sd-modal-footer-border';
// `stacked`: di bawah 768px thead disembunyikan (tetap terbaca pembaca layar), baris jadi kartu, sel menampilkan label dari `data-label`.
const STACKED =
  'max-md:[&_thead]:sr-only max-md:block max-md:[&_tbody]:block max-md:[&_tr]:block ' +
  'max-md:[&_tbody_tr]:mb-[12px] max-md:[&_tbody_tr]:overflow-hidden max-md:[&_tbody_tr]:rounded-[8px] max-md:[&_tbody_tr]:border max-md:[&_tbody_tr]:border-sd-modal-footer-border ' +
  'max-md:[&_td]:flex max-md:[&_td]:items-baseline max-md:[&_td]:justify-between max-md:[&_td]:gap-[16px] max-md:[&_td]:border-r-0 max-md:[&_td:first-child]:border-l-0 max-md:[&_td]:text-right ' +
  'max-md:[&_td]:before:content-[attr(data-label)] max-md:[&_td]:before:text-left max-md:[&_td]:before:font-semibold max-md:[&_td]:before:text-sd-gray-60';
// `rows`: hanya garis horizontal (atas header, bawah tiap baris), tanpa garis vertikal antar kolom.
const BORDER_ROWS = '[&_th]:border-t [&_th]:border-b [&_td]:border-b [&_th]:border-sd-modal-footer-border [&_td]:border-sd-modal-footer-border';

/**
 * Table Seragam. Header 13/16 semibold kapital (huruf renggang 0.5) gray-90 dengan bayangan tipis; sel 15/22 regular.
 * Ukuran lg/md/sm = padding 16/12/8. `striped` memberi latar #FAFAFA pada baris genap. `bordered` memberi garis 1px #D9DBDD: `true` di semua sisi sel, `'rows'` (ekstensi) hanya antar baris, `false` tanpa garis.
 * Isi rata tengah vertikal; baris punya status hover (Surface/Hovered) kecuali `hoverable={false}` (tabel yang barisnya tidak bisa diklik); `TableRow selected` untuk baris terpilih (Surface Selected/Default).
 * Susun dengan TableHead, TableBody, TableRow, TableHeaderCell, TableCell. Bungkus dengan scroll horizontal otomatis; tepi yang masih bisa digeser diberi bayangan (indikator gulir).
 * Bila isinya meluber (horizontal atau vertikal), wilayah gulir menjadi `role="region"` bernama (dari `caption`) dan bisa difokuskan keyboard (`tabIndex=0`) agar bisa digulir dengan panah.
 * `stickyHeader` (+ `maxHeight`): header menempel di atas saat tabel panjang menggulir (disarankan di mobile/tablet untuk tabel panjang).
 * `stacked`: di bawah 768px setiap baris menjadi kartu bertumpuk dan tiap sel menampilkan labelnya: diambil OTOMATIS dari teks header kolomnya, atau isi `label` pada `TableCell` untuk menimpa; alternatif gulir horizontal untuk tabel yang kolomnya terlalu banyak.
 */
export function Table({ size = 'lg', striped = false, bordered = true, hoverable = true, headerTone = 'default', stickyHeader = false, maxHeight, stacked = false, caption, className = '', children, ...rest }: {
  size?: TableSize; striped?: boolean; bordered?: TableBorder; hoverable?: boolean; headerTone?: TableHeaderTone; stickyHeader?: boolean; maxHeight?: number | string; stacked?: boolean; caption?: ReactNode; className?: string; children: ReactNode;
} & Omit<HTMLAttributes<HTMLTableElement>, 'className' | 'children'>) {
  const ref = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);
  const [edge, setEdge] = useState({ left: false, right: false });
  const [scrollable, setScrollable] = useState(false);
  // stacked: isi data-label tiap sel dari teks header kolom yang sama (kecuali sel sudah punya label)
  useEffect(() => {
    const t = tableRef.current; if (!stacked || !t) return;
    const fill = () => {
      const heads = [...t.querySelectorAll('thead tr:last-child > th')].map((th) => (th.textContent ?? '').trim());
      t.querySelectorAll('tbody tr').forEach((tr) => [...tr.children].forEach((td, i) => { if (td instanceof HTMLElement && !('labelSet' in td.dataset) && heads[i] && td.dataset.label !== heads[i]) td.dataset.label = heads[i]; }));
    };
    fill(); const mo = new MutationObserver(fill); mo.observe(t, { childList: true, subtree: true, characterData: true });
    return () => mo.disconnect();
  }, [stacked]);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const measure = () => { setEdge({ left: el.scrollLeft > 1, right: el.scrollLeft + el.clientWidth < el.scrollWidth - 1 }); setScrollable(el.scrollWidth > el.clientWidth + 1 || el.scrollHeight > el.clientHeight + 1); };
    measure(); el.addEventListener('scroll', measure, { passive: true });
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null; ro?.observe(el);
    return () => { el.removeEventListener('scroll', measure); ro?.disconnect(); };
  }, []);
  return (
    <TableContext.Provider value={{ size, striped, bordered, hoverable, sticky: stickyHeader }}>
      <div className="relative w-full">
      <div ref={ref} className="w-full overflow-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-sd-blue-50" style={{ maxHeight }}
        {...(scrollable ? { tabIndex: 0, role: 'region', 'aria-label': typeof caption === 'string' ? caption : 'Tabel' } : {})}>
        <table
          {...rest} ref={tableRef}
          className={`w-full border-separate border-spacing-0 text-left text-sd-gray-90 ${stacked ? STACKED : ''} ${bordered === 'rows' ? BORDER_ROWS : bordered ? BORDER : ''} ${className}`}
          data-header-tone={headerTone}
        >
          {caption && <caption className="sr-only">{caption}</caption>}
          {children}
        </table>
      </div>
      {edge.left && <span aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-[16px] bg-gradient-to-r from-black/10 to-transparent" />}
      {edge.right && <span aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-[16px] bg-gradient-to-l from-black/10 to-transparent" />}
      </div>
    </TableContext.Provider>
  );
}

export const TableHead = (p: HTMLAttributes<HTMLTableSectionElement>) => <thead {...p} />;
export const TableBody = (p: HTMLAttributes<HTMLTableSectionElement>) => <tbody {...p} />;

/** Baris. Di TableBody, `striped` pada Table membuat baris genap berlatar #FAFAFA. `selected` memberi latar Surface Selected/Default (#E6F1FF) pada baris yang dipilih. */
export function TableRow({ className = '', selected = false, ...rest }: HTMLAttributes<HTMLTableRowElement> & { selected?: boolean }) {
  const { striped, hoverable } = useContext(TableContext);
  return <tr {...rest} aria-selected={selected || undefined} className={`${selected ? 'bg-sd-surface-selected-default' : 'bg-white'} ${striped ? '[tbody_&:nth-child(even)]:bg-sd-table-stripe' : ''} ${selected || !hoverable ? '' : '[tbody_&:hover]:bg-sd-surface-hovered [tbody_&:hover:nth-child(even)]:bg-sd-surface-hovered'} ${className}`} />;
}

export function TableHeaderCell({ className = '', scope = 'col', style, ...rest }: ThHTMLAttributes<HTMLTableCellElement>) {
  const { size, bordered, sticky } = useContext(TableContext);
  return (
    <th
      scope={scope}
      {...rest}
      className={`${sticky ? 'sticky top-0 z-10' : ''} bg-white align-middle font-semibold uppercase shadow-[0_2px_1px_rgba(0,0,0,0.05)] [table[data-header-tone=subtle]_&]:bg-sd-modal-header [table[data-header-tone=neutral]_&]:bg-sd-badge-neutral ${className}`}
      style={{ ...typo.subHeading, ...pad(size, bordered, true), ...style }}
    />
  );
}

/** `label` = nama kolom, ditampilkan di samping nilai pada `Table stacked` (mobile). */
export function TableCell({ className = '', style, label, ...rest }: TdHTMLAttributes<HTMLTableCellElement> & { label?: string }) {
  const { size, bordered } = useContext(TableContext);
  return <td {...rest} data-label={label} data-label-set={label ? '' : undefined} className={`align-middle font-normal ${className}`} style={{ ...typo.body, ...pad(size, bordered, false), ...style }} />;
}
