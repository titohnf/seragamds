# Radio

Sumber: Figma *Dokumentasi Seragam Mobile 3.0*, halaman `Radio` (node `117:88`).

## Radio with label

8 varian. Properti:
- **State**: Default, Disabled, Hover, Focused
- **Checked**: False, True

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### State=Default, Checked=False
- Root: ukuran 328.0x22.0; layout horizontal; gap 8.0
- `Radio/Radio`: 20.0x20.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px
- Teks `Label` "Label": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

### State=Disabled, Checked=False
- Root: ukuran 328.0x22.0; layout horizontal; gap 8.0
- `Radio`: 20.0x20.0; radius 4.0
- `Radio/Radio`: 20.0x20.0; fill badge-neutral (#EFEFEF); stroke border-disabled-alt (#D9DBDD) 1.0px
- Teks `Label` "Label": Inter 15.0/22.0 w400 legacy 808489 = gray-50 (#808489)

### State=Hover, Checked=False
- Root: ukuran 328.0x22.0; layout horizontal; gap 8.0
- `Radio/Radio`: 20.0x20.0; fill white (#FFFFFF); stroke legacy 0B5FEF = blue-70 (#0B5FEF) 1.0px
- Teks `Label` "Label": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

### State=Focused, Checked=False
- Root: ukuran 328.0x22.0; layout horizontal; gap 8.0
- `Radio`: 20.0x20.0; radius 4.0; fill badge-neutral (#EFEFEF); stroke border-disabled-alt (#D9DBDD) 1.0px
- `Radio/Radio`: 20.0x20.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px; shadow 0.0 0.0 0.0 4.0 rgba(76,141,246,1.0), 0.0 0.0 0.0 2.0 rgba(255,255,255,1.0)
- Teks `Label` "Label": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

### State=Default, Checked=True
- Root: ukuran 328.0x22.0; layout horizontal; gap 8.0
- `Radio/Radio`: 20.0x20.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Radio/Circle`: 8.0x8.0; fill surface-subdued-alt (#F5F5F5)
- Teks `Label` "Label": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

## Radio

8 varian. Properti:
- **State**: Default, Hover, Focused, Disabled
- **Checked**: False, True

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### State=Default, Checked=False
- Root: ukuran 20.0x20.0
- `Radio`: 20.0x20.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px

### State=Hover, Checked=False
- Root: ukuran 20.0x20.0
- `Radio`: 20.0x20.0; fill white (#FFFFFF); stroke legacy 0B5FEF = blue-70 (#0B5FEF) 1.0px

### State=Focused, Checked=False
- Root: ukuran 20.0x20.0; radius 4.0; fill badge-neutral (#EFEFEF); stroke border-disabled-alt (#D9DBDD) 1.0px inside
- `Radio`: 20.0x20.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px; shadow 0.0 0.0 0.0 4.0 rgba(76,141,246,1.0), 0.0 0.0 0.0 2.0 rgba(255,255,255,1.0)

### State=Disabled, Checked=False
- Root: ukuran 20.0x20.0; radius 4.0
- `Radio`: 20.0x20.0; fill badge-neutral (#EFEFEF); stroke border-disabled-alt (#D9DBDD) 1.0px

### State=Default, Checked=True
- Root: ukuran 20.0x20.0
- `Radio`: 20.0x20.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Circle`: 8.0x8.0; fill surface-subdued-alt (#F5F5F5)
