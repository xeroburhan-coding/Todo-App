/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        background : "#0D0D0D",
        orng : "#FF5631",
        scondbg : "#1E1E1E",
        offwhite : "#CEBEA4",
        offgreen : "#11D448"
      },
      fontFamily: {
        'ITC': ['itc avant garde gothic std', 'sans-serif']
      },
    },
  },
  plugins: [],
}