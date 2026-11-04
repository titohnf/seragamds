# Slider

Sumber: Figma *Dokumentasi Seragam Mobile 3.0*, halaman `Slider` (node `116:85`).

## Assets / Track

- Root: ukuran 328.0x6.0; radius 74.0; fill border-disabled-alt (#D9DBDD)

## Assets / Active track

- Root: ukuran 328.0x6.0; radius 74.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

## Assets / Handle

4 varian. Properti:
- **State**: Default, Hover, Focus, Disabled

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### State=Default
- Root: ukuran 28.0x28.0; shadow 0.0px 2.0px 4.0px 0px rgba(0,0,0,0.2)
- `Base`: 28.0x28.0; fill white (#FFFFFF)
- `Circle`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

### State=Hover
- Root: ukuran 28.0x28.0; shadow 0.0px 2.0px 4.0px 0px rgba(0,0,0,0.2)
- `Base`: 28.0x28.0; fill white (#FFFFFF); stroke legacy 4C8DF6 = blue-50 (#4C8DF6) 1.0px
- `Circle`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

### State=Focus
- Root: ukuran 28.0x28.0; shadow 0.0px 2.0px 4.0px 0px rgba(0,0,0,0.2)
- `Base`: 28.0x28.0; fill white (#FFFFFF); stroke legacy 4C8DF6 = blue-50 (#4C8DF6) 2.0px
- `Circle`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

### State=Disabled
- Root: ukuran 28.0x28.0; shadow 0.0px 2.0px 4.0px 0px rgba(0,0,0,0.2)
- `Base`: 28.0x28.0; fill badge-neutral (#EFEFEF)
- `Circle`: 12.0x12.0; fill #C8D6EE

## Single handle

10 varian. Properti:
- **Value**: 25%, 75%, 100%, 50%, Custom
- **Tick mark**: No, Yes

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Value=25%, Tick mark=No
- Root: ukuran 328.0x48.0
- Teks `Min value` "Min value": Inter 13.0/20.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- Teks `Max value` "Max value": Inter 13.0/20.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Track`: 328.0x6.0; radius 74.0; fill border-disabled-alt (#D9DBDD)
- `Active`: 82.0x6.0; radius 74.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Handle`: 28.0x28.0; shadow 0.0 2.0 4.0 0 rgba(0,0,0,0.2)
- `Handle/Base`: 28.0x28.0; fill white (#FFFFFF)
- `Handle/Circle`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

### Value=75%, Tick mark=No
- Root: ukuran 328.0x48.0
- Teks `Min value` "Min value": Inter 13.0/20.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- Teks `Max value` "Max value": Inter 13.0/20.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Track`: 328.0x6.0; radius 74.0; fill border-disabled-alt (#D9DBDD)
- `Active`: 246.0x6.0; radius 74.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Handle`: 28.0x28.0; shadow 0.0 2.0 4.0 0 rgba(0,0,0,0.2)
- `Handle/Base`: 28.0x28.0; fill white (#FFFFFF)
- `Handle/Circle`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

### Value=100%, Tick mark=No
- Root: ukuran 328.0x48.0
- Teks `Min value` "Min value": Inter 13.0/20.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- Teks `Max value` "Max value": Inter 13.0/20.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Track`: 328.0x6.0; radius 74.0; fill border-disabled-alt (#D9DBDD)
- `Tick`: 16.0x16.0; radius 93.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Tick`: 16.0x16.0; radius 93.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Tick`: 16.0x16.0; radius 93.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Active`: 328.0x6.0; radius 74.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Handle`: 28.0x28.0; shadow 0.0 2.0 4.0 0 rgba(0,0,0,0.2)
- `Handle/Base`: 28.0x28.0; fill white (#FFFFFF)
- `Handle/Circle`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

### Value=50%, Tick mark=No
- Root: ukuran 328.0x48.0
- Teks `Min value` "Min value": Inter 13.0/20.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- Teks `Max value` "Max value": Inter 13.0/20.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Track`: 328.0x6.0; radius 74.0; fill border-disabled-alt (#D9DBDD)
- `Active`: 164.0x6.0; radius 74.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Handle`: 28.0x28.0; shadow 0.0 2.0 4.0 0 rgba(0,0,0,0.2)
- `Handle/Base`: 28.0x28.0; fill white (#FFFFFF)
- `Handle/Circle`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

### Value=Custom, Tick mark=No
- Root: ukuran 328.0x48.0
- Teks `Min value` "Min value": Inter 13.0/20.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- Teks `Max value` "Max value": Inter 13.0/20.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Track`: 328.0x6.0; radius 74.0; fill border-disabled-alt (#D9DBDD)
- `Track/Bar`: 44.0x6.0; gap 44.0; radius 4.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Track/Bar/Active`: 0.0x6.0; radius 74.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Track/Bar/Knob`: 0.0x6.0; radius 5.0; fill white (#FFFFFF)
- `Track/Bar/Knob/Handle`: 28.0x28.0; shadow 0.0 2.0 4.0 0 rgba(0,0,0,0.2)

### Value=25%, Tick mark=Yes
- Root: ukuran 328.0x48.0
- Teks `Min value` "Min value": Inter 13.0/20.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- Teks `Max value` "Max value": Inter 13.0/20.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Track`: 328.0x6.0; radius 74.0; fill border-disabled-alt (#D9DBDD)
- `Tick`: 16.0x16.0; radius 93.0; fill border-disabled-alt (#D9DBDD)
- `Tick`: 16.0x16.0; radius 93.0; fill border-disabled-alt (#D9DBDD)
- `Tick`: 16.0x16.0; radius 93.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Active`: 82.0x6.0; radius 74.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Handle`: 28.0x28.0; shadow 0.0 2.0 4.0 0 rgba(0,0,0,0.2)
- `Handle/Base`: 28.0x28.0; fill white (#FFFFFF)
- `Handle/Circle`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

## Range

10 varian. Properti:
- **Value**: 25%, 50%, 75%, 100%, Custom
- **Tick mark**: No, Yes

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Value=25%, Tick mark=No
- Root: ukuran 328.0x48.0
- Teks `Min value` "Min value": Inter 13.0/20.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- Teks `Max value` "Max value": Inter 13.0/20.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Track`: 328.0x6.0; radius 74.0; fill border-disabled-alt (#D9DBDD)
- `Active`: 82.0x6.0; radius 74.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Handle`: 28.0x28.0; shadow 0.0 2.0 4.0 0 rgba(0,0,0,0.2)
- `Handle/Base`: 28.0x28.0; fill white (#FFFFFF)
- `Handle/Circle`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Handle`: 28.0x28.0; shadow 0.0 2.0 4.0 0 rgba(0,0,0,0.2)
- `Handle/Base`: 28.0x28.0; fill white (#FFFFFF)
- `Handle/Circle`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

### Value=50%, Tick mark=No
- Root: ukuran 328.0x48.0
- Teks `Min value` "Min value": Inter 13.0/20.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- Teks `Max value` "Max value": Inter 13.0/20.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Track`: 328.0x6.0; radius 74.0; fill border-disabled-alt (#D9DBDD)
- `Active`: 164.0x6.0; radius 74.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Handle`: 28.0x28.0; shadow 0.0 2.0 4.0 0 rgba(0,0,0,0.2)
- `Handle/Base`: 28.0x28.0; fill white (#FFFFFF)
- `Handle/Circle`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Handle`: 28.0x28.0; shadow 0.0 2.0 4.0 0 rgba(0,0,0,0.2)
- `Handle/Base`: 28.0x28.0; fill white (#FFFFFF)
- `Handle/Circle`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

### Value=75%, Tick mark=No
- Root: ukuran 328.0x48.0
- Teks `Min value` "Min value": Inter 13.0/20.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- Teks `Max value` "Max value": Inter 13.0/20.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Track`: 328.0x6.0; radius 74.0; fill border-disabled-alt (#D9DBDD)
- `Active`: 246.0x6.0; radius 74.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Handle`: 28.0x28.0; shadow 0.0 2.0 4.0 0 rgba(0,0,0,0.2)
- `Handle/Base`: 28.0x28.0; fill white (#FFFFFF)
- `Handle/Circle`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Handle`: 28.0x28.0; shadow 0.0 2.0 4.0 0 rgba(0,0,0,0.2)
- `Handle/Base`: 28.0x28.0; fill white (#FFFFFF)
- `Handle/Circle`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

### Value=100%, Tick mark=No
- Root: ukuran 328.0x48.0
- Teks `Min value` "Min value": Inter 13.0/20.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- Teks `Max value` "Max value": Inter 13.0/20.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Track`: 328.0x6.0; radius 74.0; fill border-disabled-alt (#D9DBDD)
- `Active`: 328.0x6.0; radius 74.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Handle`: 28.0x28.0; shadow 0.0 2.0 4.0 0 rgba(0,0,0,0.2)
- `Handle/Base`: 28.0x28.0; fill white (#FFFFFF)
- `Handle/Circle`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Handle`: 28.0x28.0; shadow 0.0 2.0 4.0 0 rgba(0,0,0,0.2)
- `Handle/Base`: 28.0x28.0; fill white (#FFFFFF)
- `Handle/Circle`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

### Value=Custom, Tick mark=No
- Root: ukuran 328.0x48.0
- `Track`: 328.0x6.0; pad 0 0 0 27.0; radius 74.0; fill border-disabled-alt (#D9DBDD)
- `Track/Range bar`: 136.0x6.0; pad 3.0 0; gap 136.0; radius 5.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Track/Range bar/Knob left/Handle`: 28.0x28.0; shadow 0.0 2.0 4.0 0 rgba(0,0,0,0.2)
- `Track/Range bar/Knob right/Handle`: 28.0x28.0; shadow 0.0 2.0 4.0 0 rgba(0,0,0,0.2)
- Teks `Min value` "Min value": Inter 13.0/20.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- Teks `Max value` "Max value": Inter 13.0/20.0 w400 legacy 2F3031 = gray-90 (#2F3031)

### Value=25%, Tick mark=Yes
- Root: ukuran 328.0x48.0
- Teks `Min value` "Min value": Inter 13.0/20.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- Teks `Max value` "Max value": Inter 13.0/20.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Track`: 328.0x6.0; radius 74.0; fill border-disabled-alt (#D9DBDD)
- `Tick`: 16.0x16.0; radius 93.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Tick`: 16.0x16.0; radius 93.0; fill border-disabled-alt (#D9DBDD)
- `Tick`: 16.0x16.0; radius 93.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Active`: 82.0x6.0; radius 74.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Handle`: 28.0x28.0; shadow 0.0 2.0 4.0 0 rgba(0,0,0,0.2)
- `Handle/Base`: 28.0x28.0; fill white (#FFFFFF)
- `Handle/Circle`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Handle`: 28.0x28.0; shadow 0.0 2.0 4.0 0 rgba(0,0,0,0.2)
- `Handle/Base`: 28.0x28.0; fill white (#FFFFFF)
- `Handle/Circle`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

## Assets / Tick mark

2 varian. Properti:
- **State**: Default, Active

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### State=Default
- Root: ukuran 16.0x16.0; radius 93.0; fill border-disabled-alt (#D9DBDD)

### State=Active
- Root: ukuran 16.0x16.0; radius 93.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
