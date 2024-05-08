import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), svelte(), mdx()],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    imageService: true
  })
});