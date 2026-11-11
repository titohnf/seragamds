# Vertical Navigation

- Kode: `VerticalNavigation` (`src/components`)
- Spesifikasi visual: [vertical-navigation.md](../../components/vertical-navigation.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/sidebar-menu, diaudit 2026-11-11), disesuaikan ke props komponen di repo ini; spesifikasi visual dari file Figma *Seragam Web*. Halaman situs itu sendiri gagal dirender (galat MDX: teks `<800px` terbaca sebagai tag), tetapi isi dokumennya bisa dibaca dari data halaman dan sudah dirangkum di sini. Halaman hanya memuat deskripsi, jenis, responsif, dan penulisan; anatomi berupa gambar.

Menu samping untuk aplikasi web desktop: daftar halaman dengan ikon, bisa punya satu tingkat sub-menu (accordion).

## Jenis (panduan situs)
| Jenis | Isi | Props |
|---|---|---|
| **Main Menu** | Menu yang disusun dari atas ke bawah | `items` |
| **Main Menu + Additional** | Main Menu ditambah beberapa menu tambahan di bagian bawah | `items` + `additional` |

Menu tambahan (`additional`) dipisah garis dan menempel di dasar menu (tinggi mengikuti wadah). Pakai untuk menu yang lebih generik, seperti **Pengaturan** dan **Bantuan**.

## Responsif (panduan situs)
- **< 800px**: lebar mengikuti lebar layar maksimal (penuh).
- **≥ 800px**: lebar **minimum 300px** (komponen: 300px).

## Penulisan (panduan situs)
- **Satu menu maksimal 25 karakter.**
- **Kelompokkan menu yang berkaitan dalam satu parent** (accordion).
- Pakai Additional Menu untuk menu yang sifatnya generik (Pengaturan, Bantuan).

## Props
`items` (`{ key, label, icon?, href?, onClick?, children? }`), `additional` (bentuk sama dengan `items`), `active` (key item atau sub-menu aktif), `tone` (`dark` default · `light`), `expanded` + `onExpandedChange` (terkendali) atau `defaultExpanded`, `aria-label`, `className`.

## Perilaku
- Item dengan `children` adalah pembuka accordion (`aria-expanded`); klik membuka atau menutup sub-menu, tidak berpindah halaman. Sub-menu yang berisi halaman aktif terbuka otomatis saat pertama tampil.
- Halaman aktif ditandai label tebal + lapisan putih 10% dan `aria-current="page"`. Hanya satu item aktif.
- Item dengan `href` dirender `<a>`; tanpa `href` dirender `<button>`.
- Fokus keyboard: border 2px (putih di `dark`, `blue-50` di `light`).

## Panduan
- Ikon wajib di tingkat atas (24px, dari lucide); sub-menu tanpa ikon.
- Maksimal dua tingkat. Jangan bersarang lebih dalam.
- Label singkat, 1–3 kata, tanpa titik. Jangan dipotong; beri ruang, lebar menu 300px.
- Menu ini untuk navigasi antarhalaman. Untuk menu atas pakai [Navigation Bar](navigation-bar.md); untuk beralih konten dalam satu halaman pakai [Tabs](tabs.md).
- Letakkan di kiri halaman, setinggi layar dan menempel (sticky).

## Do & Don't
- ✅ Satu item aktif, induknya terbuka.
- ❌ Menulis sidebar sendiri dengan hex `#103178`; pakai `VerticalNavigation` atau token `surface-dark-blue`.
- ❌ Menyembunyikan halaman aktif di dalam accordion yang tertutup.

## Selisih dengan Figma
Varian `light` memakai lapisan `gray-5` untuk hover/aktif karena lapisan putih 10% di Figma tak terlihat di latar putih (lihat [DECISIONS](../../DECISIONS.md)).
