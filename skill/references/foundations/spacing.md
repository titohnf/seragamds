# Spacing

Sumber: seragam.belajar.id/spacing. Seragam memakai **kelipatan 4** sebagai dasar jarak antar elemen, supaya tata letak konsisten, cocok dengan sistem grid yang menyesuaikan layar, dan mudah dihitung.

## Skala
| Nama | Ukuran | Penggunaan umum |
|---|---|---|
| `space-4` | 4px | Jarak kecil: padding internal ikon atau elemen kecil |
| `space-8` | 8px | Jarak dasar padding/margin antar elemen berdekatan |
| `space-12` | 12px | Jarak sedang: antara teks dan elemen terkait |
| `space-16` | 16px | Margin antar komponen |
| `space-20` | 20px | Pemisah bagian yang lebih berarti |
| `space-24` | 24px | Pemisah grup elemen atau bagian halaman |
| `space-32` | 32px | Jarak besar antar bagian utama |
| `space-40` | 40px | Pemisah yang butuh penekanan visual |
| `space-48` | 48px | Maksimum untuk spasi sangat besar antar elemen utama |

## Contoh
- Padding internal tombol `space-8`; margin antar dua kartu `space-16`.
- Jarak antar kolom grid `space-24`; antar baris daftar `space-12`.
- Judul ke konten `space-16`; antar grup berbeda `space-32`.

## Aturan
1. Pakai spacing yang sama untuk elemen serupa di seluruh aplikasi.
2. Jangan membuat nilai kustom; pilih dari skala. Di Tailwind, `p-1`=4, `p-2`=8, `p-3`=12, `p-4`=16, `p-5`=20, `p-6`=24, `p-8`=32, `p-10`=40, `p-12`=48; nilai arbitrer tetap kelipatan 4 (`p-[12px]`).
3. Sesuaikan dengan ukuran layar. Contoh dari panduan: `space-16` di desktop dan `space-8` di mobile.
4. Target sentuh minimal 44px. Margin layar mobile 16–24px; jarak antar kolom isian minimal 24px.

> **Catatan implementasi.** Halaman sumber menamai skala `space-*`, tetapi belum ada token spacing di `tokens/seragam.tokens.json` (belum ada di Figma *Seragam Dasar*). Sampai ada, pakai skala Tailwind di atas; nama `space-*` hanya untuk komunikasi dengan desainer.
