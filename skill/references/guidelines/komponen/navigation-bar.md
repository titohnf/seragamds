# Navigation Bar

- Kode: `NavigationBar` (`src/components`)
- Spesifikasi visual: [navigation-bar.md](../../components/navigation-bar.md)

> **Status: dari panduan Seragam** (seragam.belajar.id), disesuaikan ke props komponen di repo ini.

Menu atas untuk desktop. Props: `items` (`{ key, label, href?, onClick? }`), `active` (key item aktif).

> Di panduan Seragam komponen ini disebut "Navbar" dan punya beberapa variasi (tanpa menu, tanpa aksi, hanya logo). Variasi itu belum ada di kode ini.

## Garis aktif
Garis bawah item aktif selebar teks label (padding 12 di kiri dan kanan dikurangi). Di Figma nilainya 44px karena label contoh "Menu" selebar 44px; jangan pakai 44px tetap untuk label lain.
- Halaman anak (mis. tahap di bawah "Beranda") tetap menyalakan menu induknya.
- Tata letak: logo kiri (bisa diklik ke beranda), menu dan akun rata kanan, tinggi 64px, menempel di atas.

## Panduan
- Jangan buat menu dengan satu item. Bila aplikasi hanya punya satu halaman utama, navbar cukup logo (menuju beranda) dan akun; halaman lain dijangkau dari isi halaman.
- Selalu di atas halaman dan menempel (sticky).
- Logo selalu di kiri dan bisa diklik menuju beranda.
- Bila menu terlalu banyak, kelompokkan ke "Lainnya".
- Layar sempit (< 769px): pakai ikon hamburger.
