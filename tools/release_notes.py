"""Cetak bagian CHANGELOG untuk satu versi: python3 tools/release_notes.py v0.18.0 (atau 0.18.0)."""
import re, sys
ver = sys.argv[1].lstrip('v')
text = open('CHANGELOG.md', encoding='utf-8').read()
m = re.search(rf'^## {re.escape(ver)}\b.*?$(.*?)(?=^## |\Z)', text, re.M | re.S)
if not m: sys.exit(f'CHANGELOG tidak punya bagian untuk {ver}')
print(m.group(1).strip())
