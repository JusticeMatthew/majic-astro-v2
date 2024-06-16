import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import lottie from 'astro-integration-lottie';

// https://astro.build/config
export default defineConfig({
  site: 'https://majic-astro-v2.vercel.app/',
  vite: {
    build: {
      sourcemap: true,
    },
  },
  integrations: [tailwind(), react(), lottie()],
});
