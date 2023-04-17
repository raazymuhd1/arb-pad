/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
       generalSansBold: ["GeneralSans-Bold", "Sans-serif"],
       generalSansSemi: ["GeneralSans-Semibold", "Sans-serif"],
       generalSansMedium: ["GeneralSans-Medium", "Sans-serif"],
       generalSansRegular: ["GeneralSans-Regular", "Sans-serif"],
    },
    colors: {
      primary: "#74D224",
      secondary: "#D2dcc9",
      third: "#fff",
      fourth: '#080825'
    },
    extend: {},
  },
  plugins: [],
}