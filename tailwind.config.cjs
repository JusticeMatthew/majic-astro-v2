/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  important: true,
  theme: {
    extend: {
      screens: {
        tablet: '1025px',
      },
      fontSize: {
        logo: ['var(--step-1)', 'var(--fine)'],
        bread: 'var(--step-0)',
        headline: 'var(--step-7)',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        cursive: ['Calistoga', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        blurple: '#6287FF',
        light: '#F8FAFC',
        dark: '#0D111C',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #735CDD, #00A7E1)',
        'parallax-gradient':
          'linear-gradient(to right, #735CDD, #00A7E1, #735CDD)',
      },
    },
    experimental: {
      optimizeUniversalDefaults: true,
    },
    plugins: [],
  },
};
