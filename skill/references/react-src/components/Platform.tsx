import type { ElementType, HTMLAttributes, ReactNode } from 'react';

export type SeragamPlatform = 'auto' | 'mobile' | 'desktop';

/**
 * Pembungkus yang memilih skala tipografi Seragam untuk seluruh isinya lewat atribut `data-sd-platform` (EKSTENSI, tidak ada di Figma).
 * - `auto` (bawaan): skala Mobile, berganti ke Desktop mulai lebar viewport 1024px.
 * - `desktop`: selalu skala Desktop (produk web desktop). - `mobile`: selalu skala Mobile (aplikasi mobile, pratinjau).
 * Komponen tidak perlu tahu platform: ukuran huruf dan tinggi kontrol mengikuti variabel CSS `--sd-text-*`.
 * Tanpa pembungkus, pasang atribut yang sama di `<html>` atau `<body>`; tanpa atribut berarti `auto`.
 * Pembungkus memakai `display: contents` sehingga tidak memengaruhi tata letak (`as` dan `style` bisa diubah bila perlu).
 */
export function Platform({ platform = 'auto', as: Tag = 'div', children, style, ...rest }: { platform?: SeragamPlatform; as?: ElementType; children: ReactNode } & HTMLAttributes<HTMLElement>) {
  return <Tag data-sd-platform={platform} style={{ display: 'contents', ...style }} {...rest}>{children}</Tag>;
}
