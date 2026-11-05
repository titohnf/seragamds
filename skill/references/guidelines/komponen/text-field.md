# Text Field

- Kode: `TextField, TextArea` (`src/components`)
- Spesifikasi visual: [text-field.md](../../components/text-field.md)

> **Status: dari panduan Seragam** (seragam.belajar.id), disesuaikan ke props komponen di repo ini.

## Jenis
| Jenis | Komponen |
|---|---|
| Data singkat (nama, email, kata sandi) | `TextField` |
| Data panjang (komentar, deskripsi) | `TextArea` |

Label, teks bantu, dan pesan galat adalah prop bawaan: `label`, `helper`, `error`. `TextField` juga punya `leftIcon` dan `rightIcon`.

## State
Default (border abu-abu), fokus (border biru), nonaktif (`disabled`), galat (`error="..."`).

## Panduan
- Tinggi kontrol 46px. Jarak antar kolom minimal 24px (di luar jarak internal komponen).
- Mobile: lebar penuh, margin layar 16–24px.
- Selalu isi `label`.
- Isi `helper` untuk menjelaskan format yang diharapkan.
- Tampilkan validasi lewat `error`, bukan lewat alert terpisah.

## Do & Don't
- ✅ Label jelas di atas kolom.
- ✅ `helper` menjelaskan format; `error` menjelaskan masalah dan solusinya.
- ❌ Kolom tanpa label.
- ❌ Pesan galat teknis ("Error 400: Invalid").

## Penulisan
Lihat [penulisan.md](../penulisan.md): label, placeholder (contoh nyata, mis. "cth. nama@email.com"), teks bantu, dan pesan galat.
