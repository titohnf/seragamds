# Catatan keputusan

Setiap keputusan desain/arsitektur dicatat di sini: apa, mengapa, dan dampaknya. Tambahkan di atas (terbaru dulu). Bila membuat turunan (fork) dari design system ini, catat penyimpangan Anda di berkas yang sama.

## 2026-11-05 · Pilot: menu Kepegawaian di `kemendikdasmen` (v0.8.0)
- **Keputusan:** proyek `kemendikdasmen` dimigrasi ke Seragam hanya untuk menu Kepegawaian (kepegawaian, surat-keputusan, pemetaan-jabatan, master-data), di cabang `seragam-kepegawaian`.
- **Temuan di design system:** label `TextField` salah (14/20 semibold; Figma 15/22 regular). Diperbaiki. `readOnly` dibutuhkan formulir tetapi tidak ada di Figma; ditambahkan sebagai ekstensi bertampilan Disabled.
- **Aturan migrasi:** ganti buatan sendiri dengan komponen Seragam; hex literal menjadi token; ukuran font hanya dari skala; kontrol native tanpa padanan Seragam dibiarkan tetapi bertoken.

## 2026-11-05 · Komponen Table ditambahkan (v0.7.0)
- **Keputusan:** membuat `Table` (+ `TableHead`, `TableBody`, `TableRow`, `TableHeaderCell`, `TableCell`) dari spesifikasi Figma `Table`, dan token `table-stripe` (`#FAFAFA`).
- **Mengapa:** dari semua komponen yang ada di panduan tetapi belum ada kodenya, hanya Table yang nyata dibutuhkan: `kemendikdasmen` memakai `<table>` mentah di 12 berkas. Carousel dan Footer tidak dipakai sama sekali; Spinner hanya di 1 berkas, jadi ditunda.
- **Catatan implementasi:** garis 1px di Figma berada di dalam padding, sedangkan di CSS menambah ukuran; padding dikurangi 1px di sisi bergaris sehingga tinggi header 48/40/32 dan sel 54 sama dengan Figma.
- **Belum ada:** varian `vertical-striped`, `rounded`, dan `responsive` dari panduan lama.
- **Berikutnya:** mengganti `<table>` mentah di `kemendikdasmen` dengan `Table` (belum dikerjakan).

## 2026-11-05 · Situs dokumentasi dibangun dari repo ini
- **Keputusan:** `site/` (Vite + React) membaca `docs/**/*.md` langsung dan menampilkannya bersama demo hidup komponen dari `src/`. Rute memakai hash (`#/c/button`) agar bisa dihosting statis di mana saja, tanpa konfigurasi server.
- **Mengapa:** menggantikan `dokumentasiseragam` dan Storybook engineer; dokumen tidak punya salinan kedua yang bisa menyimpang.
- **Dampak:** demo komponen ditulis di `site/demos.tsx`. Komponen baru perlu satu entri di sana (opsional; tanpa demo halaman tetap tampil dengan tab Panduan).
- Deploy: `.github/workflows/deploy-site.yml` (manual; aktifkan GitHub Pages dulu).

## 2026-11-05 · Repo ini adalah satu-satunya sumber kebenaran
- **Keputusan:** `seragam-design-system` menjadi dokumen tunggal untuk token, komponen, spesifikasi, panduan penggunaan, panduan penulisan, dan Skill. Tidak bergantung pada pustaka `@wartek-id/*` (registry GitLab, tidak ada akses) dan tidak memakai `dokumentasiseragam` sebagai sumber.
- **Mengapa:** mandiri dari registry yang tidak bisa diakses; satu tempat untuk semua proyek Kemendikdasmen; mudah di-fork menjadi design system sendiri.
- **Dampak:** panduan dari `dokumentasiseragam` dipindahkan ke `docs/guidelines/` dengan nama dan props disesuaikan ke kode repo ini ([pemetaan](guidelines/pemetaan-nama.md)). Proyek yang masih memakai `@wartek-id` perlu dimigrasi.

## 2026-11-05 · Cakupan: 33 komponen yang sudah ada kodenya
- **Keputusan:** panduan penggunaan hanya untuk komponen yang punya kode di `src/` (`TextField` dan `TextArea` satu halaman). Komponen lain (Carousel, Footer, Loading, dst.) tetap hanya berupa spesifikasi di `docs/components/`.
- **Mengapa:** menjaga dokumen sinkron dengan kode; menambah panduan untuk komponen yang belum ada kodenya hanya membuat dokumen menyimpang.
- **Dampak:** komponen baru ditambahkan bersama panduannya, bukan terpisah.

## 2026-11-05 · Bahasa dokumen: Indonesia
- **Keputusan:** seluruh dokumen dan teks UI dalam Bahasa Indonesia. Nama komponen, props, dan token tetap Inggris (identitas kode).

## 2026-11-05 · Status tiap halaman panduan
- **Keputusan:** halaman panduan komponen ditandai **dari panduan Seragam** (bersumber seragam.belajar.id) atau **draf** (tidak ada panduan resmi; diturunkan dari spesifikasi Figma dan kode).
- **Mengapa:** membedakan aturan resmi dari asumsi, agar draf bisa ditinjau.
- **Draf saat ini:** Switch, Card, Progress Bar, Separator, Slider, Rating, Header Bar, dan halaman Spacing.

## v0.5.0 · Skala tipografi Mobile di semua perangkat
- **Keputusan:** body 15/22, action 15/22, body-small 13/20, heading-medium 18/24 dipakai di desktop juga.
- **Mengapa:** komponen di Figma hanya dibuat versi mobile; memakai skala Desktop membuat komponen dan teks di sekitarnya tidak serasi.

## v0.4.0 · `Button` varian `destructive-secondary`
- **Keputusan:** menambah varian outline merah untuk aksi merusak bernada rendah (Tolak, Hapus). Ekstensi di luar Figma, lihat [extensions.md](extensions.md). Menggantikan `danger-outline`.
- **Mengapa:** produk membutuhkan aksi merusak yang tidak sedominan tombol merah solid.

## v0.3.0 · `Button` mengikuti Figma (breaking)
- **Keputusan:** varian `primary/outline/danger` diganti `ultimate/primary/secondary/quiet/destructive`; ukuran 46/38/28.
- **Dampak:** kode lama yang memakai varian lama harus diganti.

## Sejak awal · Fondasi Figma adalah sumber token
- **Keputusan:** *Seragam Dasar* (fondasi) menjadi sumber kebenaran untuk token. Dokumentasi komponen di Figma masih memakai hex lama (mis. `#0B5FEF`); di `docs/components/` hex lama diberi anotasi `legacy … = blue-70`.
- **Belum dimasukkan:** mode gelap (Mode 2); token spacing (halaman Spacing di Figma kosong).
