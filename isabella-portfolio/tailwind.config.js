export default {
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],



theme: {
  extend: {
    fontFamily: {
      serifItalic: ['"Cormorant Garamond"', 'serif'],
      sans: ['Inter', 'system-ui', 'sans-serif'],
      playfair: ['"Playfair Display"', 'serif'],
      cursive: ['Satisfy', 'cursive'],
      serifItalic2: ['"DM Serif Display"', 'serif'],
      prata: ['Prata', 'serif'],
      script: ['Allura', 'cursive'],
      },
    colors: {
      accent: "#7A1E2D",
      muted: "#6B7280",
      light: "#e199a2",
    },
  },
},
plugins: [],
}