# Modal

- Kode: `Modal` (`src/components`)
- Spesifikasi visual: [modal.md](../../components/modal.md)

> **Status: dari panduan Seragam** (seragam.belajar.id), disesuaikan ke props komponen di repo ini.

## Props
`open`, `onClose`, `title` (wajib), `size` (`sm` 432 · `md` 660 default · `lg` 888), `footer`, `children`.

## Panduan
- Pakai untuk konten yang menuntut fokus pengguna.
- Selalu sediakan cara menutup (`onClose`).
- Pilih `size` yang sepadan dengan isi.
- Jika isinya rumit, pertimbangkan halaman baru.
- Di mobile, pertimbangkan [Bottom Sheet](bottom-sheet.md) sebagai gantinya.
- Tombol aksi utama di `footer`, dengan varian berbeda dari tombol batal.
