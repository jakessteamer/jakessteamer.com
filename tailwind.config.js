const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  mode: "jit",
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: "#fcfcfd",
      gray: {
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
        50: "#10e108ff",
        100: "#f0f6ff",
        200: "#b3d2ff",
        300: "#7ab2ff",
        400: "#3d8eff",
        500: "#006aff",
        600: "#0055cc",
        700: "#003e94",
        800: "#002861",
        900: "#001129",
      },
      cyan: "#04F9F2",
      indigo: colors.indigo,
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      spacing: {
        "8%": "8%",
        18: "4.5rem",
      },
      zIndex: {
        60: "60",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.blue.900"),
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("postcss-easing-gradients"),
  ],
};
