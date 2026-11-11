# Navigation Bar

- Kode: `NavigationBar` (`src/components`)
- Spesifikasi visual: [navigation-bar.md](../../components/navigation-bar.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/navigation-bar, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Navigasi utama: berpindah halaman, mengenali brand, mengakses aksi kunci (CTA). Di situs disebut "Navbar". Props: `items` (`{ key, label, href?, onClick? }`), `active`, `logo`, `actions`, `collapseBelow` (bawaan 769), `sticky` (bawaan true), `moreLabel` (bawaan "Lainnya"), `aria-label`.

Tanpa `logo` dan `actions` komponen hanya menu (`<nav>`, tanpa overflow/hamburger). Dengan `logo` atau `actions` menjadi **navbar utuh** (tinggi 64, putih, Elevation 03).

## Anatomi (Top Navbar)
**Logo/brand** (`logo`; selalu di kiri, tautan ke halaman utama: bungkus dengan `<a href="/">`) · **Menu utama** (`items`, di tengah/kanan) · **Action items** (`actions`, kanan: tombol/ikon seperti pencarian dan notifikasi).

## Jenis (dibentuk dari kelengkapan props)
| Jenis | Kapan | Props |
|---|---|---|
| Default | Situs kompleks, ringkas | `logo` + `items` + `actions` |
| Without Action Items | Halaman informatif/landing sederhana | tanpa `actions` |
| Without Menu Items | Admin/dashboard; navigasi kompleks dipasangkan dengan [Vertical Navigation](vertical-navigation.md) | `items={[]}`; aksi tetap tampil |
| Logo Only | Jarang di web; terutama aplikasi native dengan bottom navbar | hanya `logo` |

## State
Default, Focused (fokus keyboard), Hovered, Pressed, **Active** (item terpilih: teks `blue-70` + garis bawah 4px). Halaman anak tetap menyalakan menu induknya.

## Perilaku
- **Menempel (sticky) di atas.** Bila ada lapisan lain di atasnya, navbar ikut gulir; begitu mencapai puncak halaman ia tetap terlihat.
- **Garis aktif selebar teks label**, bukan 44px tetap (44px di Figma = lebar label contoh "Menu").
- Tata letak: logo kiri, menu dan akun rata kanan, tinggi 64px.

## Panduan
- Tidak ada aturan baku jumlah menu. Jangan buat menu satu item.
- **Overflow (otomatis)**: item yang membuat jarak antara menu dan logo/aksi < **24px** dipindah ke menu **"Lainnya"** (dropdown; bertanda aktif bila item aktif ada di dalamnya).
- **Logo harus jelas terlihat**; jangan pakai pictorial mark/simbol untuk brand yang belum dikenal luas.
- Logo sebagai tautan beranda cukup untuk pengguna melek digital; untuk audiens umum **tambahkan menu "Beranda"** dan tetap jadikan logo bisa diklik.
- **Layar < 769px (otomatis, `collapseBelow`)**: menu dan aksi dilipat ke **ikon hamburger** (`aria-expanded`, `aria-controls`; `Esc` atau klik di luar menutup; memilih item menutup). Navbar tanpa menu tidak punya hamburger: aksinya tetap tampil.
- Situs tidak memuat panduan aksesibilitas atau penulisan selain penamaan menu.
