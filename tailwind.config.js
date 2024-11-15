/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Updated from "purge" to "content"
  theme: {
    extend: {
      colors: {
        primary: '#B8B099',
        secondary: {
          400: '#243c5a',
        },
      },
      width: {
        130: '34rem',
      },
      screens: {
        sm: '540px',
      },
    },
  },
  plugins: [],
};
