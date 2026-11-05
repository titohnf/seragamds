# Spacing

> **Status: draf.** Halaman Spacing di Figma *Seragam Dasar* kosong, jadi belum ada token spacing resmi.

Sampai Figma mengisinya, ikuti konvensi yang sudah dipakai spesifikasi komponen di `docs/components/`:

- Gunakan **kelipatan 4px** (4, 8, 12, 16, 24, 32, 40, ...). Padding dan gap komponen (mis. 12×16, gap 4/8/12) semuanya kelipatan 4.
- Margin layar mobile 16–24px. Jarak antar kolom isian minimal 24px.
- Target sentuh minimal 44px tinggi.
- Pakai skala spacing bawaan Tailwind (`p-4` = 16px, dst.) atau nilai arbitrer kelipatan 4 (`p-[12px]`).

Saat Figma menetapkan token spacing, tambahkan ke `tokens/seragam.tokens.json` dan ganti halaman ini.
