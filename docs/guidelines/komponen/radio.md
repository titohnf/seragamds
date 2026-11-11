# Radio

- Kode: `Radio` (`src/components`)
- Spesifikasi visual: [radio.md](../../components/radio.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/radio, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Memilih **satu** opsi dari sekelompok pilihan. Props: `label` dan atribut `<input type="radio">`.

## Jenis
**Radio** (atom, fleksibel) dan **Radio with label** (umumnya di formulir, memberi konteks).

## Perilaku
- Eksklusif: hanya satu Radio per kelompok terpilih (beri `name` yang sama). Klik Radio **atau labelnya**.
- Keyboard: `Tab` masuk kelompok, `↑↓←→` berpindah dan memilih; fokus tampil sebagai **cincin biru** yang jelas.

## Panduan
- **Jangan pakai Radio bila hanya ada satu opsi** (pakai [Checkbox](checkbox.md)). Boleh lebih dari satu pilihan: Checkbox.
- Paling efektif untuk pilihan eksklusif dengan opsi terbatas: **disarankan kurang dari lima**. Maksimal 3 opsi tetap = Radio; lebih dari 5 = [Select](select.md); 4–5 opsi: pilih sesuai ruang dan seberapa sering opsi berubah.
- **Selalu beri label sebelum daftar pilihan** yang menjelaskan konteks; boleh di atas atau di samping Radio.
- Tampilkan semua opsi sekaligus.
- Situs tidak memuat panduan penulisan, aksesibilitas khusus, atau responsif.
