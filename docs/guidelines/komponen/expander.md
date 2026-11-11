# Expander

- Kode: `Expander` (`src/components`)
- Spesifikasi visual: [expander.md](../../components/expander.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/text-expander, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Membuat halaman berkonten banyak terasa ringkas dengan menyembunyikan sebagian atau seluruh isi. Props: `expanded`, `onToggle`, `inverted`, `expandLabel` (bawaan "Selengkapnya"), `collapseLabel` (bawaan "Sembunyikan").

## Jenis
Default dan **Inverted** (`inverted`, latar gelap), masing-masing Expand dan Collapse.

## Panduan
- Tujuan: mengurangi kepadatan teks agar pengguna fokus dan nyaman.
- **Tampilkan sebagian konten dulu** agar konteks dipahami, baru letakkan Expander setelahnya.
- Rata kiri mengikuti grid paragraf.
- `aria-expanded` pada tombol; `Enter`/`Space` membuka-menutup.

## Penulisan
**Konsisten di seluruh platform.** Buka: "Selengkapnya" atau "Tampilkan semua". Tutup: "Tutup" atau "Sembunyikan". Sentence case, tanpa titik.
