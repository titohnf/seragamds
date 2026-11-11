# Navigation Bar

- Kode: `NavigationBar` (`src/components`)
- Spesifikasi visual: [navigation-bar.md](../../components/navigation-bar.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/navigation-bar, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Navigasi utama: berpindah halaman, mengenali brand, mengakses aksi kunci (CTA). Di situs disebut "Navbar". Props: `items` (`{ key, label, href?, onClick? }`), `active`.

## Anatomi (Top Navbar)
**Logo/brand** (selalu di kiri, tautan ke halaman utama) · **Menu utama** (biasanya di tengah) · **Action items** (kanan: tombol/ikon seperti pencarian dan notifikasi). Di kode ini yang ada: menu dengan garis aktif; logo dan akun disusun pemanggil.

## Jenis (situs; **belum ada sebagai prop di kode**)
Default (situs kompleks, ringkas) · Without Action Items (halaman informatif/landing sederhana) · Without Menu Items (admin/dashboard; untuk navigasi kompleks dipasangkan dengan [Vertical Navigation](vertical-navigation.md)) · Logo Only (jarang di web; terutama aplikasi native dengan bottom navbar).

## State
Default, Focused (fokus keyboard), Hovered, Pressed, **Active** (item terpilih: teks `blue-70` + garis bawah 4px). Halaman anak tetap menyalakan menu induknya.

## Perilaku
- **Menempel (sticky) di atas.** Bila ada lapisan lain di atasnya, navbar ikut gulir; begitu mencapai puncak halaman ia tetap terlihat.
- **Garis aktif selebar teks label**, bukan 44px tetap (44px di Figma = lebar label contoh "Menu").
- Tata letak: logo kiri, menu dan akun rata kanan, tinggi 64px.

## Panduan
- Tidak ada aturan baku jumlah menu. Jangan buat menu satu item.
- **Overflow**: bila jarak antara menu dan logo/aksi < **24px**, pindahkan sisa menu ke menu "Lainnya".
- **Logo harus jelas terlihat**; jangan pakai pictorial mark/simbol untuk brand yang belum dikenal luas.
- Logo sebagai tautan beranda cukup untuk pengguna melek digital; untuk audiens umum **tambahkan menu "Beranda"** dan tetap jadikan logo bisa diklik.
- **Layar < 769px**: ikon hamburger untuk melipat menu dan aksi. **Belum ada di kode**: sediakan sendiri sampai komponennya ada (lihat DECISIONS).
- Situs tidak memuat panduan aksesibilitas atau penulisan selain penamaan menu.
