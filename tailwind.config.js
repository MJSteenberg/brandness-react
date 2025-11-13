/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F2232',
        accent: '#F7D354',
        accentDark: '#E0BC36',
        sand: '#F3EDE2',
        bluish: '#DDE7EF',
        sea: '#2F4858',
        charcoal: '#1C2E3B',
        cream: '#FAF6ED',
      },
      fontFamily: {
        sans: ['"Manrope"', 'sans-serif'],
        display: ['"Lexend"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 18px 36px rgba(15, 34, 50, 0.08)',
      },
    },
  },
  plugins: [],
}
