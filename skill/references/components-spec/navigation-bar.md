# Navigation Bar

Sumber: Figma *Dokumentasi Seragam Mobile 3.0*, halaman `Navigation Bar` (node `9896:1677`).

## Menu Item

5 varian. Properti:
- **State**: Active, Pressed, Hover, Default, Focused

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### State=Active
- Root: ukuran 68.0x64.0; layout vertical; radius 4.0
- `Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- Teks `Contaier/Content/Menu` "Menu": Inter 16.0/24.0 w600 blue-70 (#0954D9)
- `Contaier/Active bar`: 44.0x4.0; radius [4.0, 4.0, 0.0, 0.0]; fill blue-70 (#0954D9)

### State=Pressed
- Root: ukuran 68.0x64.0; layout vertical; radius 4.0
- `Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0; fill legacy EFF0F0 = gray-5 (#EFF0F0)
- Teks `Contaier/Content/Menu` "Menu": Inter 16.0/24.0 w600 black (#000000)

### State=Hover
- Root: ukuran 68.0x64.0; layout vertical; radius 4.0
- `Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0; fill legacy EFF0F0 = gray-5 (#EFF0F0)
- Teks `Contaier/Content/Menu` "Menu": Inter 16.0/24.0 w600 gray-90 (#323232)

### State=Default
- Root: ukuran 68.0x64.0; layout vertical; radius 4.0
- `Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- Teks `Contaier/Content/Menu` "Menu": Inter 16.0/24.0 w600 gray-90 (#323232)

### State=Focused
- Root: ukuran 68.0x64.0; layout vertical; radius 4.0
- `Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0; fill white (#FFFFFF); stroke blue-50 (#2A7EFB) 2.0px
- Teks `Contaier/Content/Menu` "Menu": Inter 16.0/24.0 w600 gray-90 (#323232)

## Logo Area

2 varian. Properti:
- **Device**: Mobile, Desktop

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Device=Mobile
- Root: ukuran 156.0x48.0; layout horizontal; gap 12.0
- `Logo Jenama Primer 1`: 52.0x44.0; fill {'type': 'IMAGE'}

### Device=Desktop
- Root: ukuran 286.0x48.0; layout horizontal; gap 12.0
- `Logo Jenama Primer 1`: 52.0x44.0; fill {'type': 'IMAGE'}

## Menu Area

6 varian. Properti:
- **Item**: 1, 2, 3, 4, 5, 6

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Item=1
- Root: ukuran 68.0x64.0; layout vertical; gap 8.0
- `Menu Item`: 68.0x64.0; radius 4.0
- `Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- Teks `Menu Item/Contaier/Content/Menu` "Menu": Inter 16.0/24.0 w600 gray-90 (#323232)

### Item=2
- Root: ukuran 144.0x64.0; layout horizontal; gap 8.0
- `Menu Item`: 68.0x64.0; radius 4.0
- `Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- Teks `Menu Item/Contaier/Content/Menu` "Menu": Inter 16.0/24.0 w600 gray-90 (#323232)
- `Menu Item`: 68.0x64.0; radius 4.0
- `Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- Teks `Menu Item/Contaier/Content/Menu` "Menu": Inter 16.0/24.0 w600 gray-90 (#323232)

### Item=3
- Root: ukuran 220.0x64.0; layout horizontal; gap 8.0
- `Menu Item`: 68.0x64.0; radius 4.0
- `Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- Teks `Menu Item/Contaier/Content/Menu` "Menu": Inter 16.0/24.0 w600 gray-90 (#323232)
- `Menu Item`: 68.0x64.0; radius 4.0
- `Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- Teks `Menu Item/Contaier/Content/Menu` "Menu": Inter 16.0/24.0 w600 gray-90 (#323232)
- `Menu Item`: 68.0x64.0; radius 4.0
- `Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- Teks `Menu Item/Contaier/Content/Menu` "Menu": Inter 16.0/24.0 w600 gray-90 (#323232)

### Item=4
- Root: ukuran 296.0x64.0; layout horizontal; gap 8.0
- `Menu Item`: 68.0x64.0; radius 4.0
- `Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- Teks `Menu Item/Contaier/Content/Menu` "Menu": Inter 16.0/24.0 w600 gray-90 (#323232)
- `Menu Item`: 68.0x64.0; radius 4.0
- `Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- Teks `Menu Item/Contaier/Content/Menu` "Menu": Inter 16.0/24.0 w600 gray-90 (#323232)
- `Menu Item`: 68.0x64.0; radius 4.0
- `Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- Teks `Menu Item/Contaier/Content/Menu` "Menu": Inter 16.0/24.0 w600 gray-90 (#323232)
- `Menu Item`: 68.0x64.0; radius 4.0
- `Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- Teks `Menu Item/Contaier/Content/Menu` "Menu": Inter 16.0/24.0 w600 gray-90 (#323232)

### Item=5
- Root: ukuran 372.0x64.0; layout horizontal; gap 8.0
- `Menu Item`: 68.0x64.0; radius 4.0
- `Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- Teks `Menu Item/Contaier/Content/Menu` "Menu": Inter 16.0/24.0 w600 gray-90 (#323232)
- `Menu Item`: 68.0x64.0; radius 4.0
- `Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- Teks `Menu Item/Contaier/Content/Menu` "Menu": Inter 16.0/24.0 w600 gray-90 (#323232)
- `Menu Item`: 68.0x64.0; radius 4.0
- `Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- Teks `Menu Item/Contaier/Content/Menu` "Menu": Inter 16.0/24.0 w600 gray-90 (#323232)
- `Menu Item`: 68.0x64.0; radius 4.0
- `Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- Teks `Menu Item/Contaier/Content/Menu` "Menu": Inter 16.0/24.0 w600 gray-90 (#323232)
- `Menu Item`: 68.0x64.0; radius 4.0
- `Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- …

### Item=6
- Root: ukuran 448.0x64.0; layout horizontal; gap 8.0
- `Menu Item`: 68.0x64.0; radius 4.0
- `Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- Teks `Menu Item/Contaier/Content/Menu` "Menu": Inter 16.0/24.0 w600 gray-90 (#323232)
- `Menu Item`: 68.0x64.0; radius 4.0
- `Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- Teks `Menu Item/Contaier/Content/Menu` "Menu": Inter 16.0/24.0 w600 gray-90 (#323232)
- `Menu Item`: 68.0x64.0; radius 4.0
- `Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- Teks `Menu Item/Contaier/Content/Menu` "Menu": Inter 16.0/24.0 w600 gray-90 (#323232)
- `Menu Item`: 68.0x64.0; radius 4.0
- `Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- Teks `Menu Item/Contaier/Content/Menu` "Menu": Inter 16.0/24.0 w600 gray-90 (#323232)
- `Menu Item`: 68.0x64.0; radius 4.0
- `Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- …

## Action Area

4 varian. Properti:
- **Device**: Desktop
- **Item**: 0, 1, 2, 3

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Device=Desktop, Item=0
- Root: ukuran 217.0x48.0; layout horizontal; gap 12.0
- `Account/Button`: 84.0x40.0; gap 8.0; radius 4.0; fill legacy 2F3031 = gray-90 (#2F3031)
- `Account/Button/Assets / Button`: 84.0x40.0; pad 8.0 16.0; gap 4.0
- Teks `Account/Button/Assets / Button/Text` "Masuk": Inter 16.0/24.0 w600 white (#FFFFFF)
- `Button`: 121.0x40.0; gap 8.0; radius 4.0; stroke legacy 808489 = gray-50 (#808489) 1.0px
- `Button/Assets / Button`: 121.0x40.0; pad 8.0 16.0; gap 4.0
- Teks `Button/Assets / Button/Text` "CTA Button": Inter 16.0/24.0 w600 legacy 2F3031 = gray-90 (#2F3031)

### Device=Desktop, Item=1
- Root: ukuran 286.0x48.0; layout horizontal; gap 12.0
- `Action item Desktop/Icon Button`: 46.0x46.0; gap 8.0; radius 4.0
- `Account/Button`: 84.0x40.0; gap 8.0; radius 4.0; fill legacy 2F3031 = gray-90 (#2F3031)
- `Account/Button/Assets / Button`: 84.0x40.0; pad 8.0 16.0; gap 4.0
- Teks `Account/Button/Assets / Button/Text` "Masuk": Inter 16.0/24.0 w600 white (#FFFFFF)
- `Button`: 121.0x40.0; gap 8.0; radius 4.0; stroke legacy 808489 = gray-50 (#808489) 1.0px
- `Button/Assets / Button`: 121.0x40.0; pad 8.0 16.0; gap 4.0
- Teks `Button/Assets / Button/Text` "CTA Button": Inter 16.0/24.0 w600 legacy 2F3031 = gray-90 (#2F3031)

### Device=Desktop, Item=2
- Root: ukuran 286.0x48.0; layout horizontal; gap 12.0
- `Frame 1171280202/Action item Desktop/Icon Button`: 46.0x46.0; gap 8.0; radius 4.0
- `Frame 1171280202/Action item Desktop/Icon Button`: 46.0x46.0; gap 8.0; radius 4.0
- `Account/Button`: 84.0x40.0; gap 8.0; radius 4.0; fill legacy 2F3031 = gray-90 (#2F3031)
- `Account/Button/Assets / Button`: 84.0x40.0; pad 8.0 16.0; gap 4.0
- Teks `Account/Button/Assets / Button/Text` "Masuk": Inter 16.0/24.0 w600 white (#FFFFFF)
- `Button`: 121.0x40.0; gap 8.0; radius 4.0; stroke legacy 808489 = gray-50 (#808489) 1.0px
- `Button/Assets / Button`: 121.0x40.0; pad 8.0 16.0; gap 4.0
- Teks `Button/Assets / Button/Text` "CTA Button": Inter 16.0/24.0 w600 legacy 2F3031 = gray-90 (#2F3031)

### Device=Desktop, Item=3
- Root: ukuran 286.0x48.0; layout horizontal; gap 12.0
- `Frame 1171280202/Action item Desktop/Icon Button`: 46.0x46.0; gap 8.0; radius 4.0
- `Frame 1171280202/Action item Desktop/Icon Button`: 46.0x46.0; gap 8.0; radius 4.0
- `Frame 1171280202/Action item Desktop/Icon Button`: 46.0x46.0; gap 8.0; radius 4.0
- `Account/Button`: 84.0x40.0; gap 8.0; radius 4.0; fill legacy 2F3031 = gray-90 (#2F3031)
- `Account/Button/Assets / Button`: 84.0x40.0; pad 8.0 16.0; gap 4.0
- Teks `Account/Button/Assets / Button/Text` "Masuk": Inter 16.0/24.0 w600 white (#FFFFFF)
- `Button`: 121.0x40.0; gap 8.0; radius 4.0; stroke legacy 808489 = gray-50 (#808489) 1.0px
- `Button/Assets / Button`: 121.0x40.0; pad 8.0 16.0; gap 4.0
- Teks `Button/Assets / Button/Text` "CTA Button": Inter 16.0/24.0 w600 legacy 2F3031 = gray-90 (#2F3031)

## Action Area Mobile

2 varian. Properti:
- **Device**: Mobile
- **Item**: 1, 2

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Device=Mobile, Item=1
- Root: ukuran 156.0x48.0; layout horizontal

### Device=Mobile, Item=2
- Root: ukuran 156.0x48.0; layout horizontal

## Account

2 varian. Properti:
- **Type**: Login, Non Login

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Type=Login
- Root: ukuran 76.0x48.0; layout horizontal; padding 0 0 0 12.0; gap 4.0
- `Avatar/Base`: 36.0x36.0; fill border-disabled-alt (#D9DBDD); stroke border-subdued-alt (#C9CBCF) 1.0px
- Teks `Avatar/Initial` "AR": Inter 14.0/16.9 w700 ls 1.4 legacy 65686C = gray-60 (#65686C)

### Type=Non Login
- Root: ukuran 84.0x48.0; layout horizontal
- `Button`: 84.0x40.0; gap 8.0; radius 4.0; fill legacy 2F3031 = gray-90 (#2F3031)
- `Button/Assets / Button`: 84.0x40.0; pad 8.0 16.0; gap 4.0
- Teks `Button/Assets / Button/Text` "Masuk": Inter 16.0/24.0 w600 white (#FFFFFF)

## Action item Desktop

3 varian. Properti:
- **State**: Default, Focused, Hover

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### State=Default
- Root: ukuran 48.0x48.0; layout vertical
- `Icon Button`: 46.0x46.0; gap 8.0; radius 4.0

### State=Focused
- Root: ukuran 48.0x48.0; layout vertical
- `Icon Button`: 46.0x46.0; gap 8.0; radius 4.0; fill white (#FFFFFF); stroke legacy 4C8DF6 = blue-50 (#4C8DF6) 2.0px

### State=Hover
- Root: ukuran 48.0x48.0; layout vertical
- `Frame 1171280181/Icon Button`: 46.0x46.0; gap 8.0; radius 4.0; fill surface-subdued-alt (#F5F5F5)
- `Frame 1171280181/Assets / Tooltip/Container`: 59.0x36.0; pad 8.0; radius 4.0; fill legacy 2F3031 = gray-90 (#2F3031)
- Teks `Frame 1171280181/Assets / Tooltip/Container/Text` "Action": Inter 14.0/20.0 w400 white (#FFFFFF)

## Navbar/Navbar Desktop

4 varian. Properti:
- **Action Items**: True, False
- **Menu**: True, False

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Action Items=True, Menu=True
- Root: ukuran 1440.0x64.0; layout horizontal; gap 24.0; fill white (#FFFFFF); shadow 0.0px 1.0px 3.0px 0px rgba(0,0,0,0.1) | 0.0px 2.0px 1.0px -1.0px rgba(0,0,0,0.02) | 0.0px 1.0px 1.0px 0px rgba(0,0,0,0.08)
- `Container 1280`: 1280.0x64.0; pad 0 32.0; gap 24.0
- `Container 1280/Logo Area/Logo Jenama Primer 1`: 52.0x44.0; fill {'type': 'IMAGE'}
- `Container 1280/Menu Area/Menu Item`: 68.0x64.0; radius 4.0
- `Container 1280/Menu Area/Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- `Container 1280/Menu Area/Menu Item`: 68.0x64.0; radius 4.0
- `Container 1280/Menu Area/Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- `Container 1280/Menu Area/Menu Item`: 68.0x64.0; radius 4.0
- `Container 1280/Menu Area/Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- `Container 1280/Menu Area/Menu Item`: 68.0x64.0; radius 4.0
- `Container 1280/Menu Area/Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- `Container 1280/Menu Area/Menu Item`: 68.0x64.0; radius 4.0
- `Container 1280/Menu Area/Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- `Container 1280/Menu Area/Menu Item`: 68.0x64.0; radius 4.0
- `Container 1280/Menu Area/Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- …

### Action Items=False, Menu=True
- Root: ukuran 1440.0x64.0; layout horizontal; gap 24.0; fill white (#FFFFFF); shadow 0.0px 1.0px 3.0px 0px rgba(0,0,0,0.1) | 0.0px 2.0px 1.0px -1.0px rgba(0,0,0,0.02) | 0.0px 1.0px 1.0px 0px rgba(0,0,0,0.08)
- `Container 1280`: 1280.0x64.0; pad 0 32.0; gap 24.0
- `Container 1280/Logo Area/Logo Jenama Primer 1`: 52.0x44.0; fill {'type': 'IMAGE'}
- `Container 1280/Menu Area/Menu Item`: 68.0x64.0; radius 4.0
- `Container 1280/Menu Area/Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- `Container 1280/Menu Area/Menu Item`: 68.0x64.0; radius 4.0
- `Container 1280/Menu Area/Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- `Container 1280/Menu Area/Menu Item`: 68.0x64.0; radius 4.0
- `Container 1280/Menu Area/Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- `Container 1280/Menu Area/Menu Item`: 68.0x64.0; radius 4.0
- `Container 1280/Menu Area/Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- `Container 1280/Menu Area/Menu Item`: 68.0x64.0; radius 4.0
- `Container 1280/Menu Area/Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0
- `Container 1280/Menu Area/Menu Item`: 68.0x64.0; radius 4.0
- `Container 1280/Menu Area/Menu Item/Contaier`: 68.0x40.0; pad 8.0 12.0; gap 16.0; radius 4.0

### Action Items=True, Menu=False
- Root: ukuran 1440.0x64.0; layout horizontal; gap 24.0; fill white (#FFFFFF); shadow 0.0px 1.0px 3.0px 0px rgba(0,0,0,0.1) | 0.0px 2.0px 1.0px -1.0px rgba(0,0,0,0.02) | 0.0px 1.0px 1.0px 0px rgba(0,0,0,0.08)
- `Container 1280`: 1280.0x64.0; pad 0 32.0; gap 24.0
- `Container 1280/Logo Area/Logo Jenama Primer 1`: 52.0x44.0; fill {'type': 'IMAGE'}
- `Container 1280/Action Area/Action item Desktop/Icon Button`: 46.0x46.0; gap 8.0; radius 4.0
- `Container 1280/Action Area/Account/Button`: 84.0x40.0; gap 8.0; radius 4.0; fill legacy 2F3031 = gray-90 (#2F3031)
- `Container 1280/Action Area/Button`: 121.0x40.0; gap 8.0; radius 4.0; stroke legacy 808489 = gray-50 (#808489) 1.0px
- `Container 1280/Action Area/Button/Assets / Button`: 121.0x40.0; pad 8.0 16.0; gap 4.0

## Navbar/Navbar Mobile

2 varian. Properti:
- **Hamburger Menu**: Yes, No

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Hamburger Menu=Yes
- Root: ukuran 360.0x64.0; layout horizontal; gap 24.0; fill white (#FFFFFF)
- `Container 360`: 360.0x64.0; pad 0 16.0
- `Container 360/Frame 1171280205/Logo Jenama Primer 1`: 52.0x44.0; fill {'type': 'IMAGE'}

### Hamburger Menu=No
- Root: ukuran 360.0x64.0; layout vertical; fill white (#FFFFFF)
- `Container 360`: 360.0x64.0; pad 0 16.0
- `Container 360/Frame 1171280206/Logo Jenama Primer 1`: 52.0x44.0; fill {'type': 'IMAGE'}
