# Catatan keputusan

Setiap keputusan desain/arsitektur dicatat di sini: apa, mengapa, dan dampaknya. Tambahkan di atas (terbaru dulu). Bila membuat turunan (fork) dari design system ini, catat penyimpangan Anda di berkas yang sama.

## 2026-11-10 · Table: pemisah antar baris, hover, dan baris terpilih (v0.11.0)
- **Keputusan:** `Table.bordered` menjadi `true | 'rows' | false` (`true` tetap bawaan). `'rows'` memberi hanya garis horizontal antar baris. Semua baris mendapat status hover, isi rata tengah vertikal, dan `TableRow` punya prop `selected`. Panduan menambah aturan en dash, maksimal 2 baris per sel, kotak centang untuk baris terpilih, dan larangan `striped` pada tabel interaktif.
- **Mengapa:** ditemukan saat membangun tabel pemilihan indikator di prototipe platform-spmp. Figma Seragam Web (node `505:24585`) dan halaman Table di seragam.belajar.id memakai pemisah antar baris, sedangkan Figma mobile (dasar kode) memakai kotak penuh atau tanpa garis.
- **Tidak diadopsi:** dari Figma Web, header abu `#D9DBDD`, judul kolom Title Case, dan teks 14/20. Tim memutuskan standar tetap token Seragam dan skala mobile (header `subtle`/putih 13/16 kapital, sel 15/22); file Figma Web diperkirakan belum diperbarui. Perlu dikonfirmasi tim desain Seragam.
- **Dampak:** tidak merusak. `true` dan `false` berperilaku seperti sebelumnya; hover dan perataan tengah vertikal menambah perilaku baru pada semua tabel.

## 2026-11-05 · Vertical Navigation ditambahkan (v0.10.0)
- **Keputusan:** membuat `VerticalNavigation` dari file Figma *Seragam Web* (node `10:2`): menu samping 300px, dua varian (`dark` Surface/Dark Blue, `light` putih), item induk dengan accordion, sub-menu, dan state Default/Hover/Active/Focused. Menjawab selisih "sidebar Kepegawaian tidak punya padanan Seragam" dari pilot.
- **Token baru:** `surface-dark-blue` (`#103178`, "Expressive/Surface/Dark Blue" di Figma), ditambahkan seperti `table-stripe` (kelompok fixed).
- **Selisih yang diputuskan:** di Figma varian putih memakai lapisan hover/aktif putih 10% (tak terlihat di latar putih). Kode memakai `gray-5` (sama dengan Navigation Bar) di varian `light`, dan cincin fokus `blue-50` alih-alih putih. Perlu dikonfirmasi tim desain.
- **Tidak diambil dari Figma:** ikon. Figma memakai ikon Material; kode menerima ikon lucide lewat `icon` (24px), chevron memakai lucide `ChevronDown/ChevronUp`.
- **Belum ada:** versi responsif (menu ciut/drawer) dan sub-menu lebih dari satu tingkat.

## 2026-11-05 · Standar Panel dan DescriptionList (v0.9.0)
- **Keputusan:** menetapkan dua komponen ekstensi karena polanya ditemukan berulang: `Panel` (5 salinan berbeda di `kemendikdasmen`: judul `gray-60` vs `gray-90`, garis vs bayangan, padding 12/14/16) dan `DescriptionList` (label di atas nilai, diulang di data profil, detail usulan, dan formulir hanya-baca).
- **Standar yang dipilih:** judul `gray-60` 15/22 semibold (mayoritas pemakaian); bayangan Elevation 01 sebagai default dan border sebagai `outlined`; semua jarak kelipatan 4 (sebelumnya 2 dan 14).
- **Tidak ada di Figma:** perlu diusulkan ke tim desain Seragam. Sampai ada keputusan, spesifikasinya ada di halaman panduan masing-masing dan di `extensions.md`.
- **Aturan umum:** pola yang ditemukan berulang di dua tempat atau lebih menjadi komponen ekstensi di repo ini, bukan disalin per proyek.

## 2026-11-05 · Pilot: menu Kepegawaian di `kemendikdasmen` (v0.8.0)
- **Keputusan:** proyek `kemendikdasmen` dimigrasi ke Seragam hanya untuk menu Kepegawaian (kepegawaian, surat-keputusan, pemetaan-jabatan, master-data), di cabang `seragam-kepegawaian`.
- **Temuan di design system:** label `TextField` salah (14/20 semibold; Figma 15/22 regular). Diperbaiki. `readOnly` dibutuhkan formulir tetapi tidak ada di Figma; ditambahkan sebagai ekstensi bertampilan Disabled.
- **Konvensi tombol:** aksi utama satu-satunya di sebuah tampilan memakai `ultimate` (biru); `primary` (hitam) hanya untuk mendampingi Ultimate. 5 tombol `primary` di menu Kepegawaian (Tambah, Cari, Simpan) diganti `ultimate`.
- **Aturan migrasi:** ganti buatan sendiri dengan komponen Seragam; hex literal menjadi token; ukuran font hanya dari skala; kontrol native tanpa padanan Seragam dibiarkan tetapi bertoken.
- **Hasil (13 berkas, cabang `seragam-kepegawaian`):** hex literal 53 → 0; `<table>` mentah 1 → 0 (`Table`); `<input>`/`<textarea>` mentah 9 → 5; `<select>` mentah 4 → 3; modal kustom 4 → 2 (`Modal`); `<button>` mentah 61 → 40 (sisanya memakai `buttonClass`, API resmi Seragam, atau tombol ikon). Semua 23 rute Kepegawaian dan 5 rute Pengaturan (memakai tabel yang sama) dimuat tanpa galat konsol.
- **Selisih yang sengaja dibiarkan (butuh keputusan desain):**
  1. Modal *Detail Usulan* dan *Sinkronisasi SIASN* lebar 1040px dengan dua panel; Figma membatasi Modal sampai Large 888px. Hanya radius, overlay, bayangan, dan tombol tutup yang diselaraskan.
  2. Tombol hanya-ikon (ubah, lihat, aksi, hapus filter) tidak punya komponen Seragam (`IconButton`).
  3. Sidebar menu Kepegawaian (navigasi vertikal) dan tooltip grafik tidak punya padanan Seragam.
  4. Pagination statis (`pageCount=1`) karena data contoh; belum ada pagination sungguhan.

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
