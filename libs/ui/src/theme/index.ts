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

export const rebrand = extendTheme({
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
    secondary: {
      50: "#fff3e9",
      100: "#ffe1c9",
      200: "#ffcda5",
      300: "#ffb981",
      400: "#ffaa66",
      500: "#ff9b4b",
      600: "#ff9344",
      700: "#ff893b",
      800: "#ff7f33",
      900: "#ff6d23",
    },
    primary: {
      50: "#ffe9f9",
      100: "#fec8f1",
      200: "#fda3e8",
      300: "#fc7ede",
      400: "#fc63d7",
      500: "#fb47d0",
      600: "#fa40cb",
      700: "#fa37c4",
      800: "#f92fbe",
      900: "#f820b3",
    },
  },
  components: {
    ...components,
  },
})
