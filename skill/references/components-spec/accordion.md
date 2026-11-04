# Accordion

Sumber: Figma *Dokumentasi Seragam Mobile 3.0*, halaman `Accordion` (node `6471:24198`).

## Accordion

30 varian. Properti:
- **Style**: Card, Custom, List
- **State**: Default, Focus, Pressed
- **Collapse**: Off, On
- **Icon**: Off, On

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Style=Card, State=Default, Collapse=Off, Icon=Off
- Root: ukuran 328.0x56.0; layout horizontal; padding 16.0 12.0; gap 12.0; radius 4.0; fill white (#FFFFFF); stroke border-disabled-alt (#D9DBDD) 1.0px outside
- Teks `Label` "Label": Inter 17.0/22.0 w600 legacy 2F3031 = gray-90 (#2F3031)

### Style=Custom, State=Default, Collapse=Off, Icon=Off
- Root: ukuran 328.0x56.0; layout vertical; padding 0 0 16.0 0; gap 12.0; radius 4.0; fill white (#FFFFFF); stroke border-disabled-alt (#D9DBDD) 1.0px outside
- `Account`: 328.0x56.0; pad 16.0 12.0; gap 12.0; fill white (#FFFFFF); stroke border-disabled-alt (#D9DBDD) 1.0px
- Teks `Account/Label` "Label": Inter 17.0/22.0 w600 legacy 2F3031 = gray-90 (#2F3031)

### Style=List, State=Default, Collapse=Off, Icon=Off
- Root: ukuran 360.0x56.0; layout vertical; gap 4.0; stroke border-subdued-alt (#C9CBCF) 1.0px inside
- `Header`: 360.0x56.0; pad 16.0; gap 12.0; fill white (#FFFFFF)
- Teks `Header/Label` "Label": Inter 17.0/22.0 w600 legacy 2F3031 = gray-90 (#2F3031)

### Style=Card, State=Focus, Collapse=Off, Icon=Off
- Root: ukuran 328.0x56.0; layout horizontal; padding 16.0 12.0; gap 12.0; radius 4.0; fill white (#FFFFFF); stroke border-disabled-alt (#D9DBDD) 1.0px outside; shadow 0.0px 0.0px 0.0px 4.0px rgba(76,141,246,1.0) | 0.0px 0.0px 0.0px 2.0px rgba(255,255,255,1.0)
- Teks `Label` "Label": Inter 17.0/22.0 w600 legacy 2F3031 = gray-90 (#2F3031)

### Style=Card, State=Pressed, Collapse=Off, Icon=Off
- Root: ukuran 328.0x56.0; layout horizontal; padding 16.0 12.0; gap 12.0; radius 4.0; fill border-disabled-alt (#D9DBDD); stroke border-disabled-alt (#D9DBDD) 1.0px outside
- Teks `Label` "Label": Inter 17.0/22.0 w600 legacy 2F3031 = gray-90 (#2F3031)

### Style=Card, State=Default, Collapse=On, Icon=Off
- Root: ukuran 328.0x106.0; layout vertical; padding 0 0 16.0 0; gap 12.0; radius 4.0; fill white (#FFFFFF); stroke border-subdued-alt (#C9CBCF) 1.0px outside
- `Header`: 328.0x56.0; pad 16.0; gap 12.0; fill white (#FFFFFF); stroke border-subdued-alt (#C9CBCF) 1.0px
- Teks `Header/Label` "Label": Inter 17.0/22.0 w600 legacy 2F3031 = gray-90 (#2F3031)
- `Content`: 328.0x22.0; pad 0 16.0; gap 10.0
- Teks `Content/Description` "Description": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

### Style=Card, State=Default, Collapse=Off, Icon=On
- Root: ukuran 328.0x56.0; layout vertical; gap 4.0; radius 4.0; stroke border-subdued-alt (#C9CBCF) 1.0px outside
- `Header`: 328.0x56.0; pad 16.0; gap 12.0; fill white (#FFFFFF)
- Teks `Header/Label` "Label": Inter 17.0/22.0 w600 legacy 2F3031 = gray-90 (#2F3031)

## Style=List, State=Default, Collapse=Off, Icon=On - Tritanopia

- Root: ukuran 360.0x56.0; layout vertical; gap 4.0; stroke #C8CCCC 1.0px inside
- `Header`: 360.0x56.0; pad 16.0; gap 12.0; fill white (#FFFFFF)
- Teks `Header/Label` "Label": Inter 17.0/22.0 w600 #2F3030
- `Header/TrailingIcon Container/Trailing Icon`: 30.0x30.0; fill white (#FFFFFF)

## Style=List, State=Default, Collapse=Off, Icon=On - Protanopia

- Root: ukuran 360.0x56.0; layout vertical; gap 4.0; stroke #CACBCF 1.0px inside
- `Header`: 360.0x56.0; pad 16.0; gap 12.0; fill white (#FFFFFF)
- Teks `Header/Label` "Label": Inter 17.0/22.0 w600 #303031
- `Header/TrailingIcon Container/Trailing Icon`: 30.0x30.0; fill white (#FFFFFF)

## Style=List, State=Default, Collapse=Off, Icon=On - Deuteranopia

- Root: ukuran 360.0x56.0; layout vertical; gap 4.0; stroke border-subdued-alt (#C9CBCF) 1.0px inside
- `Header`: 360.0x56.0; pad 16.0; gap 12.0; fill white (#FFFFFF)
- Teks `Header/Label` "Label": Inter 17.0/22.0 w600 legacy 2F3031 = gray-90 (#2F3031)
- `Header/TrailingIcon Container/Trailing Icon`: 30.0x30.0; fill white (#FFFFFF)

## Style=List, State=Default, Collapse=Off, Icon=On - Achromatopsia

- Root: ukuran 360.0x56.0; layout vertical; gap 4.0; stroke #CBCBCB 1.0px inside
- `Header`: 360.0x56.0; pad 16.0; gap 12.0; fill white (#FFFFFF)
- Teks `Header/Label` "Label": Inter 17.0/22.0 w600 #303030
- `Header/TrailingIcon Container/Trailing Icon`: 30.0x30.0; fill white (#FFFFFF)
