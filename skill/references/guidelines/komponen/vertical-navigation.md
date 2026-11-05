# Vertical Navigation

- Kode: `VerticalNavigation` (`src/components`)
- Spesifikasi visual: [vertical-navigation.md](../../components/vertical-navigation.md)

> **Status: draf.** Berasal dari file Figma *Seragam Web* (belum ada panduan penggunaan resmi). Ikuti sebagai saran dan tandai bila menyimpang.

Menu samping untuk aplikasi web desktop: daftar halaman dengan ikon, bisa punya satu tingkat sub-menu (accordion).

## Props
`items` (`{ key, label, icon?, href?, onClick?, children? }`), `active` (key item atau sub-menu aktif), `tone` (`dark` default · `light`), `expanded` + `onExpandedChange` (terkendali) atau `defaultExpanded`, `aria-label`, `className`.

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
