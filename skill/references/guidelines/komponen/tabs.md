# Tabs

- Kode: `Tabs` (`src/components`)
- Spesifikasi visual: [tabs.md](../../components/tabs.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/tabs, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Menampilkan dan mengorganisir kelompok informasi serupa dalam satu halaman tanpa berpindah halaman. Props: `items` (teks atau `{ label, count?, disabled? }`), `active`, `onChange`, `fill`.

## Jenis
- **Fixed Tabs** (`fill`): semua tab tampil dalam satu layar dengan lebar tetap. Pakai bila semua tab muat.
- **Scrollable Tabs** (tanpa `fill`): tidak berlebar tetap, sebagian bisa terpotong dan digeser. **Pakai bila jumlah/lebar tab melebihi lebar layar.** Tepi yang masih bisa digeser **memudar** (indikator overflow) dan hilang saat sampai di ujung. Di tepi yang meluber juga muncul **tombol panah gulir** (kiri/kanan, tidak masuk urutan Tab karena pengguna keyboard memakai `←`/`→`).

## State
Default, Focused (keyboard), Hovered, Pressed (tab terpilih = halaman yang sedang dilihat), Disabled (`{ label, disabled: true }`: tidak bisa dipilih, teks `text-disabled`, dilewati panah keyboard).

## Perilaku
- **Hanya satu tab aktif.** Butuh lebih dari satu aktif: gunakan komponen Filter (belum ada; lihat [Chip](chip.md)).
- **Tab tidak boleh membawa pengguna ke halaman lain**; peralihan tetap di halaman yang sama karena tab mengelompokkan kategori di bawah satu konteks induk.
- Keyboard (WAI-ARIA Tabs): `Tab` hanya ke tab aktif; `←`/`→` berpindah dan mengaktifkan (melingkar), `Home`/`End`.
- Dapat digabung dengan Header atau disematkan di dalam bagian halaman.
- Hitungan (`count`) pada tab aktif berlatar `action-default` dengan teks putih agar terlihat (ekstensi, lihat [extensions.md](../../extensions.md)).

## Panduan
- **Dilarang memotong (truncate) label** demi keterbacaan; bila tab melampaui lebar layar, pakai Scrollable.
- **Hindari Tabs bersarang.** Pertimbangkan side navigation atau [Accordion](accordion.md). Bersarang bisa diterima bila ada pemisahan tingkat yang tinggi atau tujuan penggunaannya berbeda, dan jangan korbankan hierarki dengan variasi/orientasi Tabs yang sama.
- **Responsif**: Mobile (≤768) lebih dari 3–4 tab: gulir horizontal dengan indikator overflow (gradient fade/chevron), tiap tab terjangkau swipe; Tablet (769–1024) jarak 16–20px; Desktop (1025–1440) satu baris tanpa gulir bila ≤6 tab, jarak 24px; Large (1440+) jarak 32px atau lebih, justified boleh bila tab sedikit.

## Penulisan
**Maksimal 3 kata**, tidak boleh di-truncate. Utamakan kata terpenting ("Kontributor", bukan "Nama kontributor"). **Sentence case**, tanpa titik di akhir.
