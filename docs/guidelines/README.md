# Panduan penggunaan

Panduan kapan dan bagaimana memakai tiap komponen. Untuk ukuran dan token visual lihat [spesifikasi](../components/); untuk teks UI lihat [panduan penulisan](penulisan.md); untuk nama lihat [pemetaan nama](pemetaan-nama.md).

Setiap halaman di `komponen/` menyebut status: **dari panduan Seragam** (bersumber seragam.belajar.id, disesuaikan ke props repo ini) atau **draf** (belum ada panduan resmi).

Daftar lengkap ada di [docs/README.md](../README.md).

## Aturan lintas komponen
- Satu aksi utama per halaman; jangan menaruh dua tombol berbeda bobot yang sama berdampingan.
- Jangan menulis hex; pakai token. Spacing kelipatan 4.
- Target sentuh minimal 44px.
- Tangani semua state: default, hover, fokus, nonaktif, galat, memuat, kosong.
- Komponen hanya ikon wajib memiliki `aria-label`; gambar informatif wajib memiliki teks alternatif.
- Semua elemen interaktif harus bisa dioperasikan keyboard.
