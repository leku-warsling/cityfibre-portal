import { ComponentMultiStyleConfig } from "@chakra-ui/theme"

const Sidebar: ComponentMultiStyleConfig = {
  parts: ["root", "header", "section"],
  baseStyle: ({
    colorScheme,
    variant,
  }) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      color: "white",
      height: "100vh",
      maxWidth: "320px",
      gap: 6,
      bg: `${colorScheme}.800`,
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
        width: "auto"
      },
      header: {
        p: 4
      },
      section: {
        p: 4
      },
    },
    static: {
      root: {
        width: ["285px", "320px"]
      }
    }
  },
  defaultProps: {
    colorScheme: "brand"
  }
}

export default Sidebar