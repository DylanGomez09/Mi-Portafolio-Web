// Avisa a IndexNow (Bing, Yandex y otros) que el sitio cambió.
//   pnpm seo:indexnow
// Requiere un build reciente en dist/ y la clave pública en public/<clave>.txt.
import { readFile } from 'node:fs/promises';

const HOST = 'www.dylangomez.online';
const KEY = 'd4f7a2c9b8e14f3a9c6d0b2e5f8a1c37';
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const sitemap = await readFile(new URL('../dist/sitemap-0.xml', import.meta.url), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

if (urls.length === 0) {
  console.error('No hay URLs en dist/sitemap-0.xml. Ejecutá pnpm build primero.');
  process.exit(1);
}

const response = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  }),
});

console.log(`IndexNow: ${response.status} ${response.statusText} — ${urls.length} URLs`);
if (!response.ok) process.exit(1);
