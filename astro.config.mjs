import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import lottie from 'astro-integration-lottie';
import vercel from '@astrojs/vercel/serverless';
import solidJs from '@astrojs/solid-js';
import icon from 'astro-icon';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://majic-astro-v2.vercel.app/',
  vite: {
    build: {
      sourcemap: true,
    },
  },

  integrations: [
    tailwind(),
    react(),
    lottie(),
    solidJs({
      include: ['**/solid/*'],
    }),
    icon(),
  ],
  output: 'hybrid',
  adapter: netlify(),
  experimental: {
    serverIslands: true,
  },
});