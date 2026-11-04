# Switch

Sumber: Figma *Dokumentasi Seragam Mobile 3.0*, halaman `Switch` (node `117:1519`).

## Switch

6 varian. Properti:
- **State**: Default, Focused, Disabled
- **Checked**: True, False

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### State=Default, Checked=True
- Root: ukuran 50.0x28.0
- `Base`: 50.0x28.0; radius 100.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Handle`: 24.0x24.0; fill white (#FFFFFF); shadow 0.0 0.0 4.0 0 rgba(0,0,0,0.15)

### State=Focused, Checked=True
- Root: ukuran 50.0x28.0
- `Base`: 50.0x28.0; radius 120.0; fill legacy 0B5FEF = blue-70 (#0B5FEF); shadow 0.0 0.0 0.0 4.0 rgba(76,141,246,1.0), 0.0 0.0 0.0 2.0 rgba(255,255,255,1.0)
- `Handle`: 24.0x24.0; fill white (#FFFFFF); shadow 0.0 0.0 4.0 0 rgba(0,0,0,0.15)

### State=Disabled, Checked=True
- Root: ukuran 50.0x28.0
- `Base`: 50.0x28.0; radius 100.0; fill border-subdued-alt (#C9CBCF)
- `Handle`: 24.0x24.0; fill white (#FFFFFF); shadow 0.0 0.0 4.0 0 rgba(0,0,0,0.15)

### State=Default, Checked=False
- Root: ukuran 50.0x28.0
- `Base`: 50.0x28.0; radius 100.0; fill surface-subdued-alt (#F5F5F5); stroke border-subdued-alt (#C9CBCF) 1.0px
- `Handle`: 24.0x24.0; fill white (#FFFFFF); shadow 0.0 0.0 4.0 0 rgba(0,0,0,0.15)

## Switch with label

2 varian. Properti:
- **Checked**: True, False

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Checked=True
- Root: ukuran 328.0x28.0; layout horizontal; gap 8.0
- `Switch/Base`: 50.0x28.0; radius 100.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Switch/Handle`: 24.0x24.0; fill white (#FFFFFF); shadow 0.0 0.0 4.0 0 rgba(0,0,0,0.15)
- Teks `Label` "Label": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

### Checked=False
- Root: ukuran 328.0x28.0; layout horizontal; gap 8.0
- `Switch/Base`: 50.0x28.0; radius 100.0; fill surface-subdued-alt (#F5F5F5); stroke border-subdued-alt (#C9CBCF) 1.0px
- `Switch/Handle`: 24.0x24.0; fill white (#FFFFFF); shadow 0.0 0.0 4.0 0 rgba(0,0,0,0.15)
- Teks `Label` "Label": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
