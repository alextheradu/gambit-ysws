/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gambit: {
          dark: '#0D0010',
          black: '#130018',
          card: '#1A0025',
          gold: '#C8A96E',
          violet: '#8B2FC9',
          cream: '#F5F0E8',
          muted: '#9B8EA8',
        },
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'sans-serif'],
        display: ['var(--font-cinzel)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
