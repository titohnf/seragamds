/**
 * Token Seragam (Figma: Seragam Dasar, koleksi Semantic dan Primitive, mode 1).
 * Semua nilai di bawah dibaca langsung dari Figma.
 */
export const color = {
  // text
  textDefault: '#323232',   // text/default = Gray/90
  textSubdued: '#727272',   // text/subdued = Gray/60
  textDisabled: '#828282',  // text/disabled = Gray/50
  textInverse: '#FFFFFF',   // text/inverse = White
  // action dan interactive
  actionDefault: '#0954D9', // action/default = Blue/70
  actionHovered: '#0746BD', // action/hovered = Blue/80
  focus: '#2A7EFB',         // interactive/focused = Blue/50
  // surface dan background
  background: '#F9F9F9',    // background/default = Gray/0
  surfaceDefault: '#FFFFFF',// surface/default = White
  surfaceSubdued: '#F1F1F1',// surface/subdued = Gray/5
  surfaceSelected: '#E6F1FF',// surface/selected/default = Blue/5
  surfaceHovered: '#D8D8D8',// surface/hovered = Gray/10
  // border
  borderHigh: '#5E5E5E',    // border/high = Gray/70
  border: '#828282',        // border/default = Gray/50
  borderSubdued: '#ADADAD', // border/subdued = Gray/30
  borderDisabled: '#C7C7C7',// border/disabled = Gray/20
  // status
  critical: '#DF2121',      // border/critical, text/critical = Red/60
  criticalSurface: '#FEEDF2',// surface/critical/default = Red/5
  success: '#268326',       // text/success = Green/60
  successSurface: '#E2F5E0',// surface/success/default = Green/5
  informationalSurface: '#E3F4FC', // surface/informational/default = Cyan/5
  warningText: '#8B5104',   // text/warning = Yellow/70
} as const;

/**
 * Tipografi (Figma Seragam Dasar, Inter). Ukuran mengikuti PLATFORM, bukan nilai tetap:
 * skala Mobile di layar kecil dan skala Desktop di layar lebar (lihat keputusan 2026-11-11 di DECISIONS).
 * Nilainya berupa variabel CSS `--sd-text-<nama>-{size,line,weight}` (tokens/seragam.css) yang berganti menurut
 * atribut `data-sd-platform` (`auto` bawaan: Desktop mulai lebar 1024px; `desktop`; `mobile`). Jangan menulis ukuran angka.
 *   body 15/22 ↔ 16/24 · bodysmall 13/20 ↔ 14/20 · action 15/22 ↔ 16/24 semibold · subheading 13/16 ↔ 14/16
 *   headingsmall 16/22 ↔ 17/22 · headingmedium 18/24 ↔ 19/24 · headinglarge 22/28 · displaysmall 24/28 (sama).
 */
export type TextName = 'headingLarge' | 'headingMedium' | 'headingSmall' | 'subHeading' | 'action' | 'body' | 'bodySmall' | 'bodySmallBold' | 'helper' | 'helperBold' | 'displaySmall' | 'displayMedium' | 'displayLarge';
const TOKEN: Record<TextName, string> = {
  headingLarge: 'headinglarge', headingMedium: 'headingmedium', headingSmall: 'headingsmall', subHeading: 'subheading', action: 'action', body: 'body',
  bodySmall: 'bodysmall', bodySmallBold: 'bodysmall-bold', helper: 'helper', helperBold: 'helper-bold', displaySmall: 'displaysmall', displayMedium: 'displaymedium', displayLarge: 'displaylarge',
};
const text = (k: TextName) => ({ fontSize: `var(--sd-text-${TOKEN[k]}-size)`, lineHeight: `var(--sd-text-${TOKEN[k]}-line)`, fontWeight: `var(--sd-text-${TOKEN[k]}-weight)` });
export const type = {
  headingLarge: text('headingLarge'),
  headingMedium: text('headingMedium'),
  headingSmall: text('headingSmall'),
  subHeading: { ...text('subHeading'), letterSpacing: '0.5px', textTransform: 'uppercase' as const },
  action: text('action'),
  body: text('body'),
  bodySmall: text('bodySmall'),
  bodySmallBold: text('bodySmallBold'),
  helper: text('helper'),
  helperBold: text('helperBold'),
  displaySmall: text('displaySmall'),
  displayMedium: text('displayMedium'),
  displayLarge: text('displayLarge'),
} as const;
/** Singkatan untuk dipakai di komponen: `style={typo.body}` atau `style={{ ...typo.action, color }}`. */
export const typo = type;
/** Teks tombol dan tab = Action (Mobile 15/22, Desktop 16/24 semibold). */
export const typeAction = type.action;
export const typeBody = type.body;
export const typeLabel = type.bodySmall;
/** Tinggi baris (var CSS) untuk menghitung tinggi komponen: `calc(${lineOf.body} + 24px)`. */
export const lineOf = { body: 'var(--sd-text-body-line)', action: 'var(--sd-text-action-line)', bodySmall: 'var(--sd-text-bodysmall-line)' } as const;

/** Radius (Figma Border): 0, 4, 8, 12, 16, 24, 9999. Kartu = 8, kontrol = 4. */
export const radius = { none: '0', control: '4px', card: '8px', lg: '12px', xl: '16px', xxl: '24px', pill: '9999px' } as const;
/** Bayangan (Figma Shadow): Elevation/01 untuk kartu minimal, Elevation/06 untuk modal. */
export const elevation = {
  e01: '0 1px 1px 0 rgba(0,0,0,0.08), 0 2px 1px -1px rgba(0,0,0,0.02), 0 1px 3px 0 rgba(0,0,0,0.10)',
  e06: '0 12px 17px 2px rgba(0,0,0,0.08), 0 5px 22px 4px rgba(0,0,0,0.02), 0 7px 8px -4px rgba(0,0,0,0.10)',
} as const;

/** Modal: header Surface/Subdued #F5F5F5 + Border/Subdued #C9CBCF, footer Border/Disabled #D9DBDD, padding 16x20. */
export const modal = { headerBg: '#F5F5F5', headerBorder: '#C9CBCF', footerBorder: '#D9DBDD', paddingY: '16px', paddingX: '20px' } as const;
/** Tabel: header 13/16 semibold kapital, sel 15/22 regular, padding 16, bayangan 0 2px 1px rgba(0,0,0,.05). */
export const table = { headerFont: { fontSize: '13px', lineHeight: '16px', fontWeight: 600 }, cellFont: { fontSize: '15px', lineHeight: '22px', fontWeight: 400 } } as const;
/** Badge: Surface Success #9AE5B9, Warning #FFDFA3, Critical #FFE9EA, Informational #98DAFB, Neutral Subdued #EFEFEF. */
