// Genera los assets de SEO que no se editan a mano:
//   pnpm seo:assets
// - public/images/og.jpg                 Open Graph 1200×630
// - public/icons/icon-192.png            PWA / Android
// - public/icons/icon-512.png            PWA / Android (también maskable)
// - public/icons/apple-touch-icon.png    iOS 180×180
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('..', import.meta.url));
const asset = (path) => `${root}${path}`;

// ——— Open Graph 1200×630 ———
const portrait = await sharp(asset('public/images/hero-1200.webp'))
  .resize(480, 630, { fit: 'cover', position: 'centre' })
  .toBuffer();

const overlay = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#050505" stop-opacity="1"/>
      <stop offset="1" stop-color="#050505" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect x="680" y="0" width="220" height="630" fill="url(#fade)"/>
  <rect x="660" y="72" width="1" height="486" fill="#262626" opacity="0.55"/>
  <text x="72" y="122" font-family="Consolas, 'Courier New', monospace" font-size="20" letter-spacing="6" fill="#9A9A96">PORTFOLIO 2026</text>
  <text x="68" y="296" font-family="Arial, Helvetica, sans-serif" font-size="150" font-weight="300" letter-spacing="-6" fill="#F2F2F0">Dylan</text>
  <text x="68" y="442" font-family="Arial, Helvetica, sans-serif" font-size="150" font-weight="800" letter-spacing="-7" fill="#F2F2F0">Gómez</text>
  <text x="72" y="510" font-family="Consolas, 'Courier New', monospace" font-size="23" letter-spacing="3" fill="#9A9A96">DESARROLLADOR FULL STACK</text>
  <text x="72" y="548" font-family="Consolas, 'Courier New', monospace" font-size="18" letter-spacing="2.5" fill="#5F5F5C">BUENOS AIRES · ARGENTINA</text>
  <rect x="72" y="578" width="120" height="1" fill="#262626"/>
  <text x="72" y="608" font-family="Consolas, 'Courier New', monospace" font-size="17" letter-spacing="2" fill="#5F5F5C">dylangomez.online</text>
</svg>`);

await sharp({
  create: { width: 1200, height: 630, channels: 3, background: '#050505' },
})
  .composite([
    { input: portrait, left: 720, top: 0 },
    { input: overlay, left: 0, top: 0 },
  ])
  .jpeg({ quality: 88, chromaSubsampling: '4:4:4', mozjpeg: true })
  .toFile(asset('public/images/og.jpg'));

// ——— Iconos desde el monograma DG ———
const favicon = await readFile(asset('public/icons/favicon.svg'));

for (const [size, file] of [
  [180, 'apple-touch-icon.png'],
  [192, 'icon-192.png'],
  [512, 'icon-512.png'],
]) {
  await sharp(favicon, { density: Math.round((72 * size * 2) / 64) })
    .resize(size, size, { fit: 'contain', background: '#050505' })
    .flatten({ background: '#050505' })
    .png({ compressionLevel: 9 })
    .toFile(asset(`public/icons/${file}`));
}

console.log(
  'SEO assets generados: images/og.jpg, icons/icon-192.png, icons/icon-512.png, icons/apple-touch-icon.png',
);
