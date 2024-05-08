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
      padding: {
        small: 'var(--space-s)',
        sm: 'var(--space-s-m)',
        medium: 'var(--space-m)',
        large: 'var(--space-l)',
        huge: 'var(--space-xl)',
      },
      margin: {
        small: 'var(--space-s)',
        sm: 'var(--space-s-m)',
        medium: 'var(--space-m)',
        large: 'var(--space-l)',
        huge: 'var(--space-xl)',
      },
      gap: {
        small: 'var(--space-s)',
        medium: 'var(--space-m)',
        large: 'var(--space-l)',
        huge: 'var(--space-xl)',
      },
      fontSize: {
        logo: ['var(--step-1)', 'var(--fine)'],
        min: 'var(--step-00)',
        bread: 'var(--step-0)',
        title: 'var(--step-5)',
        headline: 'var(--step-6)',
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
  },
  plugins: [require('tailwindcss-animate')],
};
