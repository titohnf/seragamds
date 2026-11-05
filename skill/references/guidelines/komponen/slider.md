# Slider

- Kode: `Slider` (`src/components`)
- Spesifikasi visual: [slider.md](../../components/slider.md)

> **Status: draf.** Belum ada panduan penggunaan resmi dari tim Seragam untuk komponen ini. Isi di bawah diturunkan dari spesifikasi Figma dan kode; tinjau ulang sebelum dijadikan aturan.

Props: `value`, `onChange`, `min`, `max`, `step`, `disabled`, `showRange`.

- Untuk memilih nilai dalam rentang ketika ketelitian tidak kritis.
- Butuh angka pasti: pakai [Stepper](stepper.md) atau [Text Field](text-field.md).
- Tampilkan nilai/rentang (`showRange`) agar pengguna tahu batasnya.
