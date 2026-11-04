# Checkbox

Sumber: Figma *Dokumentasi Seragam Mobile 3.0*, halaman `Checkbox` (node `117:87`).

## Checkbox

12 varian. Properti:
- **State**: Default, Hover, Focused, Disabled
- **Checked**: Unchecked, Checked, Indetermined

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### State=Default, Checked=Unchecked
- Root: ukuran 20.0x20.0
- `Checkbox`: 18.0x18.0; radius 4.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px

### State=Hover, Checked=Unchecked
- Root: ukuran 20.0x20.0
- `Checkbox`: 18.0x18.0; radius 4.0; fill white (#FFFFFF); stroke legacy 0B5FEF = blue-70 (#0B5FEF) 1.0px

### State=Focused, Checked=Unchecked
- Root: ukuran 20.0x20.0; radius 4.0; fill white (#FFFFFF); stroke legacy 4C8DF6 = blue-50 (#4C8DF6) 2.0px inside
- `Checkbox`: 18.0x18.0; radius 4.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px; shadow 0.0 0.0 0.0 4.0 rgba(76,141,246,1.0), 0.0 0.0 0.0 2.0 rgba(255,255,255,1.0)

### State=Disabled, Checked=Unchecked
- Root: ukuran 20.0x20.0
- `Checkbox`: 18.0x18.0; radius 4.0; fill badge-neutral (#EFEFEF); stroke border-disabled-alt (#D9DBDD) 1.0px

### State=Default, Checked=Checked
- Root: ukuran 20.0x20.0
- `Checkbox`: 18.0x18.0; radius 4.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

### State=Default, Checked=Indetermined
- Root: ukuran 20.0x20.0
- `Checkbox`: 18.0x18.0; radius 4.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

## Checkbox with label

12 varian. Properti:
- **State**: Default, Disabled, Hover, Focused
- **Checked**: Unchecked, Checked, Indetermined

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### State=Default, Checked=Unchecked
- Root: ukuran 328.0x22.0; layout horizontal; gap 8.0
- `Checkbox/Checkbox`: 18.0x18.0; radius 4.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px
- Teks `Label` "Label": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

### State=Disabled, Checked=Unchecked
- Root: ukuran 328.0x22.0; layout horizontal; gap 8.0
- `Checkbox/Checkbox`: 18.0x18.0; radius 4.0; fill badge-neutral (#EFEFEF); stroke border-disabled-alt (#D9DBDD) 1.0px
- Teks `Label` "Label": Inter 15.0/22.0 w400 legacy 808489 = gray-50 (#808489)

### State=Hover, Checked=Unchecked
- Root: ukuran 328.0x22.0; layout horizontal; gap 8.0
- `Checkbox/Checkbox`: 18.0x18.0; radius 4.0; fill white (#FFFFFF); stroke legacy 0B5FEF = blue-70 (#0B5FEF) 1.0px
- Teks `Label` "Label": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

### State=Focused, Checked=Unchecked
- Root: ukuran 328.0x22.0; layout horizontal; gap 8.0
- `Checkbox`: 20.0x20.0; radius 4.0; fill white (#FFFFFF); stroke legacy 4C8DF6 = blue-50 (#4C8DF6) 2.0px
- `Checkbox/Checkbox`: 18.0x18.0; radius 4.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px; shadow 0.0 0.0 0.0 4.0 rgba(76,141,246,1.0), 0.0 0.0 0.0 2.0 rgba(255,255,255,1.0)
- Teks `Label` "Label": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

### State=Default, Checked=Checked
- Root: ukuran 328.0x22.0; layout horizontal; gap 8.0
- `Checkbox/Checkbox`: 18.0x18.0; radius 4.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- Teks `Label` "Label": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

### State=Default, Checked=Indetermined
- Root: ukuran 328.0x22.0; layout horizontal; gap 8.0
- `Checkbox/Checkbox`: 18.0x18.0; radius 4.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- Teks `Label` "Label": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
