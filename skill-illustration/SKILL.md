---
name: seragam-illustration
description: Generate illustrations that follow the Seragam Design System illustration guide (seragam.belajar.id, GovTech Edu / Kemendikdasmen), as palette-locked vector SVG. Use whenever the user asks to make, draw, generate, or create an illustration, spot illustration, empty state illustration, hero illustration, banner illustration, or asset in the Seragam style. Also use when they ask to find an existing one in the Galeri Ilustrasi. Triggers include "bikin ilustrasi", "buat ilustrasi spot", "ilustrasi empty state", "ilustrasi hero", "gambar ilustrasi seragam", "ilustrasi buat halaman ...", and "cari ilustrasi di galeri".
---

# Seragam Illustration

This skill produces illustrations that follow the Seragam illustration guide. The output is vector SVG with colors locked to the illustration palette, ready to drop into Figma or code.

Sources it is built from:
- Guide: https://seragam.belajar.id/ilustrasi (principles, types, roles, palette, how-to-draw)
- Galeri Ilustrasi Figma: https://www.figma.com/design/MIdf08QSwNcwX8J4koF7EX/Galeri-Ilustrasi (fileKey `MIdf08QSwNcwX8J4koF7EX`)

## Reference files (read as needed)

| File | When to read |
|---|---|
| `references/principles.md` | Always. Covers the 5 principles, the 3 types, illustration roles, and size-to-text pairing. |
| `references/palette.json` | Always. These are the only colors allowed. |
| `references/style-spot-empty.md` | Spot or Empty State: shape, light/base/shadow structure, color combinations, grid. |
| `references/style-hero.md` | Hero: outline, character structure, gesture, composition, camera, background. |
| `references/gallery-catalog.md` | Checking whether a suitable illustration already exists in the Galeri (node ID + link). |
| `examples/*.svg` | **Required before drawing a Spot/Empty State.** These are original SVGs from the Galeri. Read 1–2 of them that are closest to the object you need, and copy their layering technique. |

## Workflow

### 1. Understand the request
Identify (ask only what can't be inferred, in one short question):
- **Type**: Hero / Spot / Empty State. Default: Spot if it goes next to a heading, list, or card. Empty State if it's for "no data", an error, or "no access". Hero if it's for a banner, cover, poster, or social media.
- **Message**: one sentence for what the user should understand. This must be literal (principle *Lugas*).
- **Size and placement**: Spot 84 (with Display Md) or 60 (with Display S/Heading L/M), Empty State 120, Hero at the banner's dimensions.
- **Output**: SVG file (default), or also placed in Figma.

### 2. Check the Galeri first (reuse > generate)
Search `references/gallery-catalog.md` for keywords related to the concept (English names, e.g. *folder, document, calendar, lock, chat, badge*). If there is a fitting candidate:
- Tell the user the component name and Figma link, and offer to use it.
- To fetch the original SVG, call Figma `get_design_context` (load the `figma-design-to-code` skill first) with fileKey `MIdf08QSwNcwX8J4koF7EX` and the nodeId. The response has a temporary SVG URL, which you download with `curl -L`, plus the component description and keywords.
- Generate a new one only if nothing fits, or if the user explicitly asks for a new one.

### 3. Write the concept brief (show it to the user in 3–5 lines before drawing)
- **Main object** plus at most 1–2 supporting objects (a badge, magnifying glass, check mark, smiley, hand).
- **Color ramps** (3–4): which ramp goes on which object. Use the official combinations in `style-spot-empty.md`.
- **Focal point**: what the eye should catch first.
- **Principle check**: literal, emotional (smiley/sparkle/gesture), familiar (Indonesian school context), simple, inclusive (if there are people or hands, vary the skin ramp).
- Hero only: composition, camera direction, background type, and characters (age, gender, skin tone, clothing).

### 4. Draw the SVG
General rules, which every type must follow:
- Use **only** hex values from `palette.json` (plus `#FFFFFF` and cast shadow `#E5E5E5`). Use `#020A11` for dark accents, never `#000`.
- **No** gradients, filters, opacity tricks, `<text>`, or embedded raster images.
- Use rounded shapes everywhere, with no sharp corners.
- Light comes from the **top left**. Every surface gets light (20) / base (30) / shadow (40) from **one ramp**, plus an optional highlight (10) and core shadow (50). The boundary between tones is a straight diagonal line or a wide curve, never a blur.

Spot / Empty State:
- No stroke at all. Lines (text bars, check marks, finger creases) are filled paths.
- Spot: `width="84" height="84" viewBox="0 0 84 84"`. Spot 60: keep viewBox 84 and set `width/height="60"`.
- Empty State: `viewBox="0 0 120 120"`, background circle `cx=60 cy=60 r=55` in `#EFEFEF` or Soft Gray 10/20, with the object inside or slightly breaking out of the circle.
- Aim for 13–30 shapes. More than 45 is too complex.
- Layer order: cast shadow → thickness/dark sides → base → light/highlight → shadow plane → details → supporting objects → accents.

Hero:
- Flat fills plus **outlines** (`stroke`) in a darker shade of the same ramp, `stroke-linecap/linejoin="round"`, with a single shadow tone.
- Realistic proportions, dynamic gestures, varied faces and skin tones. See `style-hero.md`.
- Use at most 1–3 characters unless asked otherwise.

Name the file in the Galeri convention: `img-<object>-<context>.svg` (kebab-case, English, e.g. `img-folder-document-review.svg`). Save it to `./illustrations/` in the working directory unless the user names another location.

### 5. Validate and look (required, do not skip)
```bash
python3 <skill-dir>/scripts/validate_svg.py illustrations/img-xxx.svg --type spot   # spot | empty | hero
bash <skill-dir>/scripts/preview.sh illustrations/img-xxx.svg 512
```
- Fix every ERROR. Fix WARNs unless they are intentional.
- **Read the preview PNG** and judge it as an illustrator would: Is the object recognizable at a glance? Does it read at 60px? Are light and shadow consistent from the top left? Is there only one focal point? Does it look like it belongs with `examples/`?
- Iterate up to 3 times. If it still isn't good enough (common with complex Hero characters), be honest with the user. Offer options: simplify the concept, generate a raster with Figma `generate_image` using the prompt in `style-hero.md` (paid Figma AI credits, raster, palette not exact), or hand it to an illustrator as a sketch plus brief.

### 6. Deliver
- Send the SVG and preview PNG to the user. Include a short summary: type, concept, ramps used, and the principles it meets.
- If the user wants it in Figma: load the `figma-use` skill, then create a frame or component named after the file containing the SVG (`figma.createNodeFromSvg`) in the file and page the user chooses. **Do not write to the Galeri Ilustrasi file** unless the user explicitly asks; the Galeri is the team's source of truth.
- For a new component, suggest a Figma description in the Galeri's format: `We use this illustration to represent <meaning>. spot illustration, <keyword EN>, <keyword ID>, ...`

## Quick do and don't

| ✅ Do | ❌ Don't |
|---|---|
| Familiar objects: books, report cards, folders, chalkboards, phones | Abstract metaphors that need explaining |
| Smileys, sparkles, check-mark badges for emotion | Lifeless objects with no accent |
| 3–4 color ramps, contrasting values | Gradients, dull colors, glaring neon colors |
| Front view or a gentle 3/4 view | Extreme perspective |
| Varied skin tones on hands/characters | One skin tone for every character |
| Illustrations that support text | Illustrations that dominate the UI |
