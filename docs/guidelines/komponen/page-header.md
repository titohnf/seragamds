# Page Header

- Kode: `PageHeader` (`src/components`)

> **Status: ekstensi (draf).** Tidak ada di Figma Seragam. Ditemukan di aplikasi Sistem Informasi Penjaminan Mutu, diusulkan ke tim DS. Lihat [extensions.md](../../extensions.md).

Kepala halaman penuh lebar: breadcrumb, judul, penjelasan singkat, dan (opsional) satu elemen pendamping seperti `ProcessSteps`.

## Spesifikasi dan props
`title` (opsional bila `compact`), `description`, `breadcrumb`, `aside`, `children`, `compact`, `tone` (`blue` default · `dark` · `light`), `contentClassName` (lebar isi; samakan dengan wadah halaman).

## Perilaku
- `blue`: latar `surface-dark-blue` (#103178), sama dengan banner Rapor Pendidikan. Pilihan utama untuk produk yang berdampingan dengan Rapor.
- `dark`: latar `gray-90`. Terbaca hampir hitam; pakai hanya bila produk memang netral.
- Pada `blue` dan `dark`: judul putih, penjelasan `text-inverse-subdued`; pakai `Breadcrumb inverse` dan `ProcessSteps inverse` di dalamnya.
- `light`: latar putih dengan garis bawah `modal-footer-border`.
- Judul 24/28 semibold; penjelasan 15/22, maksimal 68 karakter per baris.

- `compact`: pita tipis (padding 12) berisi `breadcrumb` di kiri dan `aside` di kanan, tanpa judul. Dipakai saat judul dan pengantar dipindah ke badan halaman.

## Panduan
- Satu `PageHeader` per halaman, tepat di bawah Navigation Bar.
- Judul menyebut isi halaman dengan kata kerja bila itu sebuah tugas ("Menetapkan prioritas dan target mutu").
- Jangan taruh tombol aksi utama di sini; letakkan di isi halaman agar tidak berebut dengan navigasi.

## Do & Don't
- ✅ `tone="blue"` bila produk harus terasa satu keluarga dengan Rapor Pendidikan.
- ❌ Menulis `bg-[#103178]` atau `bg-[#323232]`; pakai komponen ini.
