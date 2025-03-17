/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#1a1a1a',
        secondary: '#FFD700', // Color amarillo para el logo
        background: '#000000',
        text: '#FFFFFF',
      },
    },
  },
  plugins: [],
} 