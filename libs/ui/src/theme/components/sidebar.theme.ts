import { ComponentMultiStyleConfig } from "@chakra-ui/theme"

const Sidebar: ComponentMultiStyleConfig = {
  parts: ["root", "header", "section"],
  baseStyle: ({ colorScheme }) => ({
    root: {
      bg: `${colorScheme}.500`,
      alignItems: "flex-start",
      flexDirection: "column",
      maxWidth: "320px",
      display: "flex",
      height: "100vh",
      color: "black",
      gap: 6,
    },
    section: {
      width: "100%",
      px: 6,
      py: 8,
    },
  }),
  variants: {
    slim: {
      root: {
        width: "auto",
      },
      header: {
        p: 4,
      },
      section: {
        p: 4,
      },
    },
    static: {
      root: {
        width: ["285px", "320px"],
      },
    },
  },
  defaultProps: {
    colorScheme: "primary",
  },
}

export default Sidebar
