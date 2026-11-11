# Text Field

- Kode: `TextField, TextArea` (`src/components`)
- Spesifikasi visual: [text-field.md](../../components/text-field.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/text-field, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Area berbentuk kotak untuk memasukkan karakter alfanumerik hingga simbol. Label, teks bantu, dan galat adalah prop: `label`, `helper`, `error`. `TextField` juga `leftIcon`, `rightIcon`, `readOnly` (ekstensi, lihat [extensions.md](../../extensions.md)).

## Jenis
| Jenis | Komponen | Untuk |
|---|---|---|
| Text Field (with Label) | `TextField` | Data singkat dan spesifik: nama, email, kata sandi |
| Text Area (with Label) | `TextArea` | Data panjang/detail: komentar, deskripsi, catatan, umpan balik |

## State
Default (border abu-abu, placeholder), Focused (border biru + kursor), Disabled (redup, tak bisa diisi), Error (border dan pesan merah + teks bantu). **Isian yang sudah terisi berwarna hitam.**

## Ukuran dan responsif (situs)
| | Desktop | Mobile |
|---|---|---|
| Tinggi Text Field | ±44–48px (komponen: 46 Mobile / 48 Desktop) | touch target minimal 44px (Apple) / 48dp (Material) |
| Jarak | antar baris min. 24px; antar kolom ±24–32px | ditumpuk, jarak ±8–16px; margin layar 16–24px |
| Lebar | Short 80–140px · Medium 280–400px · Long 450–600px atau penuh wadah | **100% lebar layar** untuk meminimalkan salah isi |
| Text Area | lebar mengikuti wadah, ±40–80 karakter (300–600px); tinggi bawaan ±100–150px; mulai 4–6 baris untuk kolom panjang; **bisa di-resize** | lebar 100%; tinggi ±100–150px; **auto-grow** saat baris bertambah (belum ada di kode) |

## Panduan
- Selalu isi `label`; `helper` untuk format yang diharapkan; validasi lewat `error`, bukan alert terpisah.
- Pilih Text Field untuk data singkat, Text Area untuk data panjang.
- Area kecil: tulis ringkas dan jelas; bila terbatas, [Tooltip](tooltip.md) boleh memperluas informasi.

## Penulisan
- Ringkas dan jelas untuk label, Text Field, Text Area. Gunakan **call to action atau kalimat tanya** untuk petunjuk. Untuk informasi **sensitif**, beri peringatan agar pengguna berhati-hati.
- **Pesan galat (help text)** punya tiga pendekatan: (1) sebut yang **tidak boleh** diisi, (2) sebut **kesalahan yang dilakukan** agar dikenali, (3) beri **peringatan/petunjuk teknis** pengisian. Jelaskan masalah dan solusinya, tanpa istilah teknis.
- Lihat [penulisan.md](../penulisan.md): label, placeholder (contoh nyata, "cth. nama@email.com"), teks bantu.

## Do & Don't
- ✅ Label jelas di atas kolom. ✅ `helper` menjelaskan format; `error` menjelaskan masalah dan solusi.
- ❌ Kolom tanpa label. ❌ Galat teknis ("Error 400: Invalid").
