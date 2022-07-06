import { extendTheme } from "@chakra-ui/react"
import darken from "polished/lib/color/darken"
import lighten from "polished/lib/color/lighten"
import * as components from "./components"

const primaryColor = "#1582ff"

export const theme = extendTheme({
  styles: {
    global: ({ colorMode }: any) => ({
      body: {
        bg: colorMode === "dark" ? "black" : "gray.50",
      },
    }),
  },
  fonts: {
    heading: "'Manrope', sans-serif",
    body: "'Manrope', sans-serif",
  },
  colors: {
    brand: {
      50: lighten(0.5, primaryColor),
      100: lighten(0.4, primaryColor),
      200: lighten(0.3, primaryColor),
      300: lighten(0.2, primaryColor),
      400: lighten(0.1, primaryColor),
      500: primaryColor,
      600: darken(0.1, primaryColor),
      700: darken(0.2, primaryColor),
      800: darken(0.3, primaryColor),
      900: darken(0.4, primaryColor),
    },
  },
  components: {
    ...components,
  },
})
