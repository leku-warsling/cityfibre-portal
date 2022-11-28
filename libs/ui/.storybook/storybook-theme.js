import { create } from "@storybook/theming"
// @ts-ignore
import brandImage from "./logo.png"

const theme = {
  manager: create({
    base: "light",
    brandTitle: "Cityfibre UI",
    brandUrl: "",
    fontBase: '"Manrope", sans-serif',
    brandImage,
    appBg: "#edf2f7",
  }),
  docs: create({
    base: "light",
    fontBase: '"Manrope", sans-serif',
    textColor: "#04091A",
    appBg: "#edf2f7",
  }),
}

export default theme
