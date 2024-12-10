/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // mainBg:'#0B6C33',
        subnav:'#00b7eb',
        textbg:'#020726',
        mainBg:'#946846'
      },
      fontFamily:{
        custom:[ "Yrsa", 'serif']
      },
      screens:{
        'md': '768px',   // Tablets (iPad included)
      'lg': '1024px',  // Laptops (all sizes)
      'xl': '1440px',  // Large screens (desktops)
      '2xl': '1920px',
      }
    },
  },
  plugins: [],
}

