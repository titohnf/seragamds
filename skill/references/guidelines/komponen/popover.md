# Popover

- Kode: `Popover` (`src/components`)
- Spesifikasi visual: [popover.md](../../components/popover.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/popover, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Muncul di lapisan paling atas halaman, memuat teks dan elemen interaktif singkat. Props: `trigger`, `items` (`{ label, onSelect, disabled? }`), `align` (`left` | `right`), `side` (`bottom` bawaan · `top` · `right` · `left`).

## Perilaku
- **Hanya satu Popover tampil sekali waktu**: membuka yang lain menutup yang ini.
- Muncul/tertutup saat pemicu (Button) diklik; klik di luar atau `Esc` menutup dan fokus kembali ke pemicu. (Situs menyebut juga hover; komponen memakai klik agar bisa dipakai di layar sentuh.)
- Lokasi: di atas, samping kiri/kanan, atau bawah pemicu (`side`), sesuai kebutuhan desain. Posisi **tahan tepi layar**: membalik sisi bila tak muat, bergeser agar tetap di dalam layar, tingginya dibatasi ruang yang ada (menu bergulir), mengikuti pemicu saat halaman menggulir, dan tidak terpotong wadah `overflow-hidden` (`position: fixed`).
- Keyboard: fokus pindah ke item pertama saat dibuka; `↓`/`↑` berpindah item, `Home`/`End`, `Enter` memilih.
- State item: Default, Hover, Focused, Pressed (juga Disabled). Variasi: beberapa menu dalam satu kontainer.

## Panduan
- **Untuk informasi tambahan yang singkat** (pilihan atau aksi tambahan).
- **Jangan menampilkan informasi yang besar dan banyak**: pakai [Modal](modal.md) atau [Bottom Sheet](bottom-sheet.md).
- Untuk penjelasan satu-dua kalimat saja, [Tooltip](tooltip.md) lebih tepat.
- Situs tidak memuat panduan penulisan, aksesibilitas, atau responsif.
