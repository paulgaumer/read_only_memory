module.exports = {
  theme: {
    extend: {
      fontFamily: {
        body: ["iAWriter"],
        headerFooter: ["HelveticaLTStd-Roman"],
      },
      colors: {
        myGrey: {
          primary: "#EEEEEF",
          secondary: "#4A4A4A",
          lightSecondary: "#6B6A6B",
          background: "#121012",
        },
        myBlue: "#0B01AC",
        myBlack: "#1B191B",
        homepage: {
          light: "#EEEEEF",
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
