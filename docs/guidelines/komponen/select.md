# Select

- Kode: `Select, CustomSelect` (`src/components`)
- Spesifikasi visual: [select.md](../../components/select.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/select, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Memilih satu opsi dari daftar; saat diklik/diketuk muncul dropdown. Props `Select`: `label`, `helper`, `error`, `placeholder`, serta atribut `<select>`; pilihan berupa `<option>`. Props `CustomSelect`: `options` (`{ value, label, description?, disabled? }`), `value`, `onChange`, `label`, `helper`, `error`, `placeholder`, `disabled`, `mode` (`dropdown` · `list-menu`), `listTitle`.

## Jenis (situs)
| Jenis | Keterangan | Di kode |
|---|---|---|
| **Default Select** | Dropdown bawaan browser/OS: sederhana, konsisten dengan platform | `Select` |
| **Custom Select** | Dropdown rancangan khusus, fleksibel gaya dan fungsi (opsi boleh berdeskripsi) | `CustomSelect mode="dropdown"` |
| **Custom List Menu** | Select sebagai titik masuk membuka [Modal](modal.md) yang berfungsi seperti Select tetapi memuat lebih banyak informasi dan konteks | `CustomSelect mode="list-menu"` |

## State
Default, Focused, Disabled, Error ("saat terjadi kesalahan input, mis. memilih opsi yang tidak valid" lewat `error`).

## Perilaku `CustomSelect`
- Pemicu bertampilan sama dengan `Select`. `Enter`/`Space`/`↓` membuka; `↑`/`↓`/`Home`/`End` memindah sorotan (opsi nonaktif dilewati); `Enter` memilih; `Esc` menutup dan fokus kembali ke pemicu; ketik huruf untuk melompat; klik di luar menutup.
- Semantik: pemicu `role="combobox"`, daftar `role="listbox"` dengan `aria-activedescendant`; opsi terpilih bertanda centang. Mode `list-menu` membuka Modal berukuran `sm` yang memuat daftar yang sama.
- Pakai `Select` bawaan bila daftar sederhana (lebih ringan, memakai picker native di mobile); `CustomSelect` bila perlu deskripsi per opsi, gaya khusus, atau konteks tambahan.

## Panduan
- **Pakai bila ada lebih dari 5 opsi** (hemat ruang) atau datanya dinamis dan bisa berubah (mis. kategori yang bertambah).
- **Hindari bila opsi tetap dan sedikit** (**maksimal 3**): pakai [Radio](radio.md) dengan label, interaksinya lebih cepat dan langsung. Antara 4–5 opsi, pertimbangkan ruang dan sifat data.
- Selalu beri `placeholder` yang deskriptif; validasi lewat `error`.
- Pilihan kompleks yang butuh antarmuka sendiri: [Bottom Sheet](bottom-sheet.md) atau Modal.
- Situs tidak memuat panduan penulisan, keyboard, aksesibilitas, atau responsif.
