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

## Vertical Navigation: varian `light`
Figma Seragam Web punya varian putih, tetapi lapisan hover dan aktifnya putih 10% (tak terlihat). Kode memakai `gray-5` untuk keduanya dan cincin fokus `blue-50`. Sisanya sesuai Figma. Lihat [vertical-navigation.md](guidelines/komponen/vertical-navigation.md).

## Panel
Kartu berbagian dengan header berjudul (ikon opsional, aksi opsional) dan garis pemisah. Ditemukan 5 salinan berbeda di `kemendikdasmen` (beda warna judul, garis atau bayangan, padding 12/14/16). Standar: radius 8; `elevated` = Elevation 01, `outlined` = border `modal-footer-border`; judul 15/22 semibold `gray-60`; padding header 12×16 dan isi 16. Spesifikasi lengkap di [panel.md](guidelines/komponen/panel.md).

## Description List
Pasangan label di atas nilai dalam 1–3 kolom (berdasarkan lebar wadah). Label 13/20 `gray-60`, nilai 15/22 semibold `gray-90`, jarak 4/16. Ditemukan berulang di halaman data profil, detail usulan, dan formulir hanya-baca. Spesifikasi lengkap di [description-list.md](guidelines/komponen/description-list.md).
