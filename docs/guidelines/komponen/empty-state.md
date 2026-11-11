# Empty State

- Kode: `EmptyState` (`src/components`)
- Spesifikasi visual: [empty-state.md](../../components/empty-state.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/empty-state, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Kondisi ketika antarmuka tidak punya data atau konten untuk ditampilkan. Props: `title`, `description`, `artwork`, `action`.

## Jenis
| Jenis | Kapan dipakai |
|---|---|
| Default (tanpa aksi) | Hanya memberi informasi saat tidak ada data, konten, atau hasil |
| Dengan aksi (`action`) | Informasi + elemen tindakan agar pengguna tahu langkah berikutnya |
| Cakupan | **Layar penuh** (halaman mandiri, mis. dashboard kosong) atau **bagian komponen** lain (Table, Card) |

## Panduan
- **Selalu beri konteks**: jelaskan mengapa halaman kosong atau data tidak bisa ditampilkan, plus fungsi halaman atau informasi yang akan muncul nanti.
- **Selalu arahkan langkah berikutnya** dengan pilihan kata yang mendorong (*encouraging*); aksi lewat tombol atau teks yang bisa diklik.
- Jangan pesan generik tanpa konteks ("Tidak ada data"): membuat pengguna frustrasi.
- Contoh kapan dipakai: riwayat belum ada catatan; dashboard sebelum pengguna bertindak; hasil pencarian tidak cocok.
- Tanpa state atau interaksi keyboard khusus.

## Responsif
| | Mobile | Desktop |
|---|---|---|
| Posisi | tengah layar | tengah layar |
| Lebar konten | 235–296px, atau penuh dengan margin layar | 295–520px, tetap (tidak mengikuti margin layar) |
| Tata letak | disarankan **rata kiri** | disarankan **rata tengah** (estetika) |
| Tinggi | menyesuaikan; hindari konten panjang dan banyak | sama |

## Penulisan
Judul **Title Case** ("Belum Ada Data"); deskripsi **sentence case** dan mengarahkan tindakan.
