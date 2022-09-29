import { ComponentStyleConfig } from "@chakra-ui/theme"

const Nav: ComponentStyleConfig = {
  parts: ["nav", "item", "subnav"],
  baseStyle: ({ colorScheme, colorMode, orientation, isCollapsed }) => {
    return {
      nav: {
        display: "flex",
        flexDirection: orientation === "vertical" ? "column" : "row",
        gap: 2,
      },
      item: {
        display: "flex",
        alignItems: "center",
        justifyContent: isCollapsed ? "center" : "flex-start",
        width: isCollapsed ? "fit-content" : "100%",
        gap: isCollapsed ? 0 : 2,
        lineHeight: "normal",
        color: "black",
        fontSize: "1rem",
        fontWeight: 600,
        px: isCollapsed ? 2.5 : 4,
        py: 3,
        rounded: 5,
        _active: {
          bg: colorMode === "dark" ? `${colorScheme}.200` : `secondary.500`,
          color: "black",
        },
        _hover: {
          cursor: "pointer",
          color: "black",
          boxShadow: "base",
          bg: colorMode === "dark" ? `${colorScheme}.200` : `secondary.500`,
        },
      },
    }
  },
  defaultProps: {
    orientation: "vertical",
    colorScheme: "primary",
  },
}

export default Nav
