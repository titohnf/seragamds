# Search

Sumber: Figma *Dokumentasi Seragam Mobile 3.0*, halaman `Search` (node `10296:3511`).

## Search Bar 3.0

7 varian. Properti:
- **State**: Default, Hovered, Foccused, Filled, Pressed, Error, Dissabled

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### State=Default
- Root: ukuran 328.0x46.0; layout horizontal; padding 0 0 0 12.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke gray-30 (#ADADAD) 1.0px inside
- Teks `Label/Label` "Input placeholder": Inter 15.0/22.0 w400 gray-60 (#727272)
- `Icon Button`: 46.0x46.0; gap 8.0; radius [0.0, 4.0, 4.0, 0.0]; stroke gray-30 (#ADADAD) 1.0px

### State=Hovered
- Root: ukuran 328.0x46.0; layout horizontal; padding 0 0 0 12.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke gray-30 (#ADADAD) 1.0px inside
- Teks `Label/Label` "Input placeholder": Inter 15.0/22.0 w400 gray-60 (#727272)
- `Icon Button`: 46.0x46.0; gap 8.0; radius [0.0, 4.0, 4.0, 0.0]; fill legacy EFF0F0 = gray-5 (#EFF0F0); stroke gray-30 (#ADADAD) 1.0px

### State=Foccused
- Root: ukuran 328.0x46.0; layout horizontal; padding 0 0 0 12.0; gap 12.0; radius 4.0; fill white (#FFFFFF); stroke blue-50 (#2A7EFB) 2.0px inside
- Teks `Label/Label` "Lorem Ipsum|": Inter 15.0/22.0 w400 gray-90 (#323232)
- `Icon Button`: 46.0x46.0; gap 8.0; radius [0.0, 4.0, 4.0, 0.0]; fill white (#FFFFFF); stroke blue-50 (#2A7EFB) 2.0px

### State=Filled
- Root: ukuran 328.0x46.0; layout horizontal; padding 0 0 0 12.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke gray-30 (#ADADAD) 1.0px inside
- Teks `Label/Label` "Input placeholder": Inter 15.0/22.0 w400 gray-90 (#323232)
- `Icon Button`: 46.0x46.0; gap 8.0; radius [0.0, 4.0, 4.0, 0.0]; stroke gray-30 (#ADADAD) 1.0px

### State=Pressed
- Root: ukuran 328.0x46.0; layout horizontal; padding 0 0 0 12.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke gray-30 (#ADADAD) 1.0px inside
- Teks `Label/Label` "Input placeholder": Inter 15.0/22.0 w400 gray-60 (#727272)
- `Icon Button`: 46.0x46.0; gap 8.0; radius [0.0, 4.0, 4.0, 0.0]; stroke gray-30 (#ADADAD) 1.0px

### State=Error
- Root: ukuran 328.0x66.0; layout vertical; gap 4.0
- `Search Field/Option 1/Empty`: 328.0x46.0; pad 0 0 0 12.0; gap 138.0; radius 4.0; fill red-5 (#FEEDF2); stroke red-60 (#DF2121) 1.0px
- Teks `Search Field/Option 1/Empty/Label/Label` "Input placeholder": Inter 15.0/22.0 w400 gray-90 (#323232)
- `Search Field/Option 1/Empty/Icon Button`: 46.0x46.0; gap 8.0; radius [0.0, 4.0, 4.0, 0.0]; stroke gray-30 (#ADADAD) 1.0px
- Teks `Helper text` "Helper text goes here": Inter 12.0/16.0 w400 red-60 (#DF2121)

### State=Dissabled
- Root: ukuran 328.0x46.0; layout horizontal; padding 0 0 0 12.0; gap 8.0; radius 4.0; fill gray-5 (#F1F1F1); stroke gray-20 (#C7C7C7) 1.0px inside
- Teks `Label/Label` "Input placeholder": Inter 15.0/22.0 w400 gray-50 (#828282)
- `Icon Button`: 46.0x46.0; gap 8.0; radius [0.0, 4.0, 4.0, 0.0]

## Label

2 varian. Properti:
- **Close**: Yes, No

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Close=Yes
- Root: ukuran 260.0x24.0; layout horizontal; gap 8.0
- Teks `Label` "Input placeholder": Inter 15.0/22.0 w400 gray-90 (#323232)

### Close=No
- Root: ukuran 124.0x24.0; layout horizontal; gap 8.0
- Teks `Label` "Input placeholder": Inter 15.0/22.0 w400 gray-60 (#727272)

## Popular List

- Root: ukuran 328.0x178.0; layout vertical; gap 20.0
- Teks `Paling sering dicari` "Paling sering dicari": Inter 16.0/22.0 w600 black (#000000)
- Teks `Frame 572/Frame 568/Pelatihan implementasi kurikulum` "Pelatihan implementasi kurikulum": Inter 15.0/22.0 w400 black (#000000)
- Teks `Frame 572/Frame 569/Kurikulum merdeka belajar` "Kurikulum merdeka belajar": Inter 15.0/22.0 w400 black (#000000)
- Teks `Frame 572/Frame 570/Pembelajaran Berbasis Literas Digital` "Pembelajaran Berbasis Literas Digital": Inter 15.0/22.0 w400 black (#000000)
- Teks `Frame 572/Frame 571/Mengubah Masalah Asesmen Menjadi Berkah` "Mengubah Masalah Asesmen Menjadi Berkah": Inter 15.0/22.0 w400 black (#000000)
