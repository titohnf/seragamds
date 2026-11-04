"""Hasilkan tokens/seragam.tokens.json dan tokens/seragam.css dari data Figma yang sudah di-resolve."""
import json, re, sys, os
here = os.path.dirname(os.path.abspath(__file__))
styles = json.load(open(sys.argv[1]))          # dasar.styles.resolved.json
out = os.path.join(here, '..', 'tokens')

# Primitif (Seragam Dasar > Variables > Primitive)
steps = [0,5,10,20,30,40,50,60,70,80,90,100]
P = {
 'gray':  'F9F9F9 F1F1F1 D8D8D8 C7C7C7 ADADAD 9E9E9E 828282 727272 5E5E5E 505050 323232 212121',
 'red':   'FFF6F8 FEEDF2 FECACE FFB3B6 FF8C8C FB7474 EB4545 DF2121 BD1214 A21013 650C0F 470909',
 'blue':  'F5FAFF E6F1FF BFDAFE A4C9FE 79AFFD 5F9FFC 2A7EFB 0A65FC 0954D9 0746BD 04287E 021A5E',
 'cyan':  'F1FBFE E3F4FC AFDEF9 8CCFF7 55B6F2 36A7EC 0687D9 0075C5 0061A8 005291 003258 05233B',
 'green': 'F0FDED E2F5E0 BBE2B8 9FD49D 77BE75 5FB05E 369536 268326 196D1A 135D15 0D390F 0B270E',
 'yellow':'FFF9D4 FDF2B2 F7D63A FABE24 FD9400 E78701 BF6F02 A76203 8B5104 754504 482B06 311D06',
}
prim = {f'{k}-{s}': '#'+h for k, v in P.items() for s, h in zip(steps, v.split())}
prim['white'] = '#FFFFFF'; prim['black'] = '#000000'

# Semantik (terbaca dari variabel koleksi Semantic, mode 1)
sem = {
 'text-default':'gray-90','text-subdued':'gray-60','text-disabled':'gray-50','text-inverse':'white','text-inverse-subdued':'gray-10',
 'text-critical':'red-60','text-success':'green-60','text-informational':'blue-70','text-warning':'yellow-70',
 'action-default':'blue-70','action-hovered':'blue-80','action-pressed':'blue-90','action-disabled':'gray-20',
 'action-neutral-default':'gray-90','action-neutral-hovered':'gray-100','action-neutral-pressed':'black',
 'interactive-default':'blue-70','interactive-hovered':'blue-80','interactive-focused':'blue-50','interactive-disabled':'gray-20','interactive-critical':'red-60',
 'border-default':'gray-50','border-subdued':'gray-30','border-disabled':'gray-20','border-high':'gray-70','border-hovered':'gray-80','border-pressed':'gray-100',
 'surface-default':'white','surface-subdued':'gray-5','surface-hovered':'gray-5','surface-pressed':'gray-10','surface-disabled':'gray-5','surface-foreground':'gray-90',
 'surface-critical-subdued':'red-5','surface-success-subdued':'green-5','surface-informational-subdued':'cyan-5','surface-selected-default':'blue-5',
 'background-default':'gray-0',
 'icon-default':'gray-80','icon-subdued':'gray-50','icon-disabled':'gray-30','icon-inverse':'gray-5','icon-critical':'red-60','icon-success':'green-60','icon-informational':'blue-70',
}
# Warna lencana/status yang dipakai literal oleh komponen (tidak ada di primitif)
fixed = {'badge-success':'#9AE5B9','badge-warning':'#FFDFA3','badge-critical':'#FFE9EA','badge-info':'#98DAFB','badge-neutral':'#EFEFEF',
         'warning-surface':'#FFEFD6','warning-border':'#EDA62B','success-border':'#4CA375','critical-border':'#E02D38',
         'modal-header':'#F5F5F5','modal-border':'#C9CBCF','modal-footer-border':'#D9DBDD'}

slug = lambda n: re.sub(r'[^a-z0-9]+','-', n.lower()).strip('-')
type_ = {}; elev = {}
for s in styles:
    if s['type'] == 'TEXT':
        plat, nm = s['name'].split('/',1)
        type_.setdefault(plat.lower(), {})[slug(nm)] = {k: s[k] for k in ('font','size','weight','lineHeight','letterSpacing','textCase')}
        type_[plat.lower()][slug(nm)]['textCase'] = (s.get('textCase') or '').lower() or None
    else:
        css = ', '.join('{x:g}px {y:g}px {b:g}px {sp:g}px rgba(0,0,0,{a:.2f})'.format(x=e['x'],y=e['y'],b=e['blur'],sp=e.get('spread',0),a=e['color']['a']) for e in s['effects'])
        elev[re.sub(r'\D','',s['name']).zfill(2)] = {'css': css, 'use': s.get('description','')}
elev = dict(sorted(elev.items()))
radius = {'none':0,'sm':4,'md':8,'lg':12,'xl':16,'pill':999}

json.dump({'primitive':prim,'semantic':sem,'fixed':fixed,'typography':type_,'elevation':elev,'radius':radius},
          open(os.path.join(out,'seragam.tokens.json'),'w'), indent=1, ensure_ascii=False)

L = ['/* Seragam Design System: token. Dihasilkan oleh tools/build_tokens.py dari Figma "Seragam Dasar". Jangan sunting manual. */',':root {']
for k,v in prim.items(): L.append(f'  --sd-{k}: {v};')
for k,v in sem.items(): L.append(f'  --sd-{k}: var(--sd-{v});')
for k,v in fixed.items(): L.append(f'  --sd-{k}: {v};')
for k,v in elev.items(): L.append(f'  --sd-elevation-{k}: {v["css"]};')
for k,v in radius.items(): L.append(f'  --sd-radius-{k}: {v}px;')
for plat,d in type_.items():
    for k,v in d.items():
        L.append(f'  --sd-type-{plat}-{k}-size: {v["size"]:g}px;'); L.append(f'  --sd-type-{plat}-{k}-line: {v["lineHeight"]:g}px;'); L.append(f'  --sd-type-{plat}-{k}-weight: {v["weight"]};')
L += ['}','','/* Tailwind v4: kelas bg-sd-*, text-sd-*, border-sd-*, shadow-sd-*, rounded-sd-* */','@theme inline {']
for k in list(prim)+list(sem)+list(fixed): L.append(f'  --color-sd-{k}: var(--sd-{k});')
for k in elev: L.append(f'  --shadow-sd-{k}: var(--sd-elevation-{k});')
for k in radius: L.append(f'  --radius-sd-{k}: var(--sd-radius-{k});')
L.append('}'); L.append('')
L.append('/* Kelas tipografi: .sd-t-<platform>-<nama> */')
for plat,d in type_.items():
    for k,v in d.items():
        tc = f' text-transform:{"uppercase" if v["textCase"]=="upper" else v["textCase"]};' if v['textCase'] else ''
        ls = f' letter-spacing:{v["letterSpacing"]:g}px;' if v.get('letterSpacing') else ''
        L.append(f'.sd-t-{plat}-{k} {{ font-family:Inter,system-ui,sans-serif; font-size:var(--sd-type-{plat}-{k}-size); line-height:var(--sd-type-{plat}-{k}-line); font-weight:var(--sd-type-{plat}-{k}-weight);{tc}{ls} }}')
open(os.path.join(out,'seragam.css'),'w').write('\n'.join(L)+'\n')
print(len(prim),'primitif',len(sem),'semantik',sum(len(d) for d in type_.values()),'tipografi',len(elev),'elevasi')
