# Select

Sumber: Figma *Dokumentasi Seragam Mobile 3.0*, halaman `Select` (node `165:988`).

## Select with label

3 varian. Properti:
- **Helper text**: No, Yes
- **Validation Error**: No, Yes

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Helper text=No, Validation Error=No
- Root: ukuran 328.0x72.0; layout vertical; gap 4.0
- Teks `Label` "Label": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Select/Text field`: 328.0x46.0; pad 12.0 16.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px
- Teks `Select/Text field/Label` "Choose an option": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

### Helper text=Yes, Validation Error=No
- Root: ukuran 328.0x90.0; layout vertical; gap 4.0
- Teks `Label` "Label": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Select/Text field`: 328.0x46.0; pad 12.0 16.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px
- Teks `Select/Text field/Label` "Choose an option": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- Teks `Helper text` "Helper text goes here": Inter 12.0/16.0 w400 legacy 65686C = gray-60 (#65686C)

### Helper text=No, Validation Error=Yes
- Root: ukuran 328.0x90.0; layout vertical; gap 4.0
- Teks `Label` "Label": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Select/Text field`: 328.0x46.0; pad 12.0 16.0; gap 8.0; radius 4.0; fill legacy FEF4F4 = red-5 (#FEF4F4); stroke legacy E02D38 = red-60 (#E02D38) 1.0px
- Teks `Select/Text field/Label` "Choose an option": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- Teks `Helper text` "Helper text goes here": Inter 12.0/16.0 w400 legacy E02D38 = red-60 (#E02D38)

## Select

4 varian. Properti:
- **State**: Default, Focused, Disabled, Error

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### State=Default
- Root: ukuran 328.0x46.0
- `Text field`: 328.0x46.0; pad 12.0 16.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px
- Teks `Text field/Label` "Choose an option": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

### State=Focused
- Root: ukuran 328.0x46.0
- `Text field`: 328.0x46.0; pad 12.0 16.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke legacy 4C8DF6 = blue-50 (#4C8DF6) 1.0px; shadow 0.0 0.0 0.0 2.0 rgba(76,141,246,1.0)
- Teks `Text field/Label` "Choose an option": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

### State=Disabled
- Root: ukuran 328.0x46.0
- `Text field`: 328.0x46.0; pad 12.0 16.0; gap 8.0; radius 4.0; fill badge-neutral (#EFEFEF); stroke border-disabled-alt (#D9DBDD) 1.0px
- Teks `Text field/Label` "Choose an option": Inter 15.0/22.0 w400 legacy 808489 = gray-50 (#808489)

### State=Error
- Root: ukuran 328.0x46.0
- `Text field`: 328.0x46.0; pad 12.0 16.0; gap 8.0; radius 4.0; fill legacy FEF4F4 = red-5 (#FEF4F4); stroke legacy E02D38 = red-60 (#E02D38) 1.0px
- Teks `Text field/Label` "Choose an option": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
