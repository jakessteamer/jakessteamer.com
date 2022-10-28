import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  site:
    process.env.NODE_ENV == 'production'
      ? process.env.PROD_SITE_URL
      : 'http://localhost:8888',
  output: 'server',
  adapter: netlify(),
  integrations: [
    alpinejs(),
    mdx(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
});
