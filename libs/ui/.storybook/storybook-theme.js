import { create } from "@storybook/theming"
// @ts-ignore
import brandImage from "./storybook-logo.svg"

const theme = {
  manager: create({
    base: "light",
    brandTitle: "Cityfibre UI",
    brandUrl: "",
    brandImage,
  }),
  docs: create({
    base: "light",
    fontBase: "TT Interphases Variable, Arial, Helvetica, sans-serif",
    textColor: "#04091A"
  }) 
}

export default theme 