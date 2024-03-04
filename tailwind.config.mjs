/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontSize: {
        '2xs': '.65rem', // 10px
      },
      colors: {
        blue: {
          950: '#243B4A',
        },
      },
      fontFamily: {
        sans: ['Lexend', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
