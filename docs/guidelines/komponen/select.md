# Select

- Kode: `Select` (`src/components`)
- Spesifikasi visual: [select.md](../../components/select.md)

> **Status: dari panduan Seragam** (seragam.belajar.id), disesuaikan ke props komponen di repo ini.

## Props
`label`, `helper`, `error`, `placeholder`, serta atribut `<select>` biasa. Pilihan diberikan sebagai `<option>`.

## Panduan
- Pakai bila ada 5 opsi atau lebih. Di bawah 5, pertimbangkan [Radio](radio.md).
- Selalu beri `placeholder` yang deskriptif.
- Tampilkan validasi lewat `error`.
- Pilihan kompleks yang butuh antarmuka sendiri: [Bottom Sheet](bottom-sheet.md) atau [Modal](modal.md).
