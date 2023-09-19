/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  important: true,
  theme: {
    extend: {
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
      },
    },
    plugins: [],
  },
};
