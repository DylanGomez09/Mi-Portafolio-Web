// @ts-check
import { defineConfig } from 'astro/config';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

const SITE = 'https://www.dylangomez.online';

/** @type {Record<string, number>} */
const priorities = {
  [`${SITE}/`]: 1,
  [`${SITE}/servicios/`]: 0.9,
  [`${SITE}/link/`]: 0.5,
  [`${SITE}/privacidad/`]: 0.3,
};

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        /** @type {import('@astrojs/sitemap').SitemapItem} */
        const entry = {
          ...item,
          lastmod: new Date().toISOString(),
          changefreq: ChangeFreqEnum.MONTHLY,
          priority: priorities[item.url] ?? 0.5,
        };
        return entry;
      },
    }),
  ],
  compressHTML: true,
  devToolbar: { enabled: false },
});
