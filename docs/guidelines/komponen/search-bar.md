# Search Bar

- Kode: `SearchBar` (`src/components`)
- Spesifikasi visual: [search.md](../../components/search.md)

> **Status: dari panduan Seragam** (seragam.belajar.id), disesuaikan ke props komponen di repo ini.

Props: atribut `<input>` biasa dan `onSearch`. Terdiri dari kolom isian, ikon cari, dan tombol hapus saat terisi.

## Perilaku
| Mode | Kapan dipakai |
|---|---|
| Pindah ke halaman pencarian | Ada riwayat, rekomendasi, atau info pendukung |
| Tetap di halaman | Hasil tampil instan saat mengetik |

## Panduan
- Letakkan di tengah, biasanya di bagian atas layar.
- Teks bantu hanya untuk galat dari pengguna (mis. belum mengetik kata kunci).
- "Tidak ada hasil": gunakan [Empty State](empty-state.md), bukan teks bantu.

## Penulisan
Placeholder: kata kerja aktif + objek. ✅ "Cari modul ajar...", "Ketik nama siswa...". ❌ "Search...", "Masukkan kata kunci".
