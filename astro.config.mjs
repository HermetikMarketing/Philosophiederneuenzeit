import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// BASE_PATH erlaubt eine Vorschau in einem Unterverzeichnis.
// Default-Wert ist "/".
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://www.philosophiederneuenzeit.de',
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
