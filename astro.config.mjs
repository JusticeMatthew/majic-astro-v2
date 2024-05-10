import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import lottie from 'astro-integration-lottie';
import afterDirective from './src/utils/client-after-directive/register.js';

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      sourcemap: true,
    },
  },
  integrations: [tailwind(), react(), lottie(), afterDirective()],
});
