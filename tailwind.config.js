/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
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
