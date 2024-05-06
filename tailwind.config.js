/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'red-primary': '#DB1919',
      },
      fontFamily: {
        'quicksand': 'Quicksand, sans-serif'
      },
      colors: {
        'red-primary': '#DB1919'
      }
    },
  },
  plugins: []
}

