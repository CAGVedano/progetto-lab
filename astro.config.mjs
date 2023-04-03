import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import NetlifyCMS from 'astro-netlify-cms';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    }),
    NetlifyCMS({
      config: {
        adminPath: '/admin',
        media_folder: "src/assets/uploads",
        public_folder: "/imgs/uploads",
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        collections: [
          {
            name: 'stories',
            label: 'Trame',
            folder: 'src/content/stories',
            create: true,
            delete: true,
            fields: [
              { name: 'title', widget: 'string', label: 'Titolo' },
              { name: 'body', widget: 'markdown', label: 'Svolgimento' },
              { name: 'image', widget: 'image', label: 'Copertina', default: "/imgs/project-logo.png" },
            ],
          },
        ]
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
    },
  },
});
