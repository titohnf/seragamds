# Panduan penggunaan

Panduan kapan dan bagaimana memakai tiap komponen. Untuk ukuran dan token visual lihat [spesifikasi](../components/); untuk teks UI lihat [panduan penulisan](penulisan.md); untuk nama lihat [pemetaan nama](pemetaan-nama.md).

Setiap halaman di `komponen/` menyebut status: **dari panduan Seragam** (bersumber seragam.belajar.id, disesuaikan ke props repo ini) atau **draf** (belum ada panduan resmi).

Panduan di luar komponen: [keputusan UX](keputusan-ux.md) (peta komponen, urutan keadaan, umpan balik, formulir, gerak, cara memeriksa hasil), [penulisan](penulisan.md), [prinsip desain](prinsip-desain.md), [ilustrasi](ilustrasi.md). Daftar lengkap ada di [docs/README.md](../README.md).

## Aturan lintas komponen
- Ukuran huruf lewat token tipografi responsif (`typo.*` atau `sd-t-<nama>`), bukan angka; platform dipilih `data-sd-platform` ([Platform](komponen/platform.md)). Angka ukuran huruf di `docs/components/` dan di panduan adalah skala Mobile dari Figma; di Desktop lihat [tipografi](../foundations/tipografi.md).
- Gerak hanya menjawab aksi pengguna; yang berjalan sendiri secukupnya dan selalu menghormati `prefers-reduced-motion`. Blok teks di bawah ±80 karakter per baris. Detail: [keputusan UX](keputusan-ux.md).
- Satu aksi utama per halaman; jangan menaruh dua tombol berbeda bobot yang sama berdampingan.
- Jangan menulis hex; pakai token. Spacing kelipatan 4.
- Target sentuh minimal 44px.
- Tangani semua state: default, hover, fokus, nonaktif, galat, memuat, kosong.
- Komponen hanya ikon wajib memiliki `aria-label`; gambar informatif wajib memiliki teks alternatif.
- Semua elemen interaktif harus bisa dioperasikan keyboard.
