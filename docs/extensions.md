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
