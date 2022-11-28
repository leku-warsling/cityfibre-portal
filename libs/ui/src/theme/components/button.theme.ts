const Button = {
  baseStyle: {
    textTransform: "uppercase",
    letterSpacing: "wide",
    fontWeight: 700,
  },
  sizes: {
    xs: {
      borderRadius: "6px",
      px: 4,
      height: 6,
    },
    sm: {
      borderRadius: "8px",
      px: 6,
    },
    md: {
      fontSize: "sm",
      height: 10,
      borderRadius: "12px",
      px: 8,
    },
    lg: {
      borderRadius: "16px",
      height: 12,
      px: 10,
    },
    xl: {
      px: 12,
      height: 14,
      fontSize: "20px",
      borderRadius: "20px",
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
      borderColor: "#2D2D2D",
      _hover: {
        bg: "secondary.500",
      },
    },
  },
  defaultProps: {
    variant: "primary",
  },
}

export default Button
