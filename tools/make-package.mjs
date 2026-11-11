// Merakit folder `pkg/` (isi paket yang diterbitkan) dari hasil `npm run build:lib`, lalu `npm pack` menghasilkan *.tgz.
// package.json repo tetap untuk pemakaian dari sumber (GitHub); package.json di pkg/ menunjuk ke hasil build (lib/).
import { cpSync, rmSync, mkdirSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const root = JSON.parse(readFileSync('package.json', 'utf8'));
if (!existsSync('lib/index.js')) throw new Error('lib/ belum ada: jalankan `npm run build:lib` dulu');
rmSync('pkg', { recursive: true, force: true }); mkdirSync('pkg');
cpSync('lib', 'pkg/lib', { recursive: true });
cpSync('tokens', 'pkg/tokens', { recursive: true });
cpSync('docs', 'pkg/docs', { recursive: true, filter: (s) => !s.endsWith('.DS_Store') });
for (const f of ['README.md', 'CHANGELOG.md']) cpSync(f, `pkg/${f}`);

const pkg = {
  name: root.name, version: root.version, description: root.description,
  type: 'module', sideEffects: false,
  main: './lib/index.js', module: './lib/index.js', types: './lib/types/index.d.ts',
  exports: {
    '.': { types: './lib/types/index.d.ts', import: './lib/index.js', default: './lib/index.js' },
    './styles.css': './lib/style.css',
    './css': './tokens/seragam.css',
    './tokens': './tokens/seragam.tokens.json',
    './docs/*': './docs/*',
    './package.json': './package.json',
  },
  files: ['lib', 'tokens', 'docs', 'README.md', 'CHANGELOG.md'],
  peerDependencies: { react: '>=18', 'lucide-react': '>=0.400' },
  // Tailwind hanya perlu bila memakai "seragam-design-system/css" (token) alih-alih "styles.css" (sudah memuat utilitas).
  peerDependenciesMeta: {},
  license: 'UNLICENSED',
  repository: { type: 'git', url: 'git+https://github.com/titohnf/seragamds.git' },
  keywords: ['design-system', 'react', 'tailwind', 'seragam', 'kemendikdasmen'],
};
writeFileSync('pkg/package.json', JSON.stringify(pkg, null, 2) + '\n');
execFileSync('npm', ['pack', './pkg', '--silent'], { stdio: 'inherit' });
console.log(`pkg/ siap: ${pkg.name}@${pkg.version}`);
