# Container

Sumber: seragam.belajar.id/container. Container adalah wadah yang mengatur lebar, perataan, dan padding isi; dasar tata letak dan grid. Halaman sumber **tidak** memuat jumlah kolom, gutter, margin luar, atau titik putus (breakpoint) piksel; angka di bawah berasal dari contoh halaman dan spesifikasi Footer di Figma, lalu perlu dikonfirmasi tim desain.

## Jenis
| Jenis | Perilaku | Contoh |
|---|---|---|
| Fluid | Selalu 100% lebar layar | halaman penuh, banner |
| Fixed | Lebar tetap | 400px |
| Responsive | Lebar menyesuaikan di tiap breakpoint | mobile maks. 600px, desktop maks. 1200px |

## Panduan
- **Mobile-first**: mulai dari container fleksibel di layar kecil, tambah tata letak rumit di layar besar.
- **Batas lebar teks panjang** agar tetap terbaca di layar lebar.
- **Padding internal** supaya isi tidak menempel ke tepi container.
- Bila memakai grid (mis. 12 kolom), jadikan container dasar grid.
- Overflow: `hidden`, `auto`, atau tampil penuh, sesuai konteks. Perataan: tengah, kiri, kanan, atau flex/grid.
- Pakai elemen semantik (`<main>`, `<section>`, `<article>`); hindari ARIA yang tidak perlu.

## Nilai yang dipakai di repo ini
| Konteks | Nilai | Dari |
|---|---|---|
| Margin layar mobile | 16 (24 untuk bagian bernapas) | spacing komponen Figma |
| Margin tablet (768) | 24 | Footer Figma |
| Margin desktop (1440) | 80 kiri-kanan | Footer Figma |
| Lebar isi desktop | maks. 1280, dipusatkan | Footer Figma |
| Lebar isian formulir | 328 (mobile) | spesifikasi komponen |
