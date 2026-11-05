# Banner

- Kode: `Banner` (`src/components`)
- Spesifikasi visual: [banner.md](../../components/banner.md)

> **Status: dari panduan Seragam** (seragam.belajar.id), disesuaikan ke props komponen di repo ini.

## Nada
| `tone` | Kapan dipakai |
|---|---|
| `success` | Respons positif atas aksi pengguna |
| `warning` | Peringatan potensi masalah yang butuh tindak lanjut |
| `critical` | Galat serius yang menghalangi; pengguna wajib bertindak |
| `info` (default) | Informasi netral tanpa urgensi tinggi |
| `neutral` | Pengumuman biasa |

Props: `tone`, `title`, `children`, `onClose`.

## Panduan
- Tampilkan di bagian atas halaman atau dekat konten terkait.
- Jangan tampilkan lebih dari satu Banner `critical` sekaligus.
- Beri `onClose` untuk pesan yang tidak kritis.
- Pesan yang butuh keputusan segera atau interupsi: pakai [Modal](modal.md).
