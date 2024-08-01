/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgray: "#d7d7d7",
        dark: "#09142f",
        gray: {
          "100": "#1d252b",
          "200": "rgba(29, 37, 43, 0.4)",
          "300": "rgba(29, 37, 43, 0.7)",
          "400": "rgba(9, 20, 47, 0.75)",
        },
        "colors-bluewood-30": "#bec3c8",
        "on-surface-high-emphasis": "rgba(0, 0, 0, 0.87)",
        darkslategray: {
          "100": "#3f3f3f",
          "200": "#383d4e",
        },
        white: "#fff",
        lightblue: "#c9e1ec",
        dimgray: {
          "100": "#666",
          "200": "rgba(102, 102, 102, 0.09)",
        },
        whitesmoke: "#f9f9fb",
      },
      spacing: {},
      fontFamily: {
        "noto-sans": "'Noto Sans'",
        "nunito-sans": "'Nunito Sans'",
        "playfair-display": "'Playfair Display'",
        lato: "Lato",
      },
      borderRadius: {
        "3xs": "10px",
        "21xl": "40px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
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
