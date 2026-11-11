import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from 'react';
import { typo } from '../tokens';

/**
 * Search Bar Seragam 3.0: tinggi 46/48, radius 4, border gray-30, placeholder gray-60; tombol cari persegi di kanan (border gray-30, hover gray-5); fokus border blue-50 2px.
 * State (panduan): Default, Hovered, Focused, Filled, Error. `error` = galat yang DISEBABKAN PENGGUNA saja (mis. kata kunci belum diketik): border dan teks bantu merah.
 * "Tidak ada hasil" BUKAN galat di sini: tampilkan Empty State. `helper` = teks bantu netral. Enter memicu `onSearch`.
 */
export const SearchBar = forwardRef<HTMLInputElement, Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & { onSearch?: () => void; error?: ReactNode; helper?: ReactNode }>(
  ({ onSearch, error, helper, className = '', disabled, ...rest }, ref) => {
    const note = error || helper; const noteId = useId();
    return (
    <div className="flex flex-col gap-[4px]">
    <div className={`flex h-[calc(var(--sd-text-body-line)_+_24px)] items-stretch rounded-[4px] bg-white ${disabled ? 'bg-sd-badge-neutral' : ''} ${className}`}>
      <input ref={ref} {...rest} disabled={disabled} type="search" aria-invalid={!!error || undefined} aria-describedby={note ? noteId : undefined} style={{ ...typo.body }}
        onKeyDown={(e) => { rest.onKeyDown?.(e); if (e.key === 'Enter') onSearch?.(); }}
        className={`peer min-w-0 flex-1 rounded-l-[4px] border border-r-0 bg-transparent pl-[12px] pr-[8px] text-sd-gray-90 outline-none placeholder:text-sd-gray-60 focus:border-2 focus:border-r-0 disabled:text-sd-gray-50 ${error ? 'border-sd-red-60 focus:border-sd-red-60' : 'border-sd-gray-30 focus:border-sd-blue-50'}`} />
      <button type="button" aria-label="Cari" disabled={disabled} onClick={onSearch}
        className={`grid w-[calc(var(--sd-text-body-line)_+_24px)] place-items-center rounded-r-[4px] border text-sd-gray-90 outline-none hover:bg-sd-gray-5 peer-focus:border-2 disabled:text-sd-gray-50 ${error ? 'border-sd-red-60 peer-focus:border-sd-red-60' : 'border-sd-gray-30 peer-focus:border-sd-blue-50'}`}>
        <svg aria-hidden viewBox="0 0 24 24" className="size-[20px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
      </button>
    </div>
    {note && <span id={noteId} className={error ? 'text-sd-red-60' : 'text-sd-gray-60'} style={{ ...typo.helper }}>{note}</span>}
    </div>
    );
  },
);
SearchBar.displayName = 'SearchBar';
