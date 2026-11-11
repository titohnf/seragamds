# Carousel

- Kode: `Carousel` (`src/components`)
- Spesifikasi visual: [carousel-updated.md](../../components/carousel-updated.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/carousel), disesuaikan ke props komponen di repo ini. Halaman sumber tidak memuat ukuran atau durasi autoplay; nilai itu diambil dari Figma *Carousel updated* atau ditetapkan di kode dan perlu dikonfirmasi tim desain.

Props: `slides` (daftar isi slide), `label` (wajib), `autoplay` (ms), `pagination`, `arrows`, `arrowTone` (`light` · `dark`), `loop`, `index` + `onIndexChange` (terkendali).

| Jenis | Pengaturan |
|---|---|
| Basic Carousel | `pagination={false}`: hanya panah dan swipe |
| Carousel with Pagination | bawaan: titik pagination sekaligus kontrol lompat |
| Custom Carousel | isi slide bebas: gambar, judul, deskripsi, tombol CTA (kartu `content-carousel-card` di Figma: radius 8, border `gray-20`, judul 18/24 semibold) |

## Panduan
- Untuk konten prioritas tinggi: promosi, pengumuman, sorotan utama. Jangan dipakai untuk konten yang wajib dibaca semua pengguna.
- **Maksimal 5–7 slide**; lebih dari itu pesan tenggelam.
- Hanya satu slide tampil pada satu waktu.
- Autoplay opsional dan mati bawaan. Bila dipakai: berhenti saat hover, fokus, atau navigasi manual; selalu ada tombol jeda; tidak berjalan bila pengguna memilih gerak berkurang.
- Desktop: panah, pagination, dan isi lengkap. Mobile: swipe atau seret; panah boleh diperkecil.
- Pakai gambar responsif (`srcset`/ukuran adaptif) agar ringan di perangkat mobile. Teks di slide harus tetap terbaca saat diperbesar (zoom).

## Aksesibilitas
- Kontainer `role="group"` `aria-roledescription="carousel"` dengan `label`; tiap slide `aria-roledescription="slide"` ("1 dari 5"). Slide tak aktif `inert`.
- `aria-live="polite"` saat autoplay mati (pengguna yang berpindah), `off` saat autoplay berjalan agar pembaca layar tidak terganggu.
- Keyboard: `Tab` ke kontrol, `←`/`→` berpindah slide, `Enter` untuk CTA. Fokus tampak (outline `blue-50`).
- Setiap gambar di slide wajib teks alternatif ([panduan penulisan](../penulisan.md)).

## Do & Don't
- ✅ Slide pertama memuat pesan terpenting.
- ❌ Autoplay tanpa tombol jeda, atau berjalan terus saat pengguna menyorot.
- ❌ Informasi penting hanya ada di slide ke-4.
