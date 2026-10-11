/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Extracted/derived from logo-g-con.png: steel-blue roof & window trim,
        // champagne-gold lettering, olive-green bushes, brushed-silver "G".
        'brand-blue': {
          300: '#b4c9e4',
          400: '#779dcf',
          500: '#4277bd',
          600: '#355f97',
          700: '#284871',
          800: '#1d3553',
          900: '#142439',
        },
        'brand-gold': {
          300: '#eac690',
          400: '#e0ab5c',
          500: '#d69129',
          600: '#b47a22',
          700: '#92621c',
        },
        'brand-green': {
          300: '#b6d685',
          400: '#95c44f',
          500: '#76a136',
        },
        'brand-silver': {
          200: '#d8dbde',
          300: '#c2c6cb',
          400: '#a7adb4',
          500: '#8b939c',
        },
      },
    },
  },
  plugins: [],
};
