# Changelog

Satu changelog untuk token, komponen, dan dokumentasi. Format: [Semantic Versioning](https://semver.org/lang/id/). Proyek sebaiknya mengunci ke tag, bukan `main`:

```bash
npm i github:titohnf/seragamds#v0.12.0
```

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
