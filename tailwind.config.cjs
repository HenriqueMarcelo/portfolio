/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'],
        logo: ['Reem Kufi'],
      },
    },
  },
  safelist: ['sm:text-right', 'sm:text-left'],
  plugins: [],
}
