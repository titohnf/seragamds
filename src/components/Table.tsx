import { createContext, useContext } from 'react';
import type { HTMLAttributes, ReactNode, TdHTMLAttributes, ThHTMLAttributes } from 'react';
import { typo } from '../tokens';

export type TableSize = 'lg' | 'md' | 'sm';
/** `default` putih, `subtle` abu muda #F5F5F5, `neutral` abu #EFEFEF (badge-neutral; terbaca beda dari latar halaman #F9F9F9). */
export type TableHeaderTone = 'default' | 'subtle' | 'neutral';
/** `true` (bawaan) = garis di semua sisi sel (Figma Border=True); `'rows'` = hanya garis horizontal antar baris (ekstensi); `false` = tanpa garis. */
export type TableBorder = boolean | 'rows';

type Ctx = { size: TableSize; striped: boolean; bordered: TableBorder; hoverable: boolean };
const TableContext = createContext<Ctx>({ size: 'lg', striped: false, bordered: true, hoverable: true });

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
// `rows`: hanya garis horizontal (atas header, bawah tiap baris), tanpa garis vertikal antar kolom.
const BORDER_ROWS = '[&_th]:border-t [&_th]:border-b [&_td]:border-b [&_th]:border-sd-modal-footer-border [&_td]:border-sd-modal-footer-border';

/**
 * Table Seragam. Header 13/16 semibold kapital (huruf renggang 0.5) gray-90 dengan bayangan tipis; sel 15/22 regular.
 * Ukuran lg/md/sm = padding 16/12/8. `striped` memberi latar #FAFAFA pada baris genap. `bordered` memberi garis 1px #D9DBDD: `true` di semua sisi sel, `'rows'` (ekstensi) hanya antar baris, `false` tanpa garis.
 * Isi rata tengah vertikal; baris punya status hover (Surface/Hovered) kecuali `hoverable={false}` (tabel yang barisnya tidak bisa diklik); `TableRow selected` untuk baris terpilih (Surface Selected/Default).
 * Susun dengan TableHead, TableBody, TableRow, TableHeaderCell, TableCell. Bungkus dengan scroll horizontal otomatis.
 */
export function Table({ size = 'lg', striped = false, bordered = true, hoverable = true, headerTone = 'default', caption, className = '', children, ...rest }: {
  size?: TableSize; striped?: boolean; bordered?: TableBorder; hoverable?: boolean; headerTone?: TableHeaderTone; caption?: ReactNode; className?: string; children: ReactNode;
} & Omit<HTMLAttributes<HTMLTableElement>, 'className' | 'children'>) {
  return (
    <TableContext.Provider value={{ size, striped, bordered, hoverable }}>
      <div className="w-full overflow-x-auto">
        <table
          {...rest}
          className={`w-full border-separate border-spacing-0 text-left text-sd-gray-90 ${bordered === 'rows' ? BORDER_ROWS : bordered ? BORDER : ''} ${className}`}
          data-header-tone={headerTone}
        >
          {caption && <caption className="sr-only">{caption}</caption>}
          {children}
        </table>
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
  const { size, bordered } = useContext(TableContext);
  return (
    <th
      scope={scope}
      {...rest}
      className={`bg-white align-middle font-semibold uppercase shadow-[0_2px_1px_rgba(0,0,0,0.05)] [table[data-header-tone=subtle]_&]:bg-sd-modal-header [table[data-header-tone=neutral]_&]:bg-sd-badge-neutral ${className}`}
      style={{ ...typo.subHeading, ...pad(size, bordered, true), ...style }}
    />
  );
}

export function TableCell({ className = '', style, ...rest }: TdHTMLAttributes<HTMLTableCellElement>) {
  const { size, bordered } = useContext(TableContext);
  return <td {...rest} className={`align-middle font-normal ${className}`} style={{ ...typo.body, ...pad(size, bordered, false), ...style }} />;
}
