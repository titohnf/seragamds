# Progress Bar

- Kode: `ProgressBar` (`src/components`)
- Spesifikasi visual: [loading.md](../../components/loading.md)

> **Status: draf.** Belum ada panduan penggunaan resmi dari tim Seragam untuk komponen ini. Isi di bawah diturunkan dari spesifikasi Figma dan kode; tinjau ulang sebelum dijadikan aturan.

Props: `value` (0–100), `label`, `labelPosition` (`left` | `right`).

- Untuk proses yang punya kemajuan terukur (unggah, langkah pengisian).
- Beri `label` angka atau keterangan agar tidak bergantung pada warna.
- Jangan memberi harapan palsu tentang waktu selesai.
