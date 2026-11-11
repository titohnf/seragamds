# Search Bar

- Kode: `SearchBar` (`src/components`)
- Spesifikasi visual: [search.md](../../components/search.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/search, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Membantu pengguna mencari dengan mengetik kata atau kalimat kunci. Props: atribut `<input>` biasa, `onSearch` (juga dipicu `Enter`), `error`, `helper`, `disabled`. Terdiri dari kolom isian dan tombol cari.

## State
Default, Hovered, Focused, **Filled**, **Error** (situs). Contoh visual tersedia untuk **Search Bar** dan **Search Icon**. Di kode: default, fokus (border 2px biru), nonaktif; `error` (galat dari pengguna) membuat border dan teks bantu merah, `aria-invalid` dan `aria-describedby`; Filled terlihat dari teks gelap pada isian.

## Perilaku
| Mode | Kapan dipakai |
|---|---|
| Pindah ke halaman pencarian (saat kotak diklik/mulai mengetik) | Perlu informasi pendukung seperti riwayat dan rekomendasi |
| Tetap di halaman yang sama | Hasil tampil instan saat mengetik |

## Panduan
- Letakkan **di tengah, biasanya di bagian atas layar**.
- **Galat**: teks bantu hanya untuk kesalahan yang disebabkan pengguna (mis. kata kunci belum diketik). **Jangan** pakai teks bantu untuk "tidak ada hasil": gunakan [Empty State](empty-state.md).
- Situs tidak memuat panduan keyboard, aksesibilitas, atau responsif.

## Penulisan
**Kata kerja aktif / call to action** yang spesifik ("Cari", "Ketik"), **dilengkapi objek atau tipe informasi** agar jelas fungsi dan cakupannya: ✅ "Cari modul ajar...", "Cari aksi nyata...", "Ketik nama siswa...". ❌ "Search...", "Masukkan kata kunci".
