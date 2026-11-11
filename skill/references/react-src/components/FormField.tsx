import { useId, type ReactNode } from 'react';
import { typo } from '../tokens';

/**
 * Form Field Seragam (EKSTENSI): label + teks bantu + galat untuk kontrol APA PUN yang tidak membawa sendiri (mis. Select kustom, input pihak ketiga).
 * `TextField`, `TextArea`, `Select`, dan `DatePicker` sudah memuat label/bantu/galat sendiri; jangan membungkusnya lagi.
 * `children` adalah fungsi yang menerima `{ id, aria-describedby, aria-invalid, aria-required }` untuk dipasang ke kontrolnya, sehingga label terhubung.
 * Seragam menandai isian yang TIDAK wajib dengan "(opsional)" (`optional`), bukan tanda bintang pada yang wajib; `required` hanya menambah `aria-required`.
 * Galat muncul di bawah kontrol dan menggantikan teks bantu; jelaskan masalah dan solusinya.
 */
export function FormField({ label, helper, error, optional = false, required = false, children, className = '' }: {
  label: string; helper?: ReactNode; error?: ReactNode; optional?: boolean; required?: boolean;
  children: (p: { id: string; 'aria-describedby'?: string; 'aria-invalid'?: true; 'aria-required'?: true }) => ReactNode; className?: string;
}) {
  const id = useId(); const noteId = `${id}-note`;
  const note = error || helper;
  return (
    <div className={`flex flex-col gap-[4px] ${className}`}>
      <label htmlFor={id} className="text-sd-gray-90" style={{ ...typo.body }}>{label}{optional ? ' (opsional)' : ''}</label>
      {children({ id, 'aria-describedby': note ? noteId : undefined, 'aria-invalid': error ? true : undefined, 'aria-required': required ? true : undefined })}
      {note && <span id={noteId} className={error ? 'text-sd-red-60' : 'text-sd-gray-60'} style={{ ...typo.helper }}>{note}</span>}
    </div>
  );
}

/**
 * Field Group Seragam (EKSTENSI): `<fieldset>` + `<legend>` untuk sekelompok Radio atau Checkbox. Panduan Radio: label SEBELUM daftar pilihan yang menjelaskan konteksnya.
 * `orientation`: `vertical` (bawaan) atau `horizontal` (susun menyamping, membungkus). Teks bantu/galat terhubung lewat `aria-describedby`. `optional` menambah "(opsional)".
 */
export function FieldGroup({ legend, helper, error, optional = false, orientation = 'vertical', children, className = '' }: {
  legend: string; helper?: ReactNode; error?: ReactNode; optional?: boolean; orientation?: 'vertical' | 'horizontal'; children: ReactNode; className?: string;
}) {
  const id = useId(); const note = error || helper;
  return (
    <fieldset aria-describedby={note ? `${id}-note` : undefined} className={`m-0 flex min-w-0 flex-col gap-[8px] border-0 p-0 ${className}`}>
      <legend className="mb-[4px] p-0 text-sd-gray-90" style={{ ...typo.body }}>{legend}{optional ? ' (opsional)' : ''}</legend>
      <div className={orientation === 'horizontal' ? 'flex flex-wrap gap-x-[24px] gap-y-[12px]' : 'flex flex-col gap-[12px]'}>{children}</div>
      {note && <span id={`${id}-note`} className={error ? 'text-sd-red-60' : 'text-sd-gray-60'} style={{ ...typo.helper }}>{note}</span>}
    </fieldset>
  );
}
