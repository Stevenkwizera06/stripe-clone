/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        open_sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'primary-dark': '#0a2540',
        'primary-blue': '#635bff',
        'accent-blue': '#00d4ff',
        'text-color': '#adbdcc',
        'dark-gray': '#778089',
      },
      backgroundImage:{
        globe: "url('../assets/images/globe_bg.png')",
      },
      height:{
        '250': '70vh',
      },
      width:{
        medium: '44rem',
        '150':'400px',
        '200': '540px',
        '300': '704px',
        '350': '740px',
        '500':'1000px'
      },
      margin:{
        "15":'59px'
      }
    },
  },
  plugins: [],
}