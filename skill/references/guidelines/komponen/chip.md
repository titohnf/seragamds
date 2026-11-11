# Chip

- Kode: `ChipGroup` (`src/components`)
- Spesifikasi visual: [chips.md](../../components/chips.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/chips, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Komponen interaktif kecil untuk memasukkan informasi, membuat pilihan, memfilter konten, atau memicu aksi sekunder. Props `ChipGroup`: `items` (teks atau `{ label, icon?, disabled? }`), `active` (indeks, atau daftar indeks untuk banyak pilihan), `onChange`, `onRemove`, `size`, `aria-label`.

## Jenis
- **Ukuran**: `regular` (padding 8×16) dan `small` (4×12, tinggi 28).
- **Active / Non-active**: aktif saat opsi terkait berlaku.
- **Ikon depan** (`icon`, opsional): pakai ikon sistem untuk mengenali kategori. **Ikon belakang** (`onRemove`): aksi sekunder seperti menutup/menghapus chip.
- **Assist chip**: memicu aksi sekunder (mis. membuka dropdown).

## State dan perilaku
Default, Hovered, Focused, Pressed, Disabled. Tiap chip tombol toggle (`aria-pressed`); bisa dinavigasi keyboard (`Tab`, `Enter`/`Space`); saat fokus tampil cincin biru.

## Panduan
- **Chip bukan Button.** Chip menyajikan opsi kontekstual dan tambahan tanpa mengganggu alur; Button punya hierarki visual lebih tinggi. Tindakan yang membawa pengguna ke langkah sebelumnya/berikutnya harus Button.
- Memfilter konten: mis. hasil pencarian.
- **Jarak antar chip minimal 8.**
- Penempatan: (1) daftar yang digulir horizontal: tidak disarankan untuk pengguna kurang familiar teknologi karena mudah terlewat; (2) daftar bertumpuk (wrap, bawaan komponen).

## Penulisan
Label menunjukkan kategori yang relevan dengan konten yang difilter. **Idealnya 1–2 kata, maksimal 4 kata** (situs menyebut "3–4 kata" di judul dan "tidak lebih dari 4" di isi). **Hindari kata kerja/call to action**: chip tidak menggantikan tombol aksi.

## Catatan kode
Role sebelumnya `tablist`/`tab`; kini `group` + tombol `aria-pressed` agar sesuai perannya sebagai filter/pilihan, bukan tab halaman.
