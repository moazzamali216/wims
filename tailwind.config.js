/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./public/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}