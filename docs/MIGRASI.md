# Panduan migrasi

Catatan perubahan yang bisa memengaruhi proyek pemakai, per versi (masih 0.x, jadi minor boleh mengubah tampilan atau perilaku). Rincian lengkap: [CHANGELOG](../CHANGELOG.md) dan [DECISIONS](DECISIONS.md). Kunci proyek ke tag, bukan `main`.

## Dari 0.18 ke 0.19
- `ProcessSteps` **tanpa `onSelect` kini statis** (elemen `div`, bukan tombol; tanpa hover/fokus). Berikan `onSelect` bila langkah harus bisa diklik. Hover langkah yang dapat diklik: label bergaris bawah dan tepi lingkaran "belum" menguat (tanpa mengubah latar). Baru: `sequential` (langkah berikutnya nonaktif sampai langkah sebelumnya selesai; opt-in) dan `disabled` per langkah.
- `Tooltip`: pemicu (bila satu elemen) otomatis mendapat `aria-describedby`; tooltip tidak lagi dirender dengan kelas `group-hover` (tes yang memeriksa visibilitas lewat CSS hover perlu memicu hover sungguhan). Popup (Popover, Custom Select, Date Picker) kini `position: fixed`: selektor yang mengandalkan posisi `absolute` di dalam pembungkus perlu disesuaikan. Tidak ada perubahan prop.

## Dari 0.15 ke 0.18
- **0.16.0**: angka halaman tidak aktif di `Pagination` dan placeholder `TextField` memakai `gray-60` (sebelumnya `gray-50`), demi kontras AA. `ProgressBar` kini punya nama aksesibel (`aria-label`, atau dari `label`). `Table` yang meluber menjadi `role="region"` dan bisa difokuskan keyboard. **Slider dan Stepper wajib diberi `aria-label`** (atau label terlihat) di kode Anda.
- **0.17.0 dan 0.18.0**: hanya penambahan (`DatePicker`, `Calendar`, `FormField`, `FieldGroup`; paket siap pakai). Tidak ada yang perlu diubah.

## Dari 0.12 ke 0.15
- **0.14.x**: `NavigationBar` tanpa `logo` dan `actions` tetap hanya menu seperti sebelumnya; dengan `logo`/`actions` menjadi navbar utuh dengan overflow "Lainnya" dan hamburger di bawah 769px. `Table` mendapat `stickyHeader`, `stacked`, dan bayangan gulir; `Tabs` memudar di tepi saat meluber dan mendukung `disabled`; `Breadcrumb maxItems="auto"`.
- **0.13.0**: **`ChipGroup` kini `role="group"` dengan tombol `aria-pressed`** (sebelumnya `tablist`/`tab`): perbarui selektor tes yang memakai role lama. `Modal` dan `BottomSheet` mengunci gulir halaman, memindahkan fokus ke dalam dan mengembalikannya; `dismissOnOverlay={false}` untuk aksi kritis. `Banner tone="critical"` memakai `role="alert"`. `Toast` mendukung `tone="success"` dan `duration`.
- **0.12.0**: **skala huruf Desktop untuk semua komponen.** Di layar ≥1024px (mode `auto` bawaan) huruf dan kontrol sedikit lebih besar: body 15→16, bodysmall 13→14, heading-medium 18→19, tinggi kontrol 46→48. Untuk tampilan lama pasang `data-sd-platform="mobile"` di `<html>`; produk khusus desktop pasang `desktop`. Di kode Anda, ganti `fontSize: 15` atau `text-[15px]` dengan `typo.body` atau kelas `sd-t-body` (lihat [tipografi](foundations/tipografi.md)). Berkas `package.json` pada tag v0.12.0 masih berisi `version` 0.11.0; abaikan.

## Dari 0.10 ke 0.11
- `Table`: `bordered` menerima `'rows'`; semua baris punya hover dan isi rata tengah vertikal; `TableRow selected`. `Tabs`: hitungan pada tab aktif berlatar aksi. Tidak merusak.

## Pindah dari "pasang dari git" ke paket siap pakai
1. Ganti dependensi ke tarball Release (lihat README), tambahkan `react` dan `lucide-react` bila belum.
2. Tanpa Tailwind: `import 'seragam-design-system/styles.css'` dan hapus `@source .../src`. Dengan Tailwind: ganti `@source ".../seragam-design-system/src"` menjadi `.../seragam-design-system/lib`.
3. Impor komponen tetap `from 'seragam-design-system'`; tipe ikut terpasang.
