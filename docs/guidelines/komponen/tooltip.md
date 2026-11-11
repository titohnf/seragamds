# Tooltip

- Kode: `Tooltip` (`src/components`)
- Spesifikasi visual: [tooltip.md](../../components/tooltip.md)

> **Status: dari panduan Seragam** (seragam.belajar.id), disesuaikan ke props komponen di repo ini.

Props: `text`, `side` (`top` | `bottom` | `left` | `right`), `inline` (ekstensi: pembungkus `inline` untuk istilah di tengah kalimat). Muncul saat hover atau fokus.

## Panduan
- Untuk informasi sekunder atau penjelas.
- Jangan untuk informasi penting/utama: di layar sentuh tidak ada hover.
- Harus dipasang pada sebuah elemen, tidak berdiri sendiri.
- Untuk istilah di dalam kalimat: pasang pada `<span tabIndex={0}>` bergaris titik-titik dan pakai `inline`. Bungkus hanya kemunculan pertama tiap istilah, dan sediakan juga daftar istilah yang bisa dicari, karena di layar sentuh tidak ada hover.

## Penulisan
Maksimal 1–2 kalimat. Sentence case. Tanpa titik di akhir.
