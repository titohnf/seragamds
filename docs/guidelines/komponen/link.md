# Link

- Kode: `Link` (`src/components`)
- Spesifikasi visual: [link.md](../../components/link.md)

> **Status: dari panduan Seragam** (seragam.belajar.id), disesuaikan ke props komponen di repo ini.

Props: `type` (`primary` | `secondary` | `inverse`), `underline`, `disabled`, dan atribut `<a>`.

| `type` | Kapan dipakai |
|---|---|
| `primary` (default) | Menarik perhatian pada tautan penting |
| `secondary` | Banyak tautan dalam satu blok referensi |
| `inverse` | Tautan di atas latar gelap |

`underline={false}` hanya bila konteksnya sudah sangat jelas; pakai hemat.

## Panduan
- Letakkan tautan di dalam deskripsi atau subjudul, bukan di judul.
- Butuh ajakan yang lebih mencolok: gunakan [Button](button.md).
- Jangan memakai teks tautan yang sama untuk tujuan berbeda dalam satu halaman.

## Penulisan
Kata kerja spesifik yang menjelaskan tujuan. ✅ "Unduh laporan tahunan 2024". ❌ "Klik di sini", "pelajari lebih lanjut".
