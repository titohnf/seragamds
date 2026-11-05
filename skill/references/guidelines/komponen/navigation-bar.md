# Navigation Bar

- Kode: `NavigationBar` (`src/components`)
- Spesifikasi visual: [navigation-bar.md](../../components/navigation-bar.md)

> **Status: dari panduan Seragam** (seragam.belajar.id), disesuaikan ke props komponen di repo ini.

Menu atas untuk desktop. Props: `items` (`{ key, label, href?, onClick? }`), `active` (key item aktif).

> Di panduan Seragam komponen ini disebut "Navbar" dan punya beberapa variasi (tanpa menu, tanpa aksi, hanya logo). Variasi itu belum ada di kode ini.

## Panduan
- Selalu di atas halaman dan menempel (sticky).
- Logo selalu di kiri dan bisa diklik menuju beranda.
- Bila menu terlalu banyak, kelompokkan ke "Lainnya".
- Layar sempit (< 769px): pakai ikon hamburger.
