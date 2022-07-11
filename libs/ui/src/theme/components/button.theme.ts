const Button = {
  baseStyle: {
    borderRadius: "4px",
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
      bg: "brand.500",
      color: "#fff",
      _hover: {
        bg: "brand.900",
      },
      _active: {
        bg: "brand.800",
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
    variant: "solid",
    colorScheme: "brand",
  },
}

export default Button
