# Platform

- Kode: `Platform` (`src/components`)
- Spesifikasi visual: ada di halaman ini (ekstensi, tidak ada di Figma)

> **Status: ekstensi.** Komponen di luar Figma. Memilih skala tipografi Mobile atau Desktop untuk seluruh isinya. Lihat [extensions.md](../../extensions.md) dan keputusan 2026-11-11 di [DECISIONS](../../DECISIONS.md).

Figma Seragam hanya punya komponen mobile, sehingga di desktop huruf terlihat kecil. Seragam sekarang memakai **satu komponen dengan dua skala huruf**: bentuk, warna, dan props sama; yang berganti hanya ukuran huruf, tinggi baris, dan tinggi kontrol yang diturunkan darinya.

## Spesifikasi
Atribut `data-sd-platform` pada elemen mana pun (juga `<html>`, `<body>`) memilih skala untuk seluruh keturunannya:

| Nilai | Perilaku |
|---|---|
| `auto` (bawaan, juga bila atribut tidak ada) | skala **Mobile**, berganti ke **Desktop** mulai lebar viewport **1024px** |
| `desktop` | selalu Desktop: produk web desktop |
| `mobile` | selalu Mobile: aplikasi mobile, pratinjau lebar mobile |

Padanan skala (Mobile ↔ Desktop, ukuran/tinggi baris px): body 15/22 ↔ 16/24 · bodysmall 13/20 ↔ 14/20 · action 15/22 ↔ 16/24 semibold · subheading 13/16 ↔ 14/16 · headingsmall 16/22 ↔ 17/22 · headingmedium 18/24 ↔ 19/24 · helper 12/16 (sama) · headinglarge 22/28 (sama) · displaysmall 24/28 (sama). Seluruhnya token `--sd-type-mobile-*` dan `--sd-type-desktop-*`; lapisan responsifnya `--sd-text-<nama>-{size,line,weight}` dan kelas `.sd-t-<nama>` di `tokens/seragam.css`.

Tinggi kontrol mengikuti tinggi baris: Button lg = baris Action + 24 (Mobile 46, Desktop 48), md = +16 (38/40), sm tetap 28; TextField, Select, SearchBar, Stepper = baris Body + 24 (46/48). Tab 56 sudah pas untuk Desktop.

## Props
`platform` (`auto` · `desktop` · `mobile`), `as` (elemen, bawaan `div`), `style`, atribut HTML lain. Pembungkus memakai `display: contents`, jadi tidak memengaruhi tata letak.

## Panduan
- Aplikasi mobile murni: pasang `mobile`. Produk web desktop: pasang `desktop`. Situs responsif: biarkan `auto`.
- Pasang **sekali** di akar (`<html data-sd-platform="desktop">` atau satu `Platform`). Pembungkus bersarang hanya untuk pratinjau atau area khusus.
- Di kode komponen dan halaman, **jangan menulis ukuran huruf angka** (`fontSize: 15`, `text-[15px]`). Pakai `style={typo.body}` / `...typo.action` dari `src/tokens.ts` atau kelas `sd-t-body`, `sd-t-action`, dan seterusnya. `npm run check` menolak ukuran huruf literal di `src/components`.
- Bila tinggi bergantung pada teks, hitung dari tinggi baris: `h-[calc(var(--sd-text-body-line)_+_24px)]`.

## Do & Don't
- ✅ Satu penentu platform di akar aplikasi.
- ❌ Dua versi komponen (`ButtonDesktop`). Satu komponen, dua skala.
- ❌ Memilih skala dengan media query sendiri di komponen.
