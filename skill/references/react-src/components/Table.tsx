import { createContext, useContext } from 'react';
import type { HTMLAttributes, ReactNode, TdHTMLAttributes, ThHTMLAttributes } from 'react';

export type TableSize = 'lg' | 'md' | 'sm';
export type TableHeaderTone = 'default' | 'subtle';

type Ctx = { size: TableSize; striped: boolean; bordered: boolean };
const TableContext = createContext<Ctx>({ size: 'lg', striped: false, bordered: true });

const PX: Record<TableSize, number> = { lg: 16, md: 12, sm: 8 };
/** Di Figma garis 1px berada DI DALAM padding. Di CSS garis menambah ukuran, jadi padding dikurangi 1px di sisi yang bergaris. */
function pad(size: TableSize, bordered: boolean, bordersTop: boolean) {
  const p = PX[size], b = bordered ? 1 : 0;
  return { paddingTop: p - (bordersTop ? b : 0), paddingBottom: p - b, paddingLeft: p, paddingRight: p - b };
}

// Garis 1px antar sel dipasang dari tabel agar tidak ganda: kiri dan atas di tepi, kanan dan bawah di tiap sel.
const BORDER =
  '[&_th]:border-t [&_th]:border-b [&_th]:border-r [&_th:first-child]:border-l ' +
  '[&_td]:border-b [&_td]:border-r [&_td:first-child]:border-l ' +
  '[&_th]:border-sd-modal-footer-border [&_td]:border-sd-modal-footer-border';

/**
 * Table Seragam. Header 13/16 semibold kapital (huruf renggang 0.5) gray-90 dengan bayangan tipis; sel 15/22 regular.
 * Ukuran lg/md/sm = padding 16/12/8. `striped` memberi latar #FAFAFA pada baris genap. `bordered` memberi garis 1px #D9DBDD.
 * Susun dengan TableHead, TableBody, TableRow, TableHeaderCell, TableCell. Bungkus dengan scroll horizontal otomatis.
 */
export function Table({ size = 'lg', striped = false, bordered = true, headerTone = 'default', caption, className = '', children, ...rest }: {
  size?: TableSize; striped?: boolean; bordered?: boolean; headerTone?: TableHeaderTone; caption?: ReactNode; className?: string; children: ReactNode;
} & Omit<HTMLAttributes<HTMLTableElement>, 'className' | 'children'>) {
  return (
    <TableContext.Provider value={{ size, striped, bordered }}>
      <div className="w-full overflow-x-auto">
        <table
          {...rest}
          className={`w-full border-separate border-spacing-0 text-left text-sd-gray-90 ${bordered ? BORDER : ''} ${className}`}
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

/** Baris. Di TableBody, `striped` pada Table membuat baris genap berlatar #FAFAFA. */
export function TableRow({ className = '', ...rest }: HTMLAttributes<HTMLTableRowElement>) {
  const { striped } = useContext(TableContext);
  return <tr {...rest} className={`bg-white ${striped ? '[tbody_&:nth-child(even)]:bg-sd-table-stripe' : ''} ${className}`} />;
}

export function TableHeaderCell({ className = '', scope = 'col', style, ...rest }: ThHTMLAttributes<HTMLTableCellElement>) {
  const { size, bordered } = useContext(TableContext);
  return (
    <th
      scope={scope}
      {...rest}
      className={`bg-white font-semibold uppercase shadow-[0_2px_1px_rgba(0,0,0,0.05)] [table[data-header-tone=subtle]_&]:bg-sd-modal-header ${className}`}
      style={{ fontSize: 13, lineHeight: '16px', letterSpacing: 0.5, ...pad(size, bordered, true), ...style }}
    />
  );
}

export function TableCell({ className = '', style, ...rest }: TdHTMLAttributes<HTMLTableCellElement>) {
  const { size, bordered } = useContext(TableContext);
  return <td {...rest} className={`font-normal ${className}`} style={{ fontSize: 15, lineHeight: '22px', ...pad(size, bordered, false), ...style }} />;
}
