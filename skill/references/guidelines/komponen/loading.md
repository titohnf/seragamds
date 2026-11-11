# Loading (Spinner dan Skeleton)

- Kode: `Spinner, Skeleton` (`src/components`)
- Spesifikasi visual: [loading.md](../../components/loading.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/loading), disesuaikan ke props komponen di repo ini. Ukuran Spinner dan kecepatan kilau Skeleton tidak ada di Figma; nilai di kode adalah usulan.

Loading menandai sistem sedang memproses (memuat halaman, mengambil data, menjalankan fungsi berat). Tiga bentuk:

| Bentuk | Kode | Kapan |
|---|---|---|
| Progress bar | [`ProgressBar`](progress-bar.md) | Setelah aksi (kirim, unduh, unggah, simpan) dan **kemajuan terukur**: pengguna tahu seberapa lama menunggu |
| Spinner | `Spinner` (`size` `sm` 16 · `md` 24 · `lg` 40, `inverse`, `label`) | Seperti progress bar, tetapi **tanpa perkiraan waktu** |
| Shimmer | `Skeleton` (`shape` `text` · `block` · `circle`, `width`, `height`) | Memuat komponen bertahap dalam satu halaman; kerangka meniru bentuk konten asli |

## Perilaku
1. **Beri umpan balik**: tunjukkan proses berjalan agar pengguna tidak mengira aplikasi macet.
2. **Beri perkiraan waktu** bila memungkinkan, agar pengguna bisa menunggu atau melakukan hal lain.
3. **Jaga keterlibatan** pada waktu tunggu lama: animasi, ilustrasi, atau teks singkat.

## Panduan
- ✅ Umpan balik real-time dengan perkiraan yang akurat.
- ❌ Memberi harapan palsu (tampak selesai padahal belum; progress bar 90% yang macet).
- Pakai `Skeleton` dengan bentuk yang sama persis dengan konten (baris teks, kartu, avatar) supaya tata letak tidak melompat saat konten tiba.
- Spinner di dalam tombol: pakai `Button loading`, bukan `Spinner` sendiri.
- Beri `aria-busy="true"` pada wilayah yang sedang dimuat; `Spinner` sudah `role="status"` dengan `label` ("Memuat…"). `Skeleton` dekoratif (`aria-hidden`). Gerak diperlambat/dimatikan bila pengguna memilih gerak berkurang.

## Penulisan
- **Judul**: jelaskan aksi yang berjalan, kalimat aktif, **selalu pakai elipsis** ("Mengirim laporan…"). Kalimat pasif boleh bila ingin memulai dengan subjek.
- **Deskripsi/subjudul**: berapa lama menunggu. "Mohon tunggu sebentar" paling umum; sesuaikan dengan perkiraan waktu.
- Bila menunggu lebih dari beberapa detik, pakai deskripsi untuk menenangkan: fakta unik produk, visual, atau gerak. Sesuaikan dengan gaya bahasa dan tujuan produk.
