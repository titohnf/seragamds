# Bottom Sheet

- Kode: `BottomSheet, BottomSheetItem` (`src/components`)
- Spesifikasi visual: [bottom-sheet.md](../../components/bottom-sheet.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/bottom-sheets, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Panel yang muncul dari bawah layar untuk informasi tambahan atau pilihan tanpa berpindah halaman. Props: `open`, `onClose`, `title`, `action`, `children`, `dismissOnOverlay`. `BottomSheetItem`: `selected`, `disabled`, `onClick`.

## Jenis dan anatomi
| Jenis | Isi | Kapan dipakai |
|---|---|---|
| Default | judul (opsional), konten (ringkasan, detail singkat, daftar), tombol (opsional) | Informasi tambahan sederhana atau daftar pendek |
| Menu | judul (opsional), daftar item (`BottomSheetItem`, satu aksi per baris), ikon (opsional) | Pilihan atau aksi yang langsung dipilih |
| Dialog | judul (**wajib**), deskripsi (opsional), konten (formulir singkat/konfirmasi), aksi utama, aksi sekunder (opsional) | Interaksi lanjutan; `action` |

## Perilaku
- Muncul hanya saat dipicu aksi pengguna.
- **Mudah ditutup**: geser pegangan ke bawah, ketuk area luar, atau `Esc`. Default/Menu bisa ditutup kapan saja. **Dialog** menuntut aksi selesai: set `dismissOnOverlay={false}`.
- Tinggi menyesuaikan isi: setengah layar, hampir penuh, atau penuh (komponen: maksimal 90% lalu isi menggulir).
- Fokus pindah ke dalam sheet dan kembali ke pemicu saat ditutup; gulir halaman terkunci; `aria-modal` dan `aria-labelledby` ke judul.

## Panduan
- Kemunculannya harus sesuai konteks alur, bukan gangguan; membantu menyelesaikan tugas tanpa memutus alur utama.
- Cocok untuk kebutuhan cepat. **Isi kompleks: pakai layar penuh.**
- **Responsif**: mobile = bottom sheet. Tablet/desktop boleh tetap bottom sheet bila sesuai, atau ganti ke [Modal](modal.md) di tengah layar agar lebih nyaman dibaca.

## Penulisan
- Judul: singkat, jelas, langsung ke inti; **sentence case**, tanpa titik di akhir.
- Menu: label opsi **2–3 kata**; tiap item sudah berfungsi sebagai aksi.
- Dialog: kalimat lengkap untuk instruksi/konfirmasi; tombol berkata kerja jelas ("Simpan", "Hapus", "Kirim").
- Default: tombol opsional sesuai kebutuhan.
