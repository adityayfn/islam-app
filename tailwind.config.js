/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        second: "#282A3A",
        third: "#735F32",
        fourth: "#C69749", //#95
      },
    },
  },
  plugins: [require("daisyui")],
}
