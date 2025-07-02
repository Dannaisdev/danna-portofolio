/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          font1: ["Inter", "sans-serif"],
          font2: ["Raleway", "sans-serif"],
          font3: ["Roboto", "sans-serif"], 
      },
      height: {
        '200': '53.6rem',
      },
      width: {
        '28.5': '180px',
        '96x2': '3072px'
      },
      padding: {
        'pl-200': '40rem',
      },
      fontSize: {
        '20xl': '14rem',
        '19xl': '9rem'
      }
    },
  },
  plugins: [require('tailwindcss-motion')],
}

