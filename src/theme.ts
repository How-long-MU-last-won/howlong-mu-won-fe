const theme = {
  fonts:{
    heading: `'Bebas Neue', sans-serif`,
  },
  styles: {
    global: {
      "html, body": {
        fontFamily: "Inter, sans-serif",
        // bg: "base.d400",
        color: "gray.200",
        h: "full"
      }
    }
  },
  breakpoints: {
    xs: "30em",
    sm: "36em",
    md: "46.25em",
    lg: "60em",
    xl: "78.125em",
    xxl: "95em",
    xxxl: "112.5em",
    xxxxl: "125em"
  },
  colors: {
    base: {
      50: "#eceff1",
      100: "#cfd8dc",
      200: "#b0bec5",
      300: "#90a4ae",
      400: "#78909c",
      500: "#607d8b",
      600: "#546e7a",
      700: "#455a64",
      800: "#37474f",
      900: "#263238",
      d100: "#171F23",
      d200: "#12181B",
      d400: "#0D1214",
      d700: "#080C0D",
      black: "#1a1a1a",
      red: "#f10808",
    },
    bg: {
      black: "#231F20",
      black200: "#2a2a2a",
      red: "#c70101",
      red2: "#9f0000"
    }
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "normal",
        color: "inherit"
      }
    },
    Text: {
      baseStyle: {
        fontFamily: "inherit",
        fontWeight: "normal",
        lineHeight: "tall",
        color: "inherit",
        fontSize: "inherit"
      }
    },
    Button: {
      baseStyle: {
        textTransform: "uppercase",
        // letterSpacing: "widest",
        fontWeight: "normal",
      }
    }
  }
};

export default theme;
