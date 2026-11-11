// Uji asap paket: JS hasil build bisa diimpor, komponen dirender di server, tipe dan CSS ada.
// Pakai: node tools/smoke-package.mjs [folder]   (bawaan: lib; coba juga: pkg/lib setelah npm run pack:release)
import { readFileSync, existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { createElement as h } from 'react';
import { renderToString } from 'react-dom/server';

const dir = resolve(process.argv[2] ?? 'lib');
const fail = (m) => { console.error('GAGAL:', m); process.exit(1); };
const S = await import(pathToFileURL(`${dir}/index.js`).href);

const names = Object.keys(S);
for (const n of ['Button', 'TextField', 'Table', 'Tabs', 'Modal', 'DatePicker', 'FormField', 'NavigationBar', 'Carousel', 'Platform', 'typo', 'color']) if (!(n in S)) fail(`ekspor ${n} tidak ada`);
if (names.length < 70) fail(`hanya ${names.length} ekspor (diharapkan ≥ 70)`);

const html = renderToString(h(S.Platform, { platform: 'desktop' }, h(S.Button, { variant: 'ultimate' }, 'Simpan perubahan'), h(S.TextField, { label: 'Nama lengkap', helper: 'Sesuai KTP' })));
if (!html.includes('data-sd-platform="desktop"')) fail('Platform tidak merender atribut data-sd-platform');
if (!html.includes('Simpan perubahan') || !html.includes('Nama lengkap')) fail('konten komponen tidak ter-render');
if (!html.includes('bg-sd-blue-70')) fail('kelas token Button tidak ada');
if (!html.includes('var(--sd-text-body-size)')) fail('tipografi responsif (typo.*) tidak terpasang');
const table = renderToString(h(S.Table, { caption: 'Uji' }, h(S.TableBody, null, h(S.TableRow, null, h(S.TableCell, null, 'x')))));
if (!table.includes('<table')) fail('Table tidak ter-render');

const base = existsSync(`${dir}/style.css`) ? dir : resolve(dir, '..', 'lib');
const css = readFileSync(`${base}/style.css`, 'utf8');
for (const needle of ['--sd-blue-70', '--sd-text-body-size', '.sd-t-body', 'data-sd-platform', '.bg-sd-blue-70', 'box-sizing']) if (!css.includes(needle)) fail(`style.css tidak memuat ${needle}`);
const typesDir = existsSync(`${base}/types/index.d.ts`) ? `${base}/types` : null;
if (!typesDir) fail('lib/types/index.d.ts tidak ada');
if (!readFileSync(`${typesDir}/index.d.ts`, 'utf8').includes('Button')) fail('index.d.ts tidak mengekspor Button');
console.log(`OK: ${names.length} ekspor, render server, style.css (${Math.round(css.length / 1024)} kB), tipe`);
