import { defineConfig } from 'astro/config';
import remarkToc from 'remark-toc';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkToc],
    shikiConfig: {
      theme: 'github-dark',
      langs: ["cpp"],
      wrap: true
    }
  },
  site: 'https://alaras.tech',
});
