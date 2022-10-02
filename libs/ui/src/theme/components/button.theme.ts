const Button = {
  baseStyle: {
    borderRadius: "4px",
    textTransform: "uppercase",
    letterSpacing: "wide",
    fontWeight: 700,
  },
  sizes: {
    md: {
      fontSize: "sm",
    },
    xl: {
      py: 5,
      px: 10,
      fontSize: "22px",
    },
  },
  variants: {
    primary: {
      bg: "black",
      color: "#fff",
      _hover: {
        bg: "secondary.500",
        color: "black",
      },
      _active: {
        bg: "secondary.500",
        color: "black",
      },
      _disabled: {
        bg: "#DBDBDB",
        color: "#7A7A7A",
      },
    },
    secondary: {
      bg: "white",
      color: "#121212",
      border: "1px solid",
      borderColor: "#B5B5B5",
      _hover: {
        bg: "#EDEDED",
      },
    },
  },
  defaultProps: {
    variant: "primary",
  },
}

export default Button
