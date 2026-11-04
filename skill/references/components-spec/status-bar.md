# Status Bar

Sumber: Figma *Dokumentasi Seragam Mobile 3.0*, halaman `Status Bar` (node `2563:24457`).

## Status bar

2 varian. Properti:
- **Type**: White background, Dark background

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Type=White background
- Root: ukuran 360.0x24.0; fill white (#FFFFFF)
- `battery-icon`: 8.0x14.0; radius [0.0, 0.0, 0.0, 0.0]
- `battery-icon/Rectangle 1751`: 8.0x13.0; radius 1.0; fill #C4C4C4
- `battery-icon/Rectangle 1752`: 2.0x1.0; fill #C4C4C4; stroke #C4C4C4 0.5px
- Teks `09:30` "09:30": Roboto 13.0/15.2 w500 legacy 2F3031 = gray-90 (#2F3031)

### Type=Dark background
- Root: ukuran 360.0x24.0; fill legacy 2F3031 = gray-90 (#2F3031)
- `battery-icon`: 8.0x14.0; radius [0.0, 0.0, 0.0, 0.0]
- `battery-icon/Rectangle 1751`: 8.0x13.0; radius 1.0; fill white (#FFFFFF) @60%
- `battery-icon/Rectangle 1752`: 2.0x1.0; fill white (#FFFFFF) @60%; stroke white (#FFFFFF) @60% 0.5px
- Teks `09:30` "09:30": Roboto 13.0/15.2 w500 white (#FFFFFF)
