import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import lottie from 'astro-integration-lottie';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), lottie()]
});