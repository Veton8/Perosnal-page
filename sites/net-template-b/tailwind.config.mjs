/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'warm-white': '#FFFBF5',
        'peach-cream': '#FFF3E8',
        'pale-sage': '#F0F2EA',
        'deep-brown': '#3D2E22',
        'warm-umber': '#8A7362',
        'burnt-sienna': '#C96B3C',
        'dusty-rose': '#C47D7D',
        'forest-teal': '#4A7C72',
        'soft-gold': '#F5E6C8',
        'warm-blush': '#E8D5C4',
        marigold: '#E8A944',
      },
      fontFamily: {
        // Fraunces handles both display and body via its OPSZ axis
        // (per audit: dropping Merriweather, one serif is enough).
        fraunces: ['"Fraunces Variable"', 'Georgia', 'serif'],
        lato: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
      },
      maxWidth: {
        prose: '720px',
      },
      columns: {
        bento: '300px',
      },
    },
  },
  plugins: [],
};
