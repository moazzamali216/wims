/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./**/*.{html,js,jsx,ts,tsx,vue,php}"],

  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}