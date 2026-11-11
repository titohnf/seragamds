# Link

- Kode: `Link` (`src/components`)
- Spesifikasi visual: [link.md](../../components/link.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/link, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Menavigasi pengguna ke lokasi lain, di dalam paragraf atau mandiri. Props: `type` (`primary` | `secondary` | `inverse`), `underline`, `disabled`, atribut `<a>`.

| `type` | Kapan dipakai |
|---|---|
| `primary` (bawaan) | Menarik perhatian pada Link, terutama bila biru kurang mencolok dalam pengalaman pengguna |
| `secondary` | Bila Primary terlalu mencolok, mis. blok teks dengan banyak tautan referensi |
| `inverse` | Di atas latar gelap |

**Without underline** (`underline={false}`): semua tipe bisa tanpa garis bawah, hanya bila penempatan dan konteks sudah sangat jelas. **Kurang baik untuk akses dan visibilitas**; hindari bila Link berperan penting.

State: Default, Hovered, Focused, Pressed, Disabled. Platform Mobile dan Desktop mengikuti skala huruf yang sama ([tipografi](../../foundations/tipografi.md)).

## Panduan
- **Letakkan di dalam isi teks atau deskripsi/subjudul, bukan di judul.**
- Butuh ajakan lebih menonjol: pakai [Button](button.md).
- Jangan memakai Link yang sama untuk informasi berbeda dalam satu tampilan. Hindari teks Link duplikat yang berulang; pertimbangkan komponen lain.
- Sebaiknya jangan menggabungkan banyak tautan dalam satu kalimat (memecah fokus), meski boleh bila kontekstual dan relevan.

## Penulisan
**Kata kerja spesifik** yang menyebut tujuan: pengguna bisa menavigasi hanya dengan membaca teks Link. ✅ "Unduh laporan tahunan 2024". ❌ "Klik di sini", "pelajari lebih lanjut".
