import { ComponentStyleConfig } from "@chakra-ui/theme"

const Nav: ComponentStyleConfig = {
  parts: ['nav', 'item', 'subnav'],
  baseStyle: ({
    colorScheme,
    colorMode,
    orientation,
    theme,
  }) => {
    return {
      nav: {
        display: "flex",
        flexDirection: orientation === "vertical" ? 'column' : "row",
        gap: 2,
      },
      item: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        gap: 2,
        fontWeight: 'medium',
        lineHeight: 'normal',
        color: 'white',
        rounded: 5,
        _active: {
          bg: colorMode === "dark" ? `${colorScheme}.200` : `${colorScheme}.500`,
        },
        _hover: {
          cursor: "pointer",
          bg: colorMode === "dark" ? `${colorScheme}.200` : `${colorScheme}.500`,
        } 
      },
    }
  },
  sizes: {
    sm: {
      item: {
        fontSize: '0.75rem',
        px: 2,
        py: 1,
      },
    },
    md: {
      item: {
        fontSize: '1rem',
        fontWeight: 600,
        px: 4,
        py: 3,
      },
    },
  },
  variants: {
    
  },
  defaultProps: {
    size: 'md',
    orientation: "vertical",
    colorScheme: "brand",
  },
}

export default Nav