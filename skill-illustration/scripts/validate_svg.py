#!/usr/bin/env python3
"""Validate an SVG against the Seragam illustration guide.

Usage: python3 validate_svg.py <file.svg> [--type spot|empty|hero]

Checks: canvas size, palette compliance, gradients/filters/strokes,
ramp count, path count. Exits 1 on errors, 0 otherwise (warnings allowed).
"""
import json
import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

HERE = Path(__file__).resolve().parent
PALETTE = json.loads((HERE.parent / "references" / "palette.json").read_text())

HEX_TO_RAMP = {}
for ramp, steps in PALETTE.items():
    if ramp.startswith("_"):
        continue
    for step, hx in steps.items():
        HEX_TO_RAMP.setdefault(hx.upper(), f"{ramp} {step}")
for name, hx in PALETTE["_extras"].items():
    HEX_TO_RAMP.setdefault(hx.upper(), name)

ACCENT_RAMPS = {"Gray", "white", "cast-shadow", "empty-state-circle", "Soft Gray"}
SKIN_RAMPS = {"White Skin", "Yellow Skin", "Red Skin", "Brown Skin"}


def rgb(h):
    h = h.lstrip("#")
    if len(h) == 3:
        h = "".join(c * 2 for c in h)
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def nearest(hx):
    r = rgb(hx)
    best = min(HEX_TO_RAMP, key=lambda k: sum((a - b) ** 2 for a, b in zip(r, rgb(k))))
    dist = sum((a - b) ** 2 for a, b in zip(r, rgb(best))) ** 0.5
    return best, dist


def main():
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        sys.exit(2)
    path = Path(args[0])
    kind = "spot"
    if "--type" in args:
        kind = args[args.index("--type") + 1]

    src = path.read_text()
    errors, warns = [], []
    root = ET.fromstring(src)
    ns = "{http://www.w3.org/2000/svg}"

    vb = root.get("viewBox", "")
    if kind == "spot" and vb.replace(",", " ").split() != ["0", "0", "84", "84"]:
        errors.append(f'Spot harus viewBox="0 0 84 84" (dapat: "{vb}")')
    if kind == "empty" and vb.replace(",", " ").split() != ["0", "0", "120", "120"]:
        errors.append(f'Empty State harus viewBox="0 0 120 120" (dapat: "{vb}")')

    tags = [el.tag.replace(ns, "") for el in root.iter()]
    for bad in ("linearGradient", "radialGradient", "filter", "image", "text"):
        if bad in tags:
            errors.append(f"Dilarang memakai <{bad}> (gaya flat, tanpa gradien/efek/raster/teks)")

    if kind in ("spot", "empty"):
        stroked = [el for el in root.iter()
                   if el.get("stroke") not in (None, "none") or "stroke:" in (el.get("style") or "")]
        if stroked:
            errors.append(f"Spot/Empty State tidak boleh pakai stroke/outline ({len(stroked)} elemen). "
                          "Buat garis sebagai path berisi (fill).")

    if re.search(r'(fill|stop)-opacity|opacity="0\.', src):
        warns.append("Ada opacity/transparansi — gaya Seragam memakai warna solid; pastikan disengaja.")

    colors = {c.upper() for c in re.findall(r'#[0-9A-Fa-f]{6}\b', src)}
    colors |= {"#" + "".join(ch * 2 for ch in c[1:]).upper() for c in re.findall(r'#[0-9A-Fa-f]{3}\b', src)}
    ramps = set()
    near, far = [], []
    for c in sorted(colors):
        label = HEX_TO_RAMP.get(c)
        if label is None:
            best, d = nearest(c)
            label = HEX_TO_RAMP[best]
            (near if d <= 20 else far).append(f"{c} → {best} ({label}, jarak {d:.0f})")
        ramps.add(label.rsplit(" ", 1)[0] if label[-2:].isdigit() else label)
    if near:
        warns.append("Warna hampir sesuai palet, ganti ke hex palet: " + "; ".join(near))
    if far:
        (errors if len(far) > 1 else warns).append("Warna di luar palet: " + "; ".join(far))

    main_ramps = ramps - ACCENT_RAMPS - SKIN_RAMPS
    if len(main_ramps) > 4:
        warns.append(f"{len(main_ramps)} ramp warna utama ({', '.join(sorted(main_ramps))}). "
                     "Panduan: 3–4 ramp per ilustrasi.")
    if "#000000" in colors:
        warns.append("Pakai Gray 50 #020A11 untuk aksen gelap, bukan #000000.")

    n_shapes = sum(t in ("path", "rect", "circle", "ellipse", "polygon") for t in tags)
    if kind == "spot" and n_shapes > 45:
        warns.append(f"{n_shapes} shape — Spot di Galeri biasanya 13–30. Sederhanakan detail.")
    if kind == "spot" and n_shapes < 8:
        warns.append(f"Hanya {n_shapes} shape — kemungkinan belum ada struktur light/base/shadow.")

    print(f"File: {path}  tipe: {kind}  shape: {n_shapes}  warna: {len(colors)}  ramp: {', '.join(sorted(ramps))}")
    for e in errors:
        print("ERROR:", e)
    for w in warns:
        print("WARN: ", w)
    if not errors and not warns:
        print("OK — sesuai panduan.")
    sys.exit(1 if errors else 0)


if __name__ == "__main__":
    main()
