module.exports = {
  theme: {
    extend: {
      colors: {
        myGrey: {
          primary: "#E5E5E5",
          secondary: "#4A4A4A",
          background: "#121012",
        },
        homepage: {
          light: "#E5E5E5",
          dark: "#121012",
        },
      },
      screens: {
        xxl: "1360px",
      },
    },
  },
  variants: {
    borderWidth: ["responsive", "first", "last", "hover", "focus"],
  },
  plugins: [],
}
