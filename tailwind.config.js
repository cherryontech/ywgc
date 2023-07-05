/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['Fjalla One', 'sans-serif'],
        sans: ['Merriweather Sans', ...defaultTheme.fontFamily.sans]
      }
    },
    plugins: [],
  }
}