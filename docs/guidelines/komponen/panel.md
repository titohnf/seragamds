# Panel

- Kode: `Panel` (`src/components`)
- Spesifikasi visual: ada di halaman ini (ekstensi, tidak ada di Figma)

> **Status: ekstensi.** Komponen di luar Figma Seragam, dibuat karena polanya ditemukan berulang di proyek (5 salinan berbeda di `kemendikdasmen`). Lihat [extensions.md](../../extensions.md). Usulkan ke tim desain Seragam.

Kartu berbagian: header berjudul dengan garis pemisah, lalu isi. Dipakai untuk mengelompokkan konten satu topik, misalnya "Data Diri", "Unit Organisasi", atau "Data Portal". Untuk kartu bergambar dengan tombol, pakai [Card](card.md).

## Spesifikasi
| Bagian | Nilai |
|---|---|
| Bentuk | radius 8, latar putih |
| Varian `elevated` (default) | bayangan Elevation 01 (`shadow-sd-01`, "panels, cards subtle") |
| Varian `outlined` | border 1px `modal-footer-border` (`#D9DBDD`), tanpa bayangan |
| Header | padding 12×16, garis bawah 1px `modal-footer-border` |
| Judul | 15/22 semibold `gray-60` (elemen `h3`; ubah dengan `as`) |
| Subjudul (opsional) | 13/20 regular `gray-60` |
| Ikon (opsional) | 16px, `gray-60`, di kiri judul |
| Aksi (opsional) | di kanan header (tombol, tautan, atau teks) |
| `subtleHeader` | latar header `gray-0` |
| Isi | padding 16; `padded={false}` untuk tabel atau daftar tepi ke tepi |

## Props
`title` (wajib), `subtitle`, `icon`, `action`, `variant` (`elevated` · `outlined`), `subtleHeader`, `padded`, `as`, `className`.

## Kapan memakai apa
| Kebutuhan | Pengaturan |
|---|---|
| Kartu di halaman biasa | `elevated` |
| Panel di dalam modal, atau panel bersarang | `outlined` (+ `subtleHeader` bila perlu pembeda) |
| Tabel di dalam panel | `padded={false}` |
| Tombol "Tambah" atau "Lihat semua" di header | isi `action` dengan [Button](button.md) `size="sm"` |

## Panduan
- Satu panel = satu topik. Judul singkat, 1–3 kata, sentence case atau Title Case sesuai konteks halaman.
- Isi data berpasangan (label–nilai) dengan [Daftar Deskripsi](description-list.md).
- Jangan menumpuk panel `elevated` di dalam panel `elevated`; pakai `outlined` untuk yang di dalam.
- Panel punya `aria-labelledby` ke judulnya, jadi pembaca layar mengumumkannya sebagai wilayah bernama.

## Do & Don't
- ✅ Satu gaya panel di seluruh produk.
- ❌ Menulis `<section>` dengan border, padding, dan judul sendiri. Pakai `Panel`.
- ❌ Judul bergaya lain (mis. `gray-90` di satu halaman dan `gray-60` di halaman lain).
