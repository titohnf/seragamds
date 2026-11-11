# Date Picker

- Kode: `DatePicker, Calendar` (`src/components`)
- Spesifikasi visual: ada di halaman ini (ekstensi, tidak ada di Figma maupun seragam.belajar.id)

> **Status: ekstensi.** Komponen di luar Figma dan panduan Seragam, dibuat karena produk pendidikan hampir selalu butuh tanggal (tanggal lahir, jadwal, masa berlaku). Lihat [extensions.md](../../extensions.md). Usulkan ke tim desain Seragam; perilakunya mengikuti pola WAI-ARIA grid dan gaya TextField.

Isian tanggal yang bisa **diketik** (`hh/bb/tttt`) atau **dipilih** dari Calendar. Untuk memilih tanggal saja tanpa isian, pakai `Calendar`.

## Spesifikasi
| Bagian | Nilai |
|---|---|
| Isian | sama dengan [TextField](text-field.md): tinggi 46/48, label, `helper`, `error`; ikon kalender 20 di kanan (tombol 32, `aria-label="Pilih tanggal"`) |
| Format tampil dan ketik | `hh/bb/tttt` (juga diterima `hh-bb-tttt`, `hh.bb.tttt`) |
| Nilai | ISO `YYYY-MM-DD` atau `null` (tanpa zona waktu) |
| Calendar | lebar 308, minggu **mulai Senin**, nama bulan dan hari berbahasa Indonesia (`Intl id-ID`) |
| Sel hari | 44×44 (target sentuh), radius 4, Body; hover `gray-5`; terpilih `blue-70` + teks putih; hari ini border `blue-70`; di luar `min`/`max` nonaktif |
| Panel | dialog putih radius 8, padding 16, Elevation 03, di bawah isian; baris bawah: "Hari ini" dan "Hapus" (Button quiet `sm`) |

## Props
`DatePicker`: `value` (ISO atau `null`), `onChange`, `min`, `max` (ISO), `label` (wajib), `helper`, `error`, `optional`, `disabled`, `className`.
`Calendar`: `value`, `onChange`, `min`, `max`, `className`.

## Perilaku
- **Mengetik**: validasi saat meninggalkan isian atau menekan `Enter`. Format salah atau di luar rentang menampilkan galat bawaan ("Format tanggal salah. Gunakan hh/bb/tttt, misalnya 12/11/2025." atau "Tanggal harus mulai 01/11/2025 sampai 30/11/2025."); `error` dari pemanggil menang. Isian kosong menghasilkan `null`.
- **Memilih**: ikon kalender (atau `Alt`+`↓`) membuka Calendar; fokus pindah ke tanggal terpilih (atau hari ini). Memilih tanggal menutup panel dan mengembalikan fokus ke isian. `Esc` atau klik di luar menutup (fokus kembali ke tombol ikon).
- **Keyboard di Calendar**: `←`/`→` ±1 hari, `↑`/`↓` ±1 minggu, `Home`/`End` awal/akhir minggu, `PageUp`/`PageDown` ±1 bulan (`Shift`: ±1 tahun), `Enter`/`Space` memilih. Hanya satu sel masuk urutan `Tab`.
- **Aksesibilitas**: tiap sel `aria-label` tanggal lengkap ("Rabu, 12 November 2025"), hari ini `aria-current="date"`, terpilih `aria-selected`, judul bulan `aria-live`; panel `role="dialog"`.
- **Belum ada**: rentang (dari–sampai), pemilih tahun cepat, tampilan bottom sheet di mobile (panel tetap dialog di bawah isian).

## Panduan
- Pakai untuk tanggal yang jelas rentangnya (tanggal lahir, jadwal). Untuk bulan atau tahun saja, pakai [Select](select.md).
- Beri `min`/`max` bila ada batas (jangan menerima lalu menolak belakangan).
- `helper` menyebut format atau konteks ("Sesuai kartu identitas"); galat menjelaskan masalah dan solusinya ([penulisan](../penulisan.md)).
- Tanggal opsional: `optional` menambah "(opsional)" pada label, bukan tanda bintang pada yang wajib.

## Do & Don't
- ✅ Mengizinkan mengetik dan memilih. ✅ Label tetap terlihat.
- ❌ Hanya kalender tanpa bisa mengetik untuk tanggal jauh (tanggal lahir). ❌ Menaruh tanggal di dalam teks bebas.
