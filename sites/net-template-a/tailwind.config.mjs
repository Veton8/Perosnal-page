/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        linen: '#F3EDE4',
        charcoal: '#2C2825',
        'warm-gray': '#7A7268',
        terracotta: '#B8694A',
        'deep-terracotta': '#9A5438',
        sand: '#E0D8CE',
        parchment: '#F0EBE1',
        sage: '#7A8B6F',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        lora: ['Lora', 'serif'],
        sourceSans: ['"Source Sans 3"', 'sans-serif'],
      },
      maxWidth: {
        content: '680px',
        wide: '960px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
      },
    },
  },
  plugins: [],
};
