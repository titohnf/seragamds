# Form Field dan Field Group

- Kode: `FormField, FieldGroup` (`src/components`)
- Spesifikasi visual: ada di halaman ini (ekstensi, tidak ada di Figma maupun seragam.belajar.id)

> **Status: ekstensi.** Pembungkus kecil untuk kontrol yang tidak membawa label, teks bantu, dan galat sendiri. Lihat [extensions.md](../../extensions.md). `TextField`, `TextArea`, `Select`, dan `DatePicker` sudah memuatnya; **jangan dibungkus lagi**.

## Spesifikasi
| Bagian | Nilai |
|---|---|
| Label | Body `gray-90`, di atas kontrol, jarak 4 |
| Teks bantu / galat | Helper 12/16; bantu `gray-60`, galat `red-60`; galat menggantikan bantu; di bawah kontrol, jarak 4 |
| Tanda | "(opsional)" di akhir label; tanpa bintang pada yang wajib |
| Field Group | `<fieldset>` + `<legend>` (Body), isi vertikal jarak 12 atau menyamping (jarak 24, membungkus) |

## Props
`FormField`: `label` (wajib), `helper`, `error`, `optional`, `required`, `className`; `children` berupa fungsi `({ id, aria-describedby, aria-invalid, aria-required }) => kontrol` untuk dipasang ke kontrolnya, sehingga label terhubung (`htmlFor`).
`FieldGroup`: `legend` (wajib), `helper`, `error`, `optional`, `orientation` (`vertical` bawaan · `horizontal`), `className`.

## Kapan memakai apa
| Kebutuhan | Pakai |
|---|---|
| Satu kontrol buatan sendiri atau pihak ketiga | `FormField` |
| Sekelompok [Radio](radio.md) atau [Checkbox](checkbox.md) | `FieldGroup` (label SEBELUM daftar pilihan, sesuai panduan Radio) |
| Teks, area teks, pilihan bawaan, tanggal | komponen itu sendiri |

## Panduan
- Label ringkas dan jelas; isian yang tidak wajib diberi `optional` (Seragam menandai yang opsional, bukan yang wajib).
- Galat menjelaskan masalah dan solusi, muncul di dekat kontrolnya; `FieldGroup` menaruh galat di bawah semua pilihan.
- Radio dalam satu `FieldGroup` memakai `name` yang sama.

## Do & Don't
- ✅ `FieldGroup legend="Jenjang pendidikan"` membungkus tiga Radio. ✅ `FormField` dengan kontrol kustom.
- ❌ Membungkus `TextField` dengan `FormField` (label ganda). ❌ Menulis `<span>` sebagai pengganti `<legend>` untuk kelompok pilihan.
