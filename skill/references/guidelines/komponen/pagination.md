# Pagination

- Kode: `Pagination` (`src/components`)
- Spesifikasi visual: [pagination.md](../../components/pagination.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/pagination, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Membagi konten besar menjadi beberapa halaman. Props: `page`, `pageCount`, `onPageChange`. Halaman mulai dari 1.

## Jenis
- **Default**: semua nomor halaman dicantumkan (komponen: sampai 7 halaman).
- **Truncated**: tempat terbatas, tidak semua nomor tampil. Komponen menampilkan halaman pertama, terakhir, dan halaman aktif ±1, dengan "…" di antaranya. Ini otomatis menjadi **double truncation** (dua "…") bila halaman aktif berada jauh dari halaman awal **dan** akhir (situs: lebih dari lima halaman dari keduanya).

## Perilaku
- Simbol "…" **bukan elemen interaktif**. Untuk mencapai halaman di baliknya, pengguna berpindah ke halaman lain yang lebih dekat dengan tujuan.
- Tombol Sebelumnya/Berikutnya nonaktif di ujung. Halaman aktif `aria-current="page"`; `nav` berlabel "Pagination". Keyboard: tombol asli.

## Panduan
- Letakkan di **bawah dan di sisi kanan** halaman, biasanya di bawah [Table](table.md), daftar, atau data terkait, supaya tidak mengganggu navigasi utama.
- Pakai untuk data yang banyak (repo: lebih dari ±10–20 baris).
- Situs tidak memuat state, panduan penulisan, aksesibilitas, atau responsif untuk komponen ini; bagian "Praktik baik" di situs hanya berupa gambar.
