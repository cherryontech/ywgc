/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        number: ['BioRhyme', 'sans-serif'],
        sans: ['Montserrat Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'brand-primary': '#367055',
      },
    },
    plugins: [],
  }
}