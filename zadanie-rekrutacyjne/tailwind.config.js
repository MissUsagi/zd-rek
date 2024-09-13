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
      container: {
        padding: {
          DEFAULT: "1.25rem",
          xs: "1.25rem",
          lg: "0px",
        },
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1200px",
        },
      },
      fontFamily: {
        flex: ["Roboto Flex", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        condensed: ["Roboto Condensed", "sans-serif"],
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("custom-hover", "@media (hover: hover)");
    },
  ],
};
