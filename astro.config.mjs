import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  inlineStylesheets: 'never',
  site: 'https://eliasrestea.github.io/',
  base: '/',
});