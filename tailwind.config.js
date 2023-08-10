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
        sans: ['Merriweather Sans', ...defaultTheme.fontFamily.sans]
      }
    },
    plugins: [],
  }
}