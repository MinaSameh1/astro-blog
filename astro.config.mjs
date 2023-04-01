import { defineConfig } from "astro/config";
import { BASE_URL } from "./src/consts";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://minasameh1.github.io",
  base: BASE_URL,
  integrations: [mdx(), sitemap()],
});
