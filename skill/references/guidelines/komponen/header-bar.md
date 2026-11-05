# Header Bar

- Kode: `HeaderBar` (`src/components`)
- Spesifikasi visual: [header-bar.md](../../components/header-bar.md)

> **Status: draf.** Belum ada panduan penggunaan resmi dari tim Seragam untuk komponen ini. Isi di bawah diturunkan dari spesifikasi Figma dan kode; tinjau ulang sebelum dijadikan aturan.

Props: `title`, `back`, `actions`, `borderless`, `compact`.

- Judul halaman di bagian atas, tombol kembali di kiri, aksi di kanan.
- `borderless` menghapus bayangan (mis. saat ada tab di bawahnya). `compact` untuk judul kecil.
- Tombol hanya-ikon di `back` dan `actions` wajib punya `aria-label`.
