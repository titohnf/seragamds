# Tabs

- Kode: `Tabs` (`src/components`)
- Spesifikasi visual: [tabs.md](../../components/tabs.md)

> **Status: dari panduan Seragam** (seragam.belajar.id), disesuaikan ke props komponen di repo ini.

Props: `items` (teks atau `{ label, count }`), `active`, `onChange`, `fill`.

## Panduan
- Hanya satu tab aktif pada satu waktu.
- Tab mengganti konten dalam halaman yang sama, tidak berpindah halaman.
- Hindari Tabs bersarang.
- Jangan memotong (truncate) label tab.
- `fill` membuat tab mengisi lebar penuh; pakai bila semua tab muat dalam satu layar.
- Hitungan (`count`) pada tab aktif berlatar `action-default` dengan teks putih agar terlihat; pada tab lain abu netral (ekstensi, lihat [extensions.md](../../extensions.md)).

## Penulisan
Maksimal 3 kata per tab. Sentence case. Tanpa titik di akhir.
