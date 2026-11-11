# Progress Bar

- Kode: `ProgressBar` (`src/components`)
- Spesifikasi visual: [loading.md](../../components/loading.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/loading, bagian Progress Bar), disesuaikan ke props komponen di repo ini. Prop `inverse` dan `tone` adalah ekstensi. Panduan Loading selengkapnya (Spinner, Skeleton, penulisan) ada di [loading](loading.md).

Props: `value` (0–100), `label`, `aria-label` (nama untuk pembaca layar; bawaan dari `label` bila teks, jika tidak "Kemajuan"), `labelPosition` (`left` | `right`), `inverse` (ekstensi, latar gelap), `tone` (ekstensi: `blue` bawaan, `green`, `auto`).

- `tone="auto"`: biru selama berjalan, hijau saat 100%. Pakai untuk kemajuan penyelesaian.
- `inverse`: track putih 25%, isi `blue-30` atau `green-30`, label terang.

- Dipakai setelah aksi seperti mengirim, mengunduh, mengunggah, atau menyimpan, ketika sistem butuh waktu dan pengguna perlu tahu seberapa lama menunggu. Untuk proses tanpa perkiraan, pakai `Spinner`; untuk memuat konten bertahap, pakai `Skeleton`.
- Berikan umpan balik real-time dan estimasi yang akurat.
- Beri `label` angka atau keterangan agar tidak bergantung pada warna.
- Jangan memberi harapan palsu tentang waktu selesai.
