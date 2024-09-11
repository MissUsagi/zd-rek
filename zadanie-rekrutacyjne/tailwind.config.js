/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0147FF",
        secondary: "#FFF",
        gray: {
          dark: "#282828",
          light: "#EDEDED",
        },
      },
      fontFamily: {
        flex: ["Roboto Flex"],
        bebas: ["Bebas Neue"],
        condensed: ["Roboto Condensed", "sans-serif"],
      },
      spacing: {
        88: "88px",
        120: "120px",
      },
      width: {
        576: "576px",
        600: "600px",
        825: "825px",
        1200: "1200px",
        1264: "1264px",
        1440: "1440px",
      },
      maxWidth: {
        1200: "1200px",
      },
      height: {
        446: "446px",
        825: "825px",
      },
    },
  },
  plugins: [],
};
