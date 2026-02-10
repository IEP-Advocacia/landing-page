import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const src = path.join(publicDir, 'imagem4.png');
const dest = path.join(publicDir, 'imagem4.webp');

await sharp(src)
  .resize(900, null, { withoutEnlargement: true })
  .webp({ quality: 82 })
  .toFile(dest);

console.log('Gerado:', dest);
