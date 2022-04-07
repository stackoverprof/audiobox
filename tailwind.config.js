module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "5%",
        sm: "32px",
      },
    },
    extend: {
      colors: {
        base: "#ffffff",
        primary: "#3b3b3b",
        accent: "#FF5B14",
        info: "#2DA7FB",
        warning: "#FFCB11",
        danger: "#ec4141",
        success: "#67db8e",
      },
      fontFamily: {
        main: "ProximaNova, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
      },
      screens: {
        "-2xl": { raw: "(max-width: 1535px)" },
        "-xl": { raw: "(max-width: 1279px)" },
        "-lg": { raw: "(max-width: 1023px)" },
        "-md": { raw: "(max-width: 767px)" },
        "-sm": { raw: "(max-width: 639px)" },
      },
    },
  },
  plugins: [],
};
