import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "http://svatba.kajfosz.cz",
  trailingSlash: "never",
  description: "Svatební web Marka a Maru",
  integrations: [mdx(), sitemap(), icon(), alpinejs()],
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()],
  },
});