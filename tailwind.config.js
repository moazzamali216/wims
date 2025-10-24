/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html","./index.html","./public/**/*.html",],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}