import { copyFileSync, existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const docsDir = join(process.cwd(), 'docs');
const indexPath = join(docsDir, 'index.html');
const fallbackPath = join(docsDir, '404.html');
const noJekyllPath = join(docsDir, '.nojekyll');

if (!existsSync(indexPath)) {
  console.error('docs/index.html not found. Run ng build first.');
  process.exit(1);
}

copyFileSync(indexPath, fallbackPath);
writeFileSync(noJekyllPath, '');
console.log('GitHub Pages fallback ready: docs/404.html and docs/.nojekyll');
