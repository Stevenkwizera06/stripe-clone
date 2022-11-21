/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        open_sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        primary_dark: '#0a2540',
        primary_blue: '#635bff',
        background_dark_blue: '#0a2540',
        accent_blue: '#00d4ff',
        text_color: '#adbdcc',
        background_gray: '#f6f9fc',
        dark_gray: '#778089',
      },
      backgroundImage:{
        globe: "url('./assets/images/globe_bg.png')",
      }
    },
  },
  plugins: [],
}