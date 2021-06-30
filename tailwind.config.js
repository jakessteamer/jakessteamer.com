const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const { spacing, fontFamily } = require("tailwindcss/defaultTheme");
// "var()"
module.exports = {
    purge: ["./components/**/*.js", "./pages/**/*.js"],
    mode: "jit",
    darkMode: "class",
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: {
                DEFAULT: "var(--surface1-dark)",
            },
            white: {
                DEFAULT: "var(--surface2-light)",
            },
            gray: colors.coolGray,
            blue: {
                DEFAULT: "var(--brand-light)",
                dark: "var(--brand-dark)",
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
    plugins: [require("@tailwindcss/line-clamp")],
};
