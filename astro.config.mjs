import { defineConfig } from "astro/config";
import compressor from "astro-compressor";

import swup from "@swup/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [swup(), compressor()]
});
