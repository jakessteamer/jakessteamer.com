const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const { spacing, fontFamily } = require("tailwindcss/defaultTheme");
//             lightTheme: {
//  white/primary: "var(--surface2-light)",
//  whiteBase: "var(--surface2-light)",
//  whiteAccent: "var(--surface2-light)",
//  grey/accent: "var(--surface1-light)",}
//             darkTheme: {
//  white/primary: "var(--surface2-dark)",
//  grey/accent: "var(--surface1-dark)",}

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  mode: "jit",
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: {
        DEFAULT: "#ffffff",
        accent: "#FCFCFD",
      },
      gray: {
        1: "var(--text1-dark)",
        2: "var(--text2-dark)",
        3: "var(--text2-light)",
        4: "var(--text1-light)",
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
      },
      blue: {
        100: "#f0f6ff",
        200: "#b3d2ff",
        300: "#7ab2ff",
        400: "#3d8eff",
        500: "#006aff",
        600: "#0055cc",
        700: "#004099",
        800: "#002a66",
        900: "#001533",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
