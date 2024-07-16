/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        darkgray: "#a8a8a8",
        lightgray: "#d0d0d0",
        gray: {
          "100": "#262626",
          "200": "#181819",
        },
        goldenrod: "#efb900",
        darkgoldenrod: "#bd8500",
        darkslategray: "#303030",
        dimgray: {
          "100": "#636363",
          "200": "#595959",
          "300": "rgba(99, 99, 99, 0.09)",
        },
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
      },
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      "3xl": "1.375rem",
      lg: "1.125rem",
      "13xl": "2rem",
      inherit: "inherit",
    },
    screens: {
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
