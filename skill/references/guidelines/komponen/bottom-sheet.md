# Bottom Sheet

- Kode: `BottomSheet, BottomSheetItem` (`src/components`)
- Spesifikasi visual: [bottom-sheet.md](../../components/bottom-sheet.md)

> **Status: dari panduan Seragam** (seragam.belajar.id), disesuaikan ke props komponen di repo ini.

## Jenis
| Jenis | Kapan dipakai |
|---|---|
| Default | Informasi tambahan sederhana atau daftar pendek |
| Menu | Daftar pilihan/aksi yang langsung bisa dipilih (`BottomSheetItem`) |
| Dialog | Interaksi lanjutan: formulir singkat atau konfirmasi (`action`) |

Props: `open`, `onClose`, `title`, `action`, `children`. `BottomSheetItem`: `selected`, `disabled`, `onClick`.

## Panduan
- Utamanya untuk mobile. Di tablet/desktop pertimbangkan [Modal](modal.md).
- Mudah ditutup: geser ke bawah atau ketuk di luar area.
- Untuk bentuk Dialog, pengguna menyelesaikan aksi dulu sebelum keluar.
- Konten kompleks: pakai halaman penuh.
