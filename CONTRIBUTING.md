# Berkontribusi ke Seragam

Panduan singkat untuk mengubah design system ini dengan aman. Rujukan lengkap: [docs/README.md](docs/README.md); keputusan yang sudah diambil: [docs/DECISIONS.md](docs/DECISIONS.md); yang masih menunggu tim desain: [docs/PERLU-KEPUTUSAN-DESAIN.md](docs/PERLU-KEPUTUSAN-DESAIN.md).

## Prinsip
Seragam menetapkan token dan komponen; **konsisten dan familier mengalahkan baru**. Sebelum menambah sesuatu, cek dulu apakah Figma Seragam atau [seragam.belajar.id](https://seragam.belajar.id) sudah punya padanannya.

## Alur mengubah
1. Cabang baru dari `main` (`git switch -c nama-singkat`).
2. Ubah sumbernya: token (`tools/build_tokens.py` → `npm run build:foundations`), komponen (`src/`), panduan (`docs/guidelines/komponen/`). **Jangan menyunting `skill/references/` atau `tokens/seragam.css` langsung**; keduanya dihasilkan (`npm run build:skill`).
3. Catat keputusan dan alasannya di `docs/DECISIONS.md` (terbaru di atas) dan perubahan di `CHANGELOG.md`.
4. `npm run verify` harus lulus (konsistensi, kontras, sinkron props, typecheck, build, tes e2e dan aksesibilitas).
5. Buka PR; CI menjalankan hal yang sama. Setelah di-merge, beri tag versi (`vX.Y.Z`) pada `main` dan push tag-nya: workflow **Rilis** membangun paket (`npm run pack:release`), mengujinya, dan melampirkan `seragam-design-system-X.Y.Z.tgz` beserta catatan dari CHANGELOG ke GitHub Release. Pastikan `package.json` dan CHANGELOG sudah memuat versi itu.

## Komponen baru
Komponen baru diterima bila: (a) kebutuhannya nyata di lebih dari satu produk, (b) tidak ada padanan di Figma atau situs Seragam (bila ada, ikuti itu), dan (c) memakai token tanpa warna, ukuran huruf, atau radius sendiri. Statusnya **ekstensi** sampai tim desain Seragam menerimanya.

Daftar periksa (semuanya otomatis diperiksa `npm run check`, kecuali yang bertanda *manual*):
- [ ] Kode di `src/components/` dan diekspor di `src/index.ts`; ukuran huruf lewat `typo.*` atau `sd-t-*`, bukan angka.
- [ ] Halaman panduan `docs/guidelines/komponen/<nama>.md`: baris `- Kode:`, status, props (setiap prop publik disebut), perilaku (keyboard, state), responsif, penulisan; ekstensi wajib punya `## Spesifikasi` dan tautan ke `extensions.md`.
- [ ] Baris di `docs/guidelines/pemetaan-nama.md` dan `docs/README.md`; ringkasan di `docs/extensions.md` bila ekstensi.
- [ ] Demo di `site/demos.tsx` (otomatis kena tes aksesibilitas Mobile dan Desktop).
- [ ] Tes perilaku di `tests/e2e/behavior.spec.ts` untuk setiap interaksi (keyboard, Esc, fokus); popup memakai `useFixedPopup` (`src/popup.ts`) dan punya tes di `popup.spec.ts`.
- [ ] Tidak membaca `window`/`matchMedia` saat render (pakai `useMediaQuery` di `src/hooks.ts`); `npm run smoke:hydration` menangkap pelanggarannya.
- [ ] Pasangan warna baru terdaftar di `tools/contrast.py` (teks biasa ≥ 4,5:1).
- [ ] *Manual:* diperiksa di browser pada lebar mobile (≈360) dan desktop (≈1440), dan dengan keyboard saja.

## Versi dan perubahan yang merusak
Semantic Versioning, masih 0.x: **minor** untuk fitur dan perubahan tampilan, **patch** untuk perbaikan. Perubahan yang memengaruhi pemakai (nama prop, role ARIA, tampilan di layar tertentu) wajib ditulis di CHANGELOG pada butir "Perubahan yang perlu diperhatikan".

## Menghentikan sesuatu (deprecation)
Beri `@deprecated` di JSDoc dengan penggantinya, catat di CHANGELOG, dan pertahankan setidaknya **dua rilis minor** sebelum dihapus. Proyek disarankan mengunci ke tag, bukan `main`.

## Keputusan yang butuh tim desain
Jangan menebak nilai yang tidak ada di Figma atau situs: kerjakan dengan usulan yang masuk akal, tandai sebagai usulan di kode dan `DECISIONS.md`, lalu tambahkan ke [PERLU-KEPUTUSAN-DESAIN.md](docs/PERLU-KEPUTUSAN-DESAIN.md) (atau buka issue "Perlu keputusan desain").
