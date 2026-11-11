# Perlu keputusan desain

Daftar nilai dan perilaku yang **kita tetapkan sendiri** karena tidak ada di Figma Seragam maupun seragam.belajar.id. Semuanya sudah dikerjakan dengan usulan yang masuk akal; tim desain cukup mengonfirmasi atau memberi angka lain, lalu perubahannya biasanya di satu tempat. Konteks lengkap ada di [DECISIONS](DECISIONS.md). Saat satu butir selesai, pindahkan ke DECISIONS dan hapus dari sini.

| # | Butir | Usulan kita sekarang | Dasar | Dampak bila berubah |
|---|---|---|---|---|
| 1 | Tinggi kontrol **Desktop** `lg` dan isian | Button `lg` 48, isian/Select/Search/Stepper 48 (baris + 24) | Rumus dari tinggi baris; satu titik data Figma: tombol 40px di Navbar Desktop (= `md` Desktop) | Satu rumus `calc(var(--sd-text-*-line) + N)` di Button dan kontrol isian |
| 2 | Kontras **gray-50 → gray-60** untuk angka halaman tidak aktif dan placeholder | `gray-60` (4,81:1) | Figma memakai `gray-50` (3,84:1, di bawah AA 4,5:1) | Pagination, TextField |
| 3 | **Spinner** | 16/24/40, garis 2/3/4 | Tidak ada di Figma maupun situs | `Spinner` |
| 4 | **Skeleton** | kilau 1,6 dtk, radius 4/8 | Tidak ada di Figma maupun situs | `Skeleton` |
| 5 | **Carousel** | titik 8 (aktif 20×8 `blue-70`), autoplay mati bawaan, jeda saat hover/fokus | Halaman situs tidak memuat angka | `Carousel` |
| 6 | **Footer** | breakpoint md 768 dan lg 1024, isi maks. 1280 | Margin dari Figma; breakpoint tidak ada | `Footer` |
| 7 | **Icon Button Desktop** | 46×46 (ukuran `lg` Mobile) | Navbar Desktop Figma memakai 46×46 | `Button iconOnly` |
| 8 | Judul kolom **Table**: Title Case (situs) atau sentence case dan tampil KAPITAL (kode) | sentence case tampil KAPITAL | Keputusan 2026-11-10 | `Table` |
| 9 | **Ekstensi** yang kita usulkan masuk Seragam | `Panel`, `DescriptionList`, `PageHeader`, `ProcessSteps`, `Platform` (skala Mobile/Desktop), `DatePicker`/`Calendar`, `FormField`/`FieldGroup`, `Button destructive-secondary`/`inverse`, `ChipGroup` pilihan banyak, `AccordionGroup`, Navbar utuh | Dibutuhkan produk, tidak ada padanan | Status "ekstensi" menjadi komponen resmi |
| 10 | **Skala huruf Desktop** untuk semua komponen | satu komponen, dua skala (`data-sd-platform`) | Figma hanya punya komponen mobile | Semua komponen |

## Untuk tim situs seragam.belajar.id
- Halaman **Sidebar Menu** gagal dirender: teks `<800px` di bagian Behaviors terbaca sebagai tag oleh MDX; tulis `&lt;800px`.
- Kartu **Identitas Visual Platform** di beranda menautkan `/identitas-visual-platform` yang 404.
- Angka antarhalaman tidak konsisten: Radio ("kurang dari lima") vs Select ("lebih dari 5", "maks. 3 opsi tetap"); Chips ("3–4 kata" di judul vs "tidak lebih dari 4" di isi); Stepper menyebut "5 states" tetapi menyebut empat nama.
