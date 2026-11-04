# Loading

Sumber: Figma *Dokumentasi Seragam Mobile 3.0*, halaman `Loading` (node `218:5300`).

## Assets / Track

- Root: ukuran 328.0x6.0; radius 74.0; fill border-disabled-alt (#D9DBDD)

## Assets / Active track

- Root: ukuran 328.0x6.0; radius 74.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

## Progress bar 

5 varian. Properti:
- **Type**: 25%, 50%, 75%, 100%, Custom

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Type=25%
- Root: ukuran 328.0x6.0
- `Assets / Track`: 328.0x6.0; radius 74.0; fill border-disabled-alt (#D9DBDD)
- `Assets / Active track`: 82.0x6.0; radius 74.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

### Type=50%
- Root: ukuran 328.0x6.0
- `Assets / Track`: 328.0x6.0; radius 74.0; fill border-disabled-alt (#D9DBDD)
- `Assets / Active track`: 164.0x6.0; radius 74.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

### Type=75%
- Root: ukuran 328.0x6.0
- `Assets / Track`: 328.0x6.0; radius 74.0; fill border-disabled-alt (#D9DBDD)
- `Assets / Active track`: 246.0x6.0; radius 74.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

### Type=100%
- Root: ukuran 328.0x6.0
- `Assets / Track`: 328.0x6.0; radius 74.0; fill border-disabled-alt (#D9DBDD)
- `Assets / Active track`: 328.0x6.0; radius 74.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

### Type=Custom
- Root: ukuran 328.0x6.0
- `Track`: 328.0x6.0; radius 74.0; fill border-disabled-alt (#D9DBDD)
- `Track/Bar`: 33.0x6.0; gap 32.0; radius 4.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Track/Bar/Active`: 1.0x6.0; radius 74.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Track/Bar/Empty`: 0.0x6.0; radius 5.0

## Progress bar with label

3 varian. Properti:
- **Label**: Left, Both, Right

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Label=Left
- Root: ukuran 328.0x31.0; layout vertical; gap 8.0
- `Progress bar /Assets / Track`: 328.0x6.0; radius 74.0; fill border-disabled-alt (#D9DBDD)
- `Progress bar /Assets / Active track`: 82.0x6.0; radius 74.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- Teks `Left label` "Value": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

### Label=Both
- Root: ukuran 328.0x31.0; layout vertical; gap 8.0
- `Progress bar /Assets / Track`: 328.0x6.0; radius 74.0; fill border-disabled-alt (#D9DBDD)
- `Progress bar /Assets / Active track`: 82.0x6.0; radius 74.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- Teks `Container/Left label` "Min value": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- Teks `Container/Right label` "Max value": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

### Label=Right
- Root: ukuran 328.0x31.0; layout vertical; gap 8.0
- `Progress bar /Assets / Track`: 328.0x6.0; radius 74.0; fill border-disabled-alt (#D9DBDD)
- `Progress bar /Assets / Active track`: 82.0x6.0; radius 74.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- Teks `Frame 706/Right label` "Value": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

## Spinner

3 varian. Properti:
- **Size**: Small, Medium, Large

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Size=Small
- Root: ukuran 24.0x24.0
- `Base`: 18.0x18.0; fill border-disabled-alt (#D9DBDD)
- `Fill`: 18.0x18.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

### Size=Medium
- Root: ukuran 32.0x32.0
- `Base`: 24.0x24.0; fill border-disabled-alt (#D9DBDD)
- `Fill`: 24.0x24.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

### Size=Large
- Root: ukuran 44.0x44.0
- `Base`: 33.0x33.0; fill border-disabled-alt (#D9DBDD)
- `Fill`: 33.0x33.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
