# Ekstensi di luar Figma

Komponen atau varian di bawah ini tidak ada di file Figma Seragam, tetapi ditambahkan karena dibutuhkan produk. Perlakukan sebagai ekstensi dan usulkan ke tim DS.

## Button: `destructive-secondary`
Outline merah untuk aksi destruktif bernada rendah (Tolak, Hapus).
- Default: latar transparan, border 1px dan teks `red-60`.
- Hover: latar `red-5`. Tekan: latar `red-10`.
- Ukuran, padding, tipografi, fokus, dan nonaktif sama dengan Button lainnya.
- Aksi destruktif yang final (konfirmasi hapus) tetap memakai `destructive` (solid).

## TextField dan TextArea: `readOnly`
Figma hanya punya state Disabled. Isian `readOnly` (data yang ditampilkan tetapi tidak boleh diubah, tetap bisa difokuskan dan disalin) memakai tampilan yang sama dengan Disabled: latar `badge-neutral`, border `modal-footer-border`, teks `gray-50`, tanpa cincin fokus biru.

## Table: `bordered="rows"`
Figma mobile hanya punya Border=True (garis di semua sisi sel) dan Border=False (tanpa garis, baris menempel kecuali `striped`). Untuk daftar data dengan tombol aksi, garis vertikal antar kolom terasa kaku, sedangkan Figma Web dan halaman panduan web menampilkan pemisah antar baris saja. `bordered="rows"` memberi garis 1px `modal-footer-border` hanya di atas header, di bawah header, dan di bawah tiap baris, tanpa garis kiri, kanan, atau antar kolom. Padding tetap 16/12/8 (garis di dalam padding). Header dan sel sama dengan `Table` lain. Lihat [table.md](guidelines/komponen/table.md).

## Table: `headerTone="neutral"` dan `hoverable`
`neutral` memberi header abu `#EFEFEF` (token `badge-neutral`). Varian `subtle` (`#F5F5F5`) hampir sama dengan latar halaman `gray-0` (`#F9F9F9`) sehingga header menyatu dengan latar di halaman berlatar abu. `hoverable={false}` mematikan sorotan hover baris untuk tabel yang barisnya tidak bisa diklik (hanya tombol di dalamnya yang interaktif); bawaannya tetap hover aktif. Lihat [table.md](guidelines/komponen/table.md).

## Tabs: hitungan pada tab aktif
Hitungan (`count`) pada tab aktif memakai latar `action-default` dengan teks putih; di Figma semua hitungan abu netral sehingga hitungan pada tab aktif sulit terlihat. Lihat [tabs.md](guidelines/komponen/tabs.md).

## Vertical Navigation: varian `light`
Figma Seragam Web punya varian putih, tetapi lapisan hover dan aktifnya putih 10% (tak terlihat). Kode memakai `gray-5` untuk keduanya dan cincin fokus `blue-50`. Sisanya sesuai Figma. Lihat [vertical-navigation.md](guidelines/komponen/vertical-navigation.md).

## Panel
Kartu berbagian dengan header berjudul (ikon opsional, aksi opsional) dan garis pemisah. Ditemukan 5 salinan berbeda di `kemendikdasmen` (beda warna judul, garis atau bayangan, padding 12/14/16). Standar: radius 8; `elevated` = Elevation 01, `outlined` = border `modal-footer-border`; judul 15/22 semibold `gray-60`; padding header 12×16 dan isi 16. Spesifikasi lengkap di [panel.md](guidelines/komponen/panel.md).

## Description List
Pasangan label di atas nilai dalam 1–3 kolom (berdasarkan lebar wadah). Label 13/20 `gray-60`, nilai 15/22 semibold `gray-90`, jarak 4/16. Ditemukan berulang di halaman data profil, detail usulan, dan formulir hanya-baca. Spesifikasi lengkap di [description-list.md](guidelines/komponen/description-list.md).

## Perilaku dan varian tambahan dari audit panduan
Dari audit seragam.belajar.id (2026-11-11) kode menambah hal yang situs jelaskan tetapi Figma tidak punya sebagai props: `Button inverse` untuk `secondary` dan `quiet` (Figma hanya menggambar teks putih pada Assets/Button); `ChipGroup` pilihan banyak dan `onRemove`; `AccordionGroup` (single/multiple); `Toast duration` dan geser-tutup; `Breadcrumb maxItems`; `Modal`/`BottomSheet dismissOnOverlay`. Lihat panduan masing-masing di `guidelines/komponen/`.

## Platform dan skala huruf Desktop
Figma hanya punya komponen mobile; di desktop hurufnya terasa kecil. Kode memakai satu komponen dengan dua skala huruf, dipilih atribut `data-sd-platform` (`auto` bawaan: Desktop mulai 1024px; `desktop`; `mobile`). Ukuran huruf semua komponen kini berupa variabel `--sd-text-*`; tinggi Button, TextField, Select, SearchBar, Stepper turunan dari tinggi baris. Padanan Mobile ↔ Desktop memakai token Figma yang sudah ada; yang tidak ada di Figma hanyalah mekanisme pemilihannya. Lihat [platform.md](guidelines/komponen/platform.md).

## Page Header
Kepala halaman penuh lebar (breadcrumb, judul, penjelasan, elemen pendamping) dengan nada `blue` (Surface/Dark Blue, default), `dark` (`gray-90`) atau `light`. Varian `compact` untuk pita tipis (breadcrumb + `aside`). Tidak ada di Figma. Lihat [page-header.md](guidelines/komponen/page-header.md).

## Process Steps
Rel proses untuk alur berurutan yang bisa dilompati, horizontal atau `vertical` (sidebar, dengan slot `detail`), dengan varian `inverse` untuk latar gelap. Status: belum = outline abu, berjalan = outline biru, selesai = hijau terisi. `Stepper` Seragam adalah input angka, jadi ini komponen terpisah. Lihat [process-steps.md](guidelines/komponen/process-steps.md).

## Progress Bar: `inverse` dan `tone`
Varian `inverse` untuk latar gelap dan `tone` (`blue`, `green`, `auto`). `auto` biru selama berjalan lalu hijau saat 100%. Lihat [progress-bar.md](guidelines/komponen/progress-bar.md).

## Breadcrumb: `inverse`
Varian untuk latar gelap: tautan `text-inverse-subdued`, halaman aktif putih, pemisah `gray-30`. Figma tidak punya varian ini.

## Navigation Bar: lebar garis aktif
Garis aktif selebar teks label, bukan 44px tetap. 44px di Figma = lebar label contoh "Menu" (68px dikurangi padding 12 kiri-kanan). Perlu dikonfirmasi tim desain.
