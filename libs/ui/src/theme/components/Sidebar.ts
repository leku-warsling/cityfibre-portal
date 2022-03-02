import { ComponentStyleConfig } from "@chakra-ui/theme"

const Sidebar: ComponentStyleConfig = {
  baseStyle: ({
    colorScheme,
    colorMode,
    orientation,
    theme,
  }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    color: "white",
    height: "100vh",
    maxWidth: "360px",
    gap: 6,
    bg: `${colorScheme}.800`,
  }),
  variants: {},
  defaultProps: {
    colorScheme: "brand"
  }
}

export default Sidebar