# List

- Kode: `List, ListItem` (`src/components`)
- Spesifikasi visual: [list.md](../../components/list.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/list, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Menyusun dan menampilkan informasi terorganisir, dari satu atribut data sampai kombinasi beberapa. Props `ListItem`: `label`, `description`, `artwork`, `end`, `onClick`.

## Jenis
- **Satu atribut**: satu jenis data teks (mis. daftar nama). **Beberapa atribut**: kombinasi teks dan gambar (mis. produk dengan nama, harga, foto).
- **Komponen interaktif tambahan**: tombol, ikon, atau label di tiap item (mis. "hapus", "info") lewat `end`.

## Perilaku
- Secara default **tanpa state khas**; boleh menyorot item terpilih sesuai desain. Umumnya hanya menampilkan data. Interaksi umum: ketuk untuk membuka halaman baru atau Modal. Tidak mendukung expand/collapse (pakai [Accordion](accordion.md)).

## List vs Card
- **List**: informasi berfokus teks, gambar pelengkap, hemat ruang vertikal, navigasi sederhana ke detail.
- [Card](card.md): visual/gambar jadi fokus, atau butuh tampilan lebih interaktif/mencolok. **Hindari List** untuk data yang mengutamakan visual.

## Responsif (situs)
| Breakpoint | Lebar | Tata letak |
|---|---|---|
| Mobile (≤768) | 100% | satu kolom; avatar/ikon di kiri, label dan deskripsi di kanan bertumpuk |
| Tablet (769–1024) | 80–90% | satu kolom lebih longgar; metadata opsional (waktu/status) di kanan |
| Desktop (1025–1440) | 60–70%, maks ±800px | satu kolom dalam wadah; artwork dan jarak lebih besar |
| Large (1440+) | 40–50%, maks ±960–1280px | satu kolom atau dua kolom sejajar |

## Penulisan
Sesuaikan judul dengan isi data. **Maksimal 2–3 kata**, fokus pada penjelasan data. Sentence case; tanpa titik di akhir.
