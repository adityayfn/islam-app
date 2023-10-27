/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f2d0a2",

          secondary: "#0c8760",

          accent: "#e56627",

          neutral: "#1E2124",

          "base-100": "#f3f1f3",

          info: "#8fc9e6",

          success: "#53d59f",

          warning: "#e8c111",

          error: "#f22e1c",
        },
      },
    ],
  },
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
