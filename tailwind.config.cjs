/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

const spacing = {
  '3xs': 'var(--space-3xs)',
  '2xs': 'var(--space-2xs)',
  xs: 'var(--space-xs)',
  small: 'var(--space-s)',
  sm: 'var(--space-s-m)',
  sl: 'var(--space-s-l)',
  medium: 'var(--space-m)',
  ml: 'var(--space-ml)',
  large: 'var(--space-l)',
  lh: 'var(--space-l-xl)',
  huge: 'var(--space-xl)',
  '2x': 'var(--space-2xl)',
  '3x': 'var(--space-3xl)',
  '4x': 'var(--space-4xl)',
  '5x': 'var(--space-5xl)',
  section: 'var(--space-5xl-7xl)',
};

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  important: true,
  blocklist: ['container'],
  theme: {
    extend: {
      screens: {
        tablet: '1025px',
        container: '1400px',
      },
      padding: spacing,
      margin: spacing,
      gap: spacing,
      fontSize: {
        logo: ['var(--step-1)', 'var(--fine)'],
        min: 'var(--step-00)',
        bread: 'var(--step-0)',
        subtitle: 'var(--step-1)',
        title: 'var(--step-5)',
        headline: 'var(--step-6)',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        cursive: ['Calistoga', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        blurple: '#6287FF',
        'light-gray': '#E8EAEF',
        'light-purple': '#bbbbff',
        'dark-purple': '#20204e',
        light: '#F8FAFC',
        dark: '#0D111C',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #735CDD, #00A7E1)',
        'secondary-gradient': 'linear-gradient(to right, #8B72FF, #608CFF)',
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
