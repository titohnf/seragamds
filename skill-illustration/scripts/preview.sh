#!/bin/bash
# Render SVG ke PNG untuk dicek visual. macOS (Quick Look) — tanpa dependensi tambahan.
# Usage: preview.sh <file.svg> [size=512] [out_dir=same folder]
# Output: <out_dir>/<name>.preview.png
set -euo pipefail
SVG="$1"; SIZE="${2:-512}"; OUT="${3:-$(dirname "$SVG")}"
NAME="$(basename "$SVG" .svg)"
TMP="$(mktemp -d)"
# Quick Look merender di ukuran intrinsik, jadi set width/height root ke SIZE (viewBox tetap).
python3 - "$SVG" "$SIZE" "$TMP/$NAME.svg" <<'EOF'
import re, sys
src = open(sys.argv[1]).read(); s = sys.argv[2]
def fix(m):
    tag = re.sub(r'\s(width|height)="[^"]*"', '', m.group(0))
    return tag.replace('<svg', f'<svg width="{s}" height="{s}"', 1)
open(sys.argv[3], 'w').write(re.sub(r'<svg\b[^>]*>', fix, src, count=1))
EOF
if command -v rsvg-convert >/dev/null; then
  rsvg-convert -w "$SIZE" "$TMP/$NAME.svg" -o "$OUT/$NAME.preview.png"
else
  qlmanage -t -s "$SIZE" -o "$TMP" "$TMP/$NAME.svg" >/dev/null 2>&1
  mv "$TMP/$NAME.svg.png" "$OUT/$NAME.preview.png"
fi
rm -rf "$TMP"
echo "$OUT/$NAME.preview.png"
