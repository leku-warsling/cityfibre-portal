import { extendTheme } from "@chakra-ui/react"
// import darken from "polished/lib/color/darken"
// import lighten from "polished/lib/color/lighten"
import * as components from "./components"

export const theme = extendTheme({
  styles: {
    global: ({ colorMode }: any) => ({
      body: {
        bg: colorMode === "dark" ? "black" : "gray.100",
      },
    }),
  },
  fonts: {
    heading: "'Manrope', sans-serif",
    body: "'Manrope', sans-serif",
  },
  colors: {
    primary: {
      50: "#cfe8f4",
      100: "#badfef",
      200: "#a5d5ea",
      300: "#90cbe6",
      400: "#7cc2e1",
      500: "#67B8DC",
      600: "#3ea5d2",
      700: "#2989b4",
      800: "#20698a",
      900: "#164a61",
    },
    secondary: {
      50: "#f1feee",
      100: "#ddfed5",
      200: "#c9fdbd",
      300: "#b4fca4",
      400: "#a0fb8c",
      500: "#00FA69",
      600: "#64f842",
      700: "#3bf611",
      800: "#2ccd07",
      900: "#219b06",
    },
  },
  components: {
    ...components,
  },
})
