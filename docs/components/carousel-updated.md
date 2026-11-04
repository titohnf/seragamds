# Carousel updated

Sumber: Figma *Dokumentasi Seragam Mobile 3.0*, halaman `Carousel updated` (node `9635:1996`).

## content-carousel

- Root: ukuran 360.0x200.0; fill #D2D2D2 / {'type': 'IMAGE'}

## frame_content-carousel

2 varian. Properti:
- **Autolayout**: No, Yes

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Autolayout=No
- Root: ukuran 360.0x200.0
- `content-carousel`: 360.0x200.0; fill #D2D2D2 / {'type': 'IMAGE'}

### Autolayout=Yes
- Root: ukuran 360.0x200.0; layout horizontal; gap 10.0
- `content-carousel`: 360.0x200.0; fill #D2D2D2 / {'type': 'IMAGE'}

## test-image-1

- Root: ukuran 275.0x183.0
- `image 1`: 275.0x183.0; fill {'type': 'IMAGE'}

## test-image-2

- Root: ukuran 275.0x183.0
- `image 2`: 275.0x183.0; fill {'type': 'IMAGE'}

## test-image-3

- Root: ukuran 326.0x154.0
- `image 3`: 326.0x154.0; fill {'type': 'IMAGE'}

## nav-carousel

2 varian. Properti:
- **Variant**: Light, Dark

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Variant=Light
- Root: ukuran 28.0x28.0; layout horizontal; padding 2.0; gap 10.0; radius 99.0; fill white (#FFFFFF)

### Variant=Dark
- Root: ukuran 28.0x28.0; layout horizontal; padding 2.0; gap 10.0; radius 99.0; fill gray-90 (#323232)

## content-carousel-card

- Root: ukuran 300.0x192.0; layout horizontal; gap 12.0; radius 8.0
- `Frame 5`: 300.0x192.0; pad 12.0 0; gap 10.0
- `Frame 5/Frame 4`: 300.0x168.0; pad 16.0; gap 12.0; radius 8.0; fill white (#FFFFFF); stroke gray-20 (#C7C7C7) 1.0px
- `Frame 5/Frame 4/Rectangle 1`: 80.0x80.0; radius 4.0; fill {'type': 'IMAGE'}
- Teks `Frame 5/Frame 4/Frame 2/This is a Title, For This Example Card` "This is a Title, For This Example Card": Inter 18.0/24.0 w600 gray-90 (#323232)
- Teks `Frame 5/Frame 4/Frame 2/lorem ipsum dolor sit amet lorem ipsum dolor` "lorem ipsum dolor sit amet lorem ipsum dolor": Inter 15.0/22.0 w400 gray-60 (#727272)
- `Frame 5/Frame 4/Frame 2/Button`: 69.0x28.0; gap 8.0; radius 4.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

## content-carousel-card-2

- Root: ukuran 592.0x186.0; layout horizontal; padding 16.0; gap 12.0; radius 8.0; fill white (#FFFFFF)
- `Frame 3/Rectangle 1`: 170.0x154.0; radius 4.0; fill {'type': 'IMAGE'}
- Teks `Frame 2/This is a Title, For This Example Card` "This is a Title, For This Example Card": Inter 18.0/24.0 w600 gray-90 (#323232)
- Teks `Frame 2/This is an eyebrow of this card` "This is an eyebrow of this card": Inter 12.0/16.0 w400 gray-60 (#727272)
- Teks `Frame 2/lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet` "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ": Inter 15.0/22.0 w400 gray-90 (#323232)
- `Frame 2/Button`: 89.0x46.0; gap 8.0; radius 4.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Frame 2/Button/Assets / Button`: 89.0x46.0; pad 12.0 20.0; gap 4.0
- Teks `Frame 2/Button/Assets / Button/Text` "Button": Inter 15.0/22.0 w600 white (#FFFFFF)

## content-carousel-card-v2

- Root: ukuran 288.0x184.0; layout horizontal; gap 12.0; radius 8.0
- `Frame 5`: 288.0x184.0; pad 12.0 0; gap 10.0
- `Frame 5/Frame 4`: 288.0x160.0; pad 16.0; gap 12.0; radius 8.0; fill white (#FFFFFF); stroke gray-20 (#C7C7C7) 1.0px
- `Frame 5/Frame 4/Rectangle 1`: 80.0x80.0; radius 4.0; fill {'type': 'IMAGE'}
- Teks `Frame 5/Frame 4/Frame 2/This is a Title, For This Example Card` "This is a Title, For This Example Card": Inter 16.0/22.0 w600 gray-90 (#323232)
- Teks `Frame 5/Frame 4/Frame 2/lorem ipsum dolor sit amet lorem ipsum dolor` "lorem ipsum dolor sit amet lorem ipsum dolor": Inter 13.0/20.0 w400 gray-60 (#727272)
- `Frame 5/Frame 4/Frame 2/Button`: 69.0x28.0; gap 8.0; radius 4.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

## Assets / Toggle

8 varian. Properti:
- **State**: Default, Hover, Focused, Active
- **Color**: White, Dark

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### State=Default, Color=White
- Root: ukuran 20.0x20.0
- `Base`: 12.0x12.0; stroke legacy 808489 = gray-50 (#808489) 1.0px

### State=Hover, Color=White
- Root: ukuran 20.0x20.0
- `Base`: 12.0x12.0; stroke legacy 4C8DF6 = blue-50 (#4C8DF6) 1.0px

### State=Focused, Color=White
- Root: ukuran 20.0x20.0
- `Base`: 12.0x12.0; stroke legacy 808489 = gray-50 (#808489) 1.0px; shadow 0.0 0.0 0.0 2.0 rgba(76,141,246,1.0)

### State=Active, Color=White
- Root: ukuran 20.0x20.0
- `Base`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)

### State=Default, Color=Dark
- Root: ukuran 20.0x20.0
- `Base`: 12.0x12.0; stroke border-subdued-alt (#C9CBCF) 1.0px

## Indicator

10 varian. Properti:
- **Type**: 02, 03, 04
- **Color**: White, Dark
- **Background**: Default, White

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Type=02, Color=White, Background=Default
- Root: ukuran 40.0x20.0; layout horizontal
- `Assets / Toggle/Base`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Assets / Toggle/Base`: 12.0x12.0; stroke legacy 808489 = gray-50 (#808489) 1.0px

### Type=03, Color=White, Background=Default
- Root: ukuran 60.0x20.0; layout horizontal
- `Assets / Toggle/Base`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Assets / Toggle/Base`: 12.0x12.0; stroke legacy 808489 = gray-50 (#808489) 1.0px
- `Assets / Toggle/Base`: 12.0x12.0; stroke legacy 808489 = gray-50 (#808489) 1.0px

### Type=04, Color=White, Background=Default
- Root: ukuran 80.0x20.0; layout horizontal
- `Assets / Toggle/Base`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Assets / Toggle/Base`: 12.0x12.0; stroke legacy 808489 = gray-50 (#808489) 1.0px
- `Assets / Toggle/Base`: 12.0x12.0; stroke legacy 808489 = gray-50 (#808489) 1.0px
- `Assets / Toggle/Base`: 12.0x12.0; stroke legacy 808489 = gray-50 (#808489) 1.0px

### Type=02, Color=Dark, Background=Default
- Root: ukuran 40.0x20.0; layout horizontal
- `Assets / Toggle/Base`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF); stroke border-subdued-alt (#C9CBCF) 1.0px
- `Assets / Toggle/Base`: 12.0x12.0; stroke border-subdued-alt (#C9CBCF) 1.0px

### Type=02, Color=White, Background=White
- Root: ukuran 40.0x20.0; layout horizontal; radius 8.0; fill white (#FFFFFF) @50%
- `Assets / Toggle/Base`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF)
- `Assets / Toggle/Base`: 12.0x12.0; stroke legacy 808489 = gray-50 (#808489) 1.0px

## Carousel

- Root: ukuran 360.0x200.0; fill legacy 2F3031 = gray-90 (#2F3031)
- `Indicator/Assets / Toggle/Base`: 12.0x12.0; fill legacy 0B5FEF = blue-70 (#0B5FEF); stroke border-subdued-alt (#C9CBCF) 1.0px
- `Indicator/Assets / Toggle/Base`: 12.0x12.0; stroke border-subdued-alt (#C9CBCF) 1.0px
- `Indicator/Assets / Toggle/Base`: 12.0x12.0; stroke border-subdued-alt (#C9CBCF) 1.0px
- `Indicator/Assets / Toggle/Base`: 12.0x12.0; stroke border-subdued-alt (#C9CBCF) 1.0px

## carousel

4 varian. Properti:
- **variant**: cover, default, normal-left, story-like

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### variant=cover
- Root: ukuran 360.0x200.0; fill #FAFAFA
- `container-carousel`: 360.0x600.0; fill #DDDDDD
- `container-carousel/frame_content-carousel/content-carousel`: 360.0x200.0; fill #D2D2D2 / {'type': 'IMAGE'}
- `container-carousel/frame_content-carousel/content-carousel`: 360.0x200.0; fill #D2D2D2 / {'type': 'IMAGE'}
- `container-carousel/frame_content-carousel/content-carousel`: 360.0x200.0; fill #D2D2D2 / {'type': 'IMAGE'}
- `nav-carousel`: 28.0x28.0; pad 2.0; gap 10.0; radius 99.0; fill white (#FFFFFF)
- `nav-carousel`: 28.0x28.0; pad 2.0; gap 10.0; radius 99.0; fill white (#FFFFFF)

### variant=default
- Root: ukuran 360.0x200.0; fill #FAFAFA
- `container-carousel`: 360.0x600.0; fill #DDDDDD
- `container-carousel/frame_content-carousel/content-carousel`: 360.0x200.0; fill #D2D2D2 / {'type': 'IMAGE'}
- `container-carousel/frame_content-carousel/content-carousel`: 360.0x200.0; fill #D2D2D2 / {'type': 'IMAGE'}
- `container-carousel/frame_content-carousel/content-carousel`: 360.0x200.0; fill #D2D2D2 / {'type': 'IMAGE'}
- `nav-carousel`: 28.0x28.0; pad 2.0; gap 10.0; radius 99.0; fill white (#FFFFFF)
- `nav-carousel`: 28.0x28.0; pad 2.0; gap 10.0; radius 99.0; fill white (#FFFFFF)

### variant=normal-left
- Root: ukuran 360.0x200.0
- `container-carousel`: 360.0x200.0; pad 0 20.0; gap 12.0
- `container-carousel/frame_content-carousel/content-carousel-card`: 320.0x200.0; gap 12.0; radius 8.0
- `container-carousel/frame_content-carousel/content-carousel-card/Frame 5`: 320.0x192.0; pad 12.0 0; gap 10.0
- `container-carousel/frame_content-carousel/content-carousel-card`: 320.0x200.0; gap 12.0; radius 8.0
- `container-carousel/frame_content-carousel/content-carousel-card/Frame 5`: 320.0x192.0; pad 12.0 0; gap 10.0
- `container-carousel/frame_content-carousel/content-carousel-card`: 320.0x200.0; gap 12.0; radius 8.0
- `container-carousel/frame_content-carousel/content-carousel-card/Frame 5`: 320.0x192.0; pad 12.0 0; gap 10.0
- `container-carousel/frame_content-carousel/content-carousel-card`: 320.0x200.0; gap 12.0; radius 8.0
- `container-carousel/frame_content-carousel/content-carousel-card/Frame 5`: 320.0x192.0; pad 12.0 0; gap 10.0
- `container-carousel/frame_content-carousel/content-carousel-card`: 320.0x200.0; gap 12.0; radius 8.0
- `container-carousel/frame_content-carousel/content-carousel-card/Frame 5`: 320.0x192.0; pad 12.0 0; gap 10.0
- `container-carousel/frame_content-carousel/content-carousel-card`: 320.0x200.0; gap 12.0; radius 8.0
- `container-carousel/frame_content-carousel/content-carousel-card/Frame 5`: 320.0x192.0; pad 12.0 0; gap 10.0
- `container-carousel/frame_content-carousel/content-carousel-card`: 320.0x200.0; gap 12.0; radius 8.0
- …

### variant=story-like
- Root: ukuran 360.0x200.0; fill #FAFAFA
- `frame-outer/frame-inner/container-carousel`: 360.0x600.0; fill #DDDDDD
- `frame-outer/frame-inner/nav-carousel`: 28.0x28.0; pad 2.0; gap 10.0; radius 99.0; fill white (#FFFFFF)
- `frame-outer/frame-inner/nav-carousel`: 28.0x28.0; pad 2.0; gap 10.0; radius 99.0; fill white (#FFFFFF)
