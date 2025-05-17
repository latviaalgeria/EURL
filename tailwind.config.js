/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#006838', // Dark green from logo
          light: '#008847',
        },
        secondary: {
          DEFAULT: '#FFB81C', // Gold from logo
          dark: '#E6A619',
        },
        navy: {
          DEFAULT: '#1B3B6F', // Navy blue from logo
          dark: '#132C53',
        },
      },
      fontFamily: {
        arabic: ['Noto Kufi Arabic', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}