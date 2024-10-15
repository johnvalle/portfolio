const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["PT Sans", ...fontFamily.sans],
        mono: ["IBM Plex Mono", ...fontFamily.mono],
      },
      colors: {
        light: {
          primary: "#2c3522",
          primaryDark: "#22291b",
          primaryDarker: "#191e15",
          primaryDarkest: "#10120c",
          primaryLight: "#354128",
          primaryLighter: "#3f4e2f",
          primaryLightest: "#495b36",
        },
        dark: {
          primary: "#939e86",
          primaryDark: "#7a876b",
          primaryDarker: "#617150",
          primaryDarkest: "#495b36",
          primaryLight: "#adb5a3",
          primaryLighter: "#c8cdc1",
          primaryLightest: "#e3e6e0",
        },
      },
    },
  },
  plugins: [],
};
