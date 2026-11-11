# Header Bar

- Kode: `HeaderBar` (`src/components`)
- Spesifikasi visual: [header-bar.md](../../components/header-bar.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/header), disesuaikan ke props komponen di repo ini. Halaman sumber hanya memuat deskripsi, jenis, dan state; tidak ada spesifikasi, perilaku, atau aksesibilitas, jadi bagian itu berasal dari Figma dan kode.

Props: `title`, `back`, `actions`, `borderless`, `compact`.

- Judul halaman di bagian atas, tombol kembali di kiri, aksi di kanan.
- `borderless` menghapus bayangan (mis. saat ada tab di bawahnya). `compact` untuk judul kecil.
- Tombol hanya-ikon di `back` dan `actions` wajib punya `aria-label`.

## Jenis dan state (panduan Seragam)
Header Bar adalah komponen di bagian atas layar untuk navigasi utama atau informasi penting: judul halaman, ikon navigasi, dan aksi utama (pencarian, menu).

| Jenis | Kapan | Pengaturan |
|---|---|---|
| Small | Ruang terbatas atau tampilan minimalis | `compact` |
| Large | Butuh informasi tambahan atau kesan visual lebih menonjol | bawaan |
| Transparent | Ringkas di atas konten/gambar | belum ada di kode; pakai `borderless` dan latar transparan lewat `className` bila perlu |

State aksi: *Default* (hanya judul dan navigasi), *Text action* (menu teks singkat), *1 ikon*, *2 ikon*, *>2 ikon*. Pada lebih dari dua ikon, jaga jarak dan hierarki visual; pindahkan sisanya ke menu ⋮.
