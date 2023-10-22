/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
      
      "primary":"#FFFFFF",
      "101820":"#101820",
      "12181F":"#12181F",
      "A0A0A076":"#A0A0A076",
      "E03C31":"#E03C31",
      "000000":"#000000",
      "161615":"#161615",
      "FFAA4D":"#FFAA4D",
      "1018200D":"#1018200D",
      "707070":"#707070",
      "1018204D":"#1018204D",
      "E43D30":"#E43D30",

      },
      fontFamily :{
        openSans:["Open Sans", "sans-serif"]
      }
      
    },
    screens:{
      xs:"480px",
      sm:"768px",
      md:"1060px",
    },
  },
  plugins: [],
}