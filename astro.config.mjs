import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import UnoCSS from "unocss/astro";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [react(), UnoCSS({
    injectReset: true
  }), mdx()],
  site: "https://ziraa.my.id"
});