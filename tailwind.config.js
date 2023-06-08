/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['Fjalla One', 'sans-serif'],
        body: ['Merriweather Sans', 'sans-serif'],
        button: ['Merriweather Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
 }
