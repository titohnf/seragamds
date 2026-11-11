# Checkbox

- Kode: `Checkbox` (`src/components`)
- Spesifikasi visual: [checkbox.md](../../components/checkbox.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/checkbox, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Memilih satu atau beberapa item dari daftar, atau mengaktifkan/menonaktifkan. Props: `label`, `indeterminate`, `disabled`, atribut `<input>`.

## Jenis
**Checked** (terpilih), **Unchecked** (belum), **Undetermined** (`indeterminate`: sebagian sub-pilihan terpilih).

## Perilaku
Menekan **label atau kotaknya** sama-sama memilih. Keyboard: `Tab` fokus (cincin biru), `Space` mengubah. State: default, hover, focus, disabled.

## Kapan dipakai
- Mengonfirmasi persetujuan.
- Memilih satu atau beberapa pilihan dari daftar.
- Daftar dengan sub-pilihan: `indeterminate` pada induknya.
- Hanya satu pilihan boleh: pakai [Radio](radio.md).

## Penulisan (situs)
- Sampaikan pilihan dengan tepat, **hindari ambiguitas**.
- Rumuskan sebagai **pernyataan atau tindakan yang positif**.
- Singkat, tetapi jelaskan konsekuensi atau dampak pilihan.
- ✅ "Saya menyetujui syarat dan ketentuan". ❌ "Centang jika setuju".
