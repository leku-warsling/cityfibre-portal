import { extendTheme } from "@chakra-ui/react"
import darken from "polished/lib/color/darken"
import lighten from "polished/lib/color/lighten"
import * as components from "./components"


const primaryColor = "#009F4D"

const theme = extendTheme({
  styles: {
    global: ({ colorMode }: any) => ({
      body: {
        bg: colorMode === "dark" ? "black" : "gray.50"
      }
    }),
  },
  fonts: {
    heading: "'Manrope', sans-serif",
    body: "'Manrope', sans-serif"
  },
  colors: {
    brand: {
      50: lighten(.5, primaryColor),
      100: lighten(.4, primaryColor),
      200: lighten(.3, primaryColor),
      300: lighten(.2, primaryColor),
      400: lighten(.1, primaryColor),
      500: primaryColor,
      600: darken(.1, primaryColor),
      700: darken(.2, primaryColor),
      800: "#17373E",
      900: darken(.4, primaryColor),
    },
  },
  components: {
    ...components
  }
})

export default theme