# Select

- Kode: `Select` (`src/components`)
- Spesifikasi visual: [select.md](../../components/select.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/select, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Memilih satu opsi dari daftar; saat diklik/diketuk muncul dropdown. Props: `label`, `helper`, `error`, `placeholder`, serta atribut `<select>`; pilihan berupa `<option>`.

## Jenis (situs)
| Jenis | Keterangan | Di kode |
|---|---|---|
| **Default Select** | Dropdown bawaan browser/OS: sederhana, konsisten dengan platform | ✅ `Select` |
| **Custom Select** | Dropdown rancangan khusus, fleksibel gaya dan fungsi | belum ada |
| **Custom List Menu** | Select sebagai titik masuk membuka [Modal](modal.md) yang berfungsi seperti Select tetapi memuat lebih banyak informasi dan konteks | belum ada; susun dengan Modal |

## State
Default, Focused, Disabled, Error ("saat terjadi kesalahan input, mis. memilih opsi yang tidak valid" lewat `error`).

## Panduan
- **Pakai bila ada lebih dari 5 opsi** (hemat ruang) atau datanya dinamis dan bisa berubah (mis. kategori yang bertambah).
- **Hindari bila opsi tetap dan sedikit** (**maksimal 3**): pakai [Radio](radio.md) dengan label, interaksinya lebih cepat dan langsung. Antara 4–5 opsi, pertimbangkan ruang dan sifat data.
- Selalu beri `placeholder` yang deskriptif; validasi lewat `error`.
- Pilihan kompleks yang butuh antarmuka sendiri: [Bottom Sheet](bottom-sheet.md) atau Modal.
- Situs tidak memuat panduan penulisan, keyboard, aksesibilitas, atau responsif.
