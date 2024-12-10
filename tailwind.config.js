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
      }
    },
  },
  plugins: [],
}

