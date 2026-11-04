#!/bin/sh
# Rakit skill/ agar mandiri: SKILL.md + token + dokumentasi komponen + kode komponen sebagai referensi.
set -e
cd "$(dirname "$0")/.."
rm -rf skill/references && mkdir -p skill/references
cp tokens/seragam.tokens.json tokens/seragam.css skill/references/
cp -R docs/components skill/references/components-spec
cp -R src skill/references/react-src
echo "skill/ siap: $(du -sh skill | cut -f1)"
