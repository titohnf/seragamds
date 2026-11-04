# Responsive Text Field

Sumber: Figma *Dokumentasi Seragam Mobile 3.0*, halaman `Responsive Text Field` (node `9551:4674`).

## Text field

15 varian. Properti:
- **State**: Default, Filled, Focused, Disabled, Error
- **Left icon**: False, True
- **Right icon**: False, True

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### State=Default, Left icon=False, Right icon=False
- Root: ukuran 328.0x46.0; layout horizontal; padding 12.0 16.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px inside
- Teks `Label` "Input placeholder": Inter 15.0/22.0 w400 legacy 808489 = gray-50 (#808489)

### State=Filled, Left icon=False, Right icon=False
- Root: ukuran 328.0x46.0; layout horizontal; padding 12.0 16.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px inside
- Teks `Label` "Input filled": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

### State=Focused, Left icon=False, Right icon=False
- Root: ukuran 328.0x46.0; layout horizontal; padding 12.0 16.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke legacy 4C8DF6 = blue-50 (#4C8DF6) 1.0px inside; shadow 0.0px 0.0px 0.0px 2.0px rgba(76,141,246,1.0)
- Teks `Label` "Input filled|": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

### State=Disabled, Left icon=False, Right icon=False
- Root: ukuran 328.0x46.0; layout horizontal; padding 12.0 16.0; gap 8.0; radius 4.0; fill badge-neutral (#EFEFEF); stroke border-disabled-alt (#D9DBDD) 1.0px inside
- Teks `Label` "Input placeholder": Inter 15.0/22.0 w400 legacy 808489 = gray-50 (#808489)

### State=Error, Left icon=False, Right icon=False
- Root: ukuran 328.0x46.0; layout horizontal; padding 12.0 16.0; gap 8.0; radius 4.0; fill legacy FEF4F4 = red-5 (#FEF4F4); stroke legacy E02D38 = red-60 (#E02D38) 1.0px inside
- Teks `Label` "Input placeholder": Inter 15.0/22.0 w400 legacy 808489 = gray-50 (#808489)

### State=Default, Left icon=True, Right icon=False
- Root: ukuran 328.0x46.0; layout horizontal; padding 12.0 16.0 12.0 12.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px inside
- Teks `Label` "Input placeholder": Inter 15.0/22.0 w400 legacy 808489 = gray-50 (#808489)

### State=Default, Left icon=False, Right icon=True
- Root: ukuran 328.0x46.0; layout horizontal; padding 12.0 12.0 12.0 16.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px inside
- Teks `Label` "Input placeholder": Inter 15.0/22.0 w400 legacy 808489 = gray-50 (#808489)

## Text area

5 varian. Properti:
- **State**: Default, Focused, Disabled, Error, Filled

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### State=Default
- Root: ukuran 328.0x102.0; layout vertical; padding 12.0 16.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px inside
- Teks `Label` "Input placeholder": Inter 15.0/22.0 w400 legacy 808489 = gray-50 (#808489)

### State=Focused
- Root: ukuran 328.0x102.0; layout vertical; padding 12.0 16.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke legacy 4C8DF6 = blue-50 (#4C8DF6) 1.0px inside; shadow 0.0px 0.0px 0.0px 2.0px rgba(76,141,246,1.0)
- Teks `Label` "Input filled|": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

### State=Disabled
- Root: ukuran 328.0x102.0; layout vertical; padding 12.0 16.0; gap 8.0; radius 4.0; fill badge-neutral (#EFEFEF); stroke border-disabled-alt (#D9DBDD) 1.0px inside
- Teks `Label` "Input placeholder": Inter 15.0/22.0 w400 legacy 808489 = gray-50 (#808489)

### State=Error
- Root: ukuran 328.0x102.0; layout vertical; padding 12.0 16.0; gap 8.0; radius 4.0; fill legacy FEF4F4 = red-5 (#FEF4F4); stroke legacy E02D38 = red-60 (#E02D38) 1.0px inside
- Teks `Label` "Input placeholder": Inter 15.0/22.0 w400 legacy 808489 = gray-50 (#808489)

### State=Filled
- Root: ukuran 328.0x102.0; layout vertical; padding 12.0 16.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px inside
- Teks `Label` "Input filled": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

## Text field with label

7 varian. Properti:
- **Helper text**: No, Left, Left & right, Right
- **Validation error**: False, True

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Helper text=No, Validation error=False
- Root: ukuran 328.0x72.0; layout vertical; gap 4.0
- Teks `Label` "Label": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Text field`: 328.0x46.0; pad 12.0 16.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px
- Teks `Text field/Label` "Input placeholder": Inter 15.0/22.0 w400 legacy 808489 = gray-50 (#808489)

### Helper text=Left, Validation error=False
- Root: ukuran 328.0x92.0; layout vertical; gap 4.0
- Teks `Label` "Label": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Text field`: 328.0x46.0; pad 12.0 16.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px
- Teks `Text field/Label` "Input placeholder": Inter 15.0/22.0 w400 legacy 808489 = gray-50 (#808489)
- Teks `Helper text` "Helper text goes here": Inter 12.0/16.0 w400 legacy 65686C = gray-60 (#65686C)

### Helper text=Left & right, Validation error=False
- Root: ukuran 328.0x92.0; layout vertical; gap 4.0
- Teks `Label` "Label": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Text field`: 328.0x46.0; pad 12.0 16.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px
- Teks `Text field/Label` "Input placeholder": Inter 15.0/22.0 w400 legacy 808489 = gray-50 (#808489)
- Teks `Helper/Helper text` "Helper text goes here": Inter 12.0/16.0 w400 legacy 65686C = gray-60 (#65686C)
- Teks `Helper/Right helper text` "0/100": Inter 12.0/16.0 w400 legacy 65686C = gray-60 (#65686C)

### Helper text=Right, Validation error=False
- Root: ukuran 328.0x92.0; layout vertical; gap 4.0
- Teks `Label` "Label": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Text field`: 328.0x46.0; pad 12.0 16.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px
- Teks `Text field/Label` "Input placeholder": Inter 15.0/22.0 w400 legacy 808489 = gray-50 (#808489)
- Teks `Helper/Right helper text` "0/100": Inter 12.0/16.0 w400 legacy 65686C = gray-60 (#65686C)

## Text area with label

7 varian. Properti:
- **Helper text**: No, Left, Left & right, Right
- **Validation Error**: False, True

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Helper text=No, Validation Error=False
- Root: ukuran 328.0x128.0; layout vertical; gap 4.0
- Teks `Label` "Label": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Text area`: 328.0x102.0; pad 12.0 16.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px
- Teks `Text area/Label` "Input placeholder": Inter 15.0/22.0 w400 legacy 808489 = gray-50 (#808489)

### Helper text=Left, Validation Error=False
- Root: ukuran 328.0x148.0; layout vertical; gap 4.0
- Teks `Label` "Label": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Text area`: 328.0x102.0; pad 12.0 16.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px
- Teks `Text area/Label` "Input placeholder": Inter 15.0/22.0 w400 legacy 808489 = gray-50 (#808489)
- Teks `Helper text` "Helper text goes here": Inter 12.0/16.0 w400 legacy 65686C = gray-60 (#65686C)

### Helper text=Left & right, Validation Error=False
- Root: ukuran 328.0x148.0; layout vertical; gap 4.0
- Teks `Label` "Label": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Text area`: 328.0x102.0; pad 12.0 16.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px
- Teks `Text area/Label` "Input placeholder": Inter 15.0/22.0 w400 legacy 808489 = gray-50 (#808489)
- Teks `Helper/Helper text` "Helper text goes here": Inter 12.0/16.0 w400 legacy 65686C = gray-60 (#65686C)
- Teks `Helper/Right helper text` "0/100": Inter 12.0/16.0 w400 legacy 65686C = gray-60 (#65686C)

### Helper text=Right, Validation Error=False
- Root: ukuran 328.0x148.0; layout vertical; gap 4.0
- Teks `Label` "Label": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Text area`: 328.0x102.0; pad 12.0 16.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke legacy 808489 = gray-50 (#808489) 1.0px
- Teks `Text area/Label` "Input placeholder": Inter 15.0/22.0 w400 legacy 808489 = gray-50 (#808489)
- Teks `Helper/Right helper text` "0/100": Inter 12.0/16.0 w400 legacy 65686C = gray-60 (#65686C)
