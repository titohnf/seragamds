# Changelog

Satu changelog untuk token, komponen, dan dokumentasi. Format: [Semantic Versioning](https://semver.org/lang/id/). Proyek sebaiknya mengunci ke tag, bukan `main`:

```bash
npm i github:titohnf/seragamds#v0.19.0
```

## 0.19.0 · 2026-11-11
- **Popup tahan tepi layar** (`useFixedPopup`): Popover, CustomSelect, DatePicker, menu "Lainnya" Navbar, dan Tooltip membalik sisi bila tak muat, tetap di dalam layar, tidak terpotong wadah `overflow-hidden`, dan mengikuti gulir. `Tooltip` kini memberi `aria-describedby` pada pemicu dan bisa ditutup dengan `Esc`.
- **Perbaikan:** `NavigationBar` dan `Carousel` tidak lagi membaca `matchMedia` saat render (ketidakcocokan hidrasi di Next.js); halaman dengan `Toast` dan `ProcessSteps` horizontal tidak lagi melebar di layar 360px.
- **Perbaikan khusus Safari:** `Esc` menutup `CustomSelect` setelah dibuka dengan mouse; fokus kembali ke pemicu setelah `Modal`/`BottomSheet` ditutup.
- **Pengujian:** Playwright lintas peramban (Chromium, Firefox, WebKit) dan perangkat sentuh (Pixel 7, iPhone 14); tes popup dan seluler; `npm run smoke:hydration` (render server lalu hidrasi).

## 0.18.0 · 2026-11-11
- **Paket siap pakai**: `npm run build:lib` (JS ESM + tipe TypeScript + `style.css` jadi) dan `npm run pack:release` (tarball). Tag `vX.Y.Z` kini memicu workflow **Rilis** yang melampirkan `seragam-design-system-X.Y.Z.tgz` ke GitHub Release. Pemasangan dari git/sumber tidak berubah. Tanpa Tailwind cukup `import 'seragam-design-system/styles.css'`.
- Uji asap paket (`npm run smoke:lib`) di CI dan `verify`. Baru `docs/MIGRASI.md`. Paket bertanda `UNLICENSED` sampai lisensi ditetapkan (PERLU-KEPUTUSAN-DESAIN butir 11).

## 0.17.0 · 2026-11-11
- Baru (ekstensi): `DatePicker` dan `Calendar` (isian tanggal `hh/bb/tttt` yang bisa diketik atau dipilih; minggu mulai Senin; bahasa Indonesia; keyboard grid; `min`/`max`), `FormField` dan `FieldGroup` (label/bantu/galat untuk kontrol mana pun; fieldset+legend untuk Radio/Checkbox). Panduan, demo, tes perilaku dan aksesibilitas ikut.
- Tata kelola: `CONTRIBUTING.md`, templat PR dan issue, `docs/PERLU-KEPUTUSAN-DESAIN.md`.

## 0.16.0 · 2026-11-11
- **Tes otomatis (Playwright)** di `tests/e2e/`: axe WCAG 2.1 A/AA pada demo setiap komponen (Mobile dan Desktop), tes perilaku dengan keyboard dan mouse sungguhan, dan tes skala huruf. Jalan di CI dan di `npm run verify`; `npm run test:e2e` untuk lokal.
- **Audit kontras** di `npm run check` (`tools/contrast.py`) dan larangan teks gray-50/40 di luar keadaan nonaktif. **Sinkron props** kode dan panduan (`tools/props_sync.py`).
- Perbaikan aksesibilitas hasil axe: Pagination angka tidak aktif dan `TextField` placeholder memakai `gray-60` (kontras 4,8:1; Figma memakai `gray-50` 3,9:1); `ProgressBar` bernama (`aria-label`); `CustomSelect` placeholder saat galat lebih gelap; `Table` wilayah gulir bisa difokuskan keyboard (`role="region"`). Panduan: `ProgressBar` `aria-label`, Slider dan Stepper wajib berlabel, dan prop yang sebelumnya belum tertulis (`size`, `disabled`, dan lainnya).

## 0.15.1 · 2026-11-11
- Baru: `guidelines/keputusan-ux.md` (peta komponen per kebutuhan, lima keadaan, umpan balik, formulir, gerak, tipografi halaman, cara memeriksa hasil, serta catatan adopsi skill `frontend-design`). `penulisan.md`: kosakata sama sepanjang alur, galat tidak meminta maaf, tanpa tanda template. Skill `seragam`: aturan 14 (rencanakan, bangun, kritik hasil di browser).

## 0.15.0 · 2026-11-11
- `VerticalNavigation`: prop `additional` (Main Menu + Additional: menu tambahan di dasar, mis. Pengaturan dan Bantuan) dan lebar responsif (penuh di bawah 800px, minimum 300px mulai 800px). Panduan Vertical Navigation naik dari draf ke "dari panduan Seragam" setelah isi halaman Sidebar Menu dipulihkan dari data situs.

## 0.14.1 · 2026-11-11
- `Tabs`: tombol panah gulir di tepi yang meluber. `Table stacked`: label sel otomatis dari header kolom.
- Perbaikan: bayangan `NavigationBar` utuh = Elevation 01 sesuai Figma Navbar Desktop (sebelumnya 03). Panduan Navigation Bar memuat spesifikasi Figma Desktop dan Mobile.

## 0.14.0 · 2026-11-11
- Melengkapi komponen yang audit 0.13.0 catat "belum ada di kode": `NavigationBar` navbar utuh (`logo`, `actions`, `sticky`; varian tanpa aksi/tanpa menu/hanya logo; overflow ke "Lainnya"; hamburger < 769px); baru `CustomSelect` (Custom Select dan Custom List Menu); `Accordion variant="custom"`; `Tabs` indikator overflow dan `disabled` per tab; `Table` `stickyHeader`/`maxHeight`/`stacked` dan bayangan gulir; `Breadcrumb maxItems="auto"`; `SearchBar` `error`/`helper`; `TextArea` `autoGrow`/`maxRows`.
- Kompatibel: `NavigationBar` tanpa `logo`/`actions` tetap hanya menu. Panduan terkait diperbarui; demo galeri ditambah.

## 0.13.0 · 2026-11-11
- **Audit panduan komponen terhadap seragam.belajar.id**: 25 halaman panduan komponen ditulis ulang dengan isi lengkap situs (jenis, state, perilaku, responsif, penulisan, angka batas) dan status kode apa adanya. Rincian dan ketidakkonsistenan situs: DECISIONS 2026-11-11.
- Baru: `Button` `floating`/`iconOnly`/`inverse`; `Banner` `entry`/`action`/`link`/`fixed`; `Toast` `tone`/`duration`/`onClose`; `Popover` `side`; `ChipGroup` `size`/ikon/`onRemove`/pilihan banyak; `AccordionGroup`; `Breadcrumb` `maxItems`; `Modal`/`BottomSheet` `dismissOnOverlay`.
- Perilaku: Modal dan BottomSheet mengelola fokus (masuk, terkurung, kembali) dan mengunci gulir; BottomSheet bisa ditutup dengan geser; Popover satu sekali waktu dengan keyboard panah; Tabs mendukung ←/→/Home/End; `Banner critical` memakai `role="alert"`; Accordion `aria-controls`.
- **Perubahan yang perlu diperhatikan:** `ChipGroup` kini `role="group"` dengan tombol `aria-pressed` (sebelumnya `tablist`/`tab`).
- Galeri situs: demo untuk fitur baru.
- Perbaikan: `package.json` kini 0.13.0 (rilis v0.12.0 tidak sengaja masih membawa `version` 0.11.0 karena bump hilang saat merge).

## 0.12.0 · 2026-11-11
- **Skala huruf Desktop untuk semua komponen (satu komponen, dua skala).** Ukuran huruf komponen mengikuti platform lewat `data-sd-platform` (`auto` bawaan: Desktop mulai 1024px, `desktop`, `mobile`). Baru: variabel `--sd-text-*` dan kelas `.sd-t-<nama>` (dihasilkan `tools/build_responsive_type.py`), objek `typo`/`type` di `src/tokens.ts` berbasis variabel, komponen `Platform`. Semua komponen dimigrasi; tinggi Button, TextField, Select, SearchBar, Stepper kini turunan tinggi baris (46→48 di Desktop). `check.py` menolak ukuran huruf literal. **Perubahan tampilan di layar ≥1024px**; pasang `data-sd-platform="mobile"` untuk tampilan lama. Lihat DECISIONS 2026-11-11.
- Baru (ekstensi, dari aplikasi SPMI): `PageHeader` dan `ProcessSteps` (rel proses horizontal/vertikal); `ProgressBar` `inverse` dan `tone`; `Breadcrumb` `inverse`; `Tooltip` `inline`; `NavigationBar` garis aktif selebar label. Sebelumnya hanya ada di `skill/references`; kini di `src/` dan `docs/` sehingga `build:skill` aman dijalankan.
- Sinkron dengan seragam.belajar.id (dipelajari 2026-11-11). Baru: komponen `Carousel`, `Footer`, `Spinner`, dan `Skeleton` (Loading: shimmer) beserta panduan penggunaannya (30 komponen di situs; kini hanya Status Bar yang belum ada kodenya). Panduan `HeaderBar` dan `ProgressBar` naik dari draf ke "dari panduan Seragam".
- Fondasi: `spacing.md` memakai skala resmi `space-4`…`space-48`; baru `container.md` dan `token.md`.
- Skill kedua `skill-illustration/` (`seragam-illustration`): membuat ilustrasi SVG sesuai panduan, dengan katalog Galeri, palet terkunci, 6 contoh SVG, validator, dan pratinjau. `install:skill` menautkannya ke `~/.claude/skills/seragam-illustration`. Baru `foundations/palet-ilustrasi.md` (24 ramp, nilai disampel dari gambar resmi).
- Panduan baru: `prinsip-desain.md` (5 prinsip), `ilustrasi.md` (prinsip, tipe, peran, palet, cara menggambar). `penulisan.md` diperluas: sosok (Rekan, Tenaga operasional, Atasan), penulisan Loading, kejelasan, dan teks alternatif.

## 0.11.0 · 2026-11-10
- Baru (ekstensi di luar Figma): `Table` menerima `bordered="rows"`, hanya garis horizontal antar baris tanpa garis vertikal antar kolom. `bordered` kini bertipe `true | 'rows' | false` (bawaan `true`, tidak berubah). Tipe `TableBorder` diekspor. `TableRow` menerima `selected`. Semua baris punya status hover dan isi rata tengah vertikal. Lihat `docs/extensions.md`.
- Baru (ekstensi): `Table headerTone="neutral"` (`#EFEFEF`) dan `Table hoverable` (matikan hover baris). `Tabs`: hitungan pada tab aktif berlatar `action-default`. Keputusan dari penerapan di prototipe platform-spmp dicatat di `DECISIONS.md` (termasuk skala huruf Desktop untuk produk web desktop).
- Panduan `table.md`: aturan en dash untuk nilai kosong, maksimal 2 baris per sel di desktop, kotak centang untuk baris terpilih, larangan `striped` pada tabel interaktif.

## 0.10.1 · 2026-11-10
- `Select`: panah dropdown kini berupa segitiga isi (`arrow_drop_down`, 24px, `gray-70`) sesuai Figma Rapor Pendidikan, bukan chevron garis. Chevron garis tetap dipakai `Accordion` dan `Expander` (penanda buka/tutup).

## 0.10.0 · 2026-11-05
- Baru: `VerticalNavigation` (menu samping dari Figma Seragam Web): varian `dark`/`light`, induk accordion (terkendali atau tak terkendali), sub-menu, state hover/aktif/fokus, `aria-expanded` dan `aria-current`.
- Token baru: `surface-dark-blue` (`#103178`).
- Catatan: varian `light` memakai `gray-5` untuk hover/aktif (di Figma tak terlihat); lihat DECISIONS.

## 0.9.0 · 2026-11-05
- Baru (ekstensi di luar Figma): `Panel` (kartu berbagian dengan header berjudul, ikon, aksi; varian `elevated`/`outlined`) dan `DescriptionList` (pasangan label di atas nilai, 1–3 kolom mengikuti lebar wadah, memakai `dl/dt/dd`). Menyatukan 5 salinan `Panel`/`Card` dan pola label–nilai yang berbeda-beda di `kemendikdasmen`.
- `tools/check.py` mengenali status halaman panduan "ekstensi" (wajib punya bagian Spesifikasi dan tautan ke `extensions.md`).
- Skill: aturan 12 (kartu berbagian dan data berpasangan).

## 0.8.1 · 2026-11-05
- Perbaikan aksesibilitas: `TextField`, `TextArea`, dan `Select` yang diberi `label` kini berakar `<label>`, sehingga label terhubung ke isiannya (klik label memfokuskan isian; pembaca layar membacakan label). Sebelumnya label berupa `<span>` yang tidak terhubung. Tanpa `label`, akar tetap `<div>`; API tidak berubah.

## 0.8.0 · 2026-11-05
- Perbaikan: label `TextField`/`TextArea` kini 15/22 regular sesuai Figma (sebelumnya 14/20 semibold; `Select` sudah benar).
- Baru (ekstensi di luar Figma): `TextField`/`TextArea` mendukung `readOnly` dengan tampilan seperti Disabled. Lihat `docs/extensions.md`.

## 0.7.0 · 2026-11-05
- Baru: komponen `Table` (`Table`, `TableHead`, `TableBody`, `TableRow`, `TableHeaderCell`, `TableCell`): ukuran `lg/md/sm`, `striped`, `bordered`, `headerTone`, `caption`. Sesuai spesifikasi Figma (header 48/40/32, sel 15/22).
- Baru: token `table-stripe` (`#FAFAFA`).
- Baru: halaman panduan `table`, demo di situs, dan bagian Table di Galeri.
- Workflow GitHub: aksi dinaikkan (checkout/setup-node v7, pages v5) dan runner dikunci `ubuntu-24.04`.

## 0.6.0 · 2026-11-05
Dokumentasi menjadi satu sumber kebenaran. **Tidak ada perubahan yang memutus kode komponen.**
- Baru: `docs/foundations/` (warna, tipografi, elevasi dan radius, spacing), `docs/guidelines/` (panduan penggunaan 32 halaman komponen, panduan penulisan dan inklusivitas, pemetaan nama termasuk padanan `@wartek-id`), `docs/DECISIONS.md`, `docs/README.md`.
- Baru: situs dokumentasi `site/` dengan demo hidup (`npm run dev`).
- Baru: `tools/check.py` (konsistensi token, kode, panduan, skill), `tools/build_foundations.py`, GitHub Action pemeriksaan, dan workflow deploy situs (manual).
- Skill `seragam` ikut memuat fondasi dan panduan; ditambah aturan 9–11 (panduan penggunaan, penulisan teks, nama komponen).
- Dev dependency baru: vite, marked, typescript, dan lainnya (hanya untuk situs; tidak memengaruhi paket yang dipasang proyek lain).

## 0.5.0
- Skala tipografi Mobile dipakai di semua perangkat (body 15/22, action 15/22, body-small 13/20, heading-medium 18/24).

## 0.4.0
- Button: varian `destructive-secondary` (outline merah, ekstensi di luar Figma); menggantikan `danger-outline`.

## 0.3.0 · breaking
- Button mengikuti Figma. Varian `primary/outline/danger` diganti `ultimate/primary/secondary/quiet/destructive`. Ukuran 46/38/28, state, `loading`, ikon, `fullWidth`.

## 0.2.0 dan sebelumnya
- Token dari Figma (*Seragam Dasar*), spesifikasi 48 halaman komponen, 33 komponen React, Skill Claude, dan paket yang bisa dipasang lewat git.
