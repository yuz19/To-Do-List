/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        PrimaryColor:"#F1F0E8",
        SecondaryColor:"#EEE0C9",
        HoverSecondary:"#e3c897",
        ThirdColor:"#ADC4CE"
      },
      fontFamily:{
        Amatic:'Amatic SC'
      }
    },
  },
  plugins: [],
}