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
        // -----------------------------------
        // CHANGE HERE FOR CUSTOM HOVER COLORS
        // -----------------------------------
        hover: {
          titles: "#1DFF00",
          authors: "#53BDF9",
          editors: "#0000FF",
          collections: "#7E38DA",
        },
        // -----------------------------------
        // -----------------------------------
      },
      screens: {
        lg856: "856px",
        lg999: "999px",
        xl1141: "1141px",
        xxl: "1425px",
      },
    },
  },
  variants: {
    borderWidth: ["responsive", "first", "last", "hover", "focus"],
    textColor: ["responsive", "hover", "focus", "visited"],
  },
  plugins: [],
}
