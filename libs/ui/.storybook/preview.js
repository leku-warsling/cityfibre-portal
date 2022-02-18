import theme from "../src/theme"
import themes from './storybook-theme';
import { withDocsContainer } from "./decorators"

export const parameters = {
  chakra: {
    theme,
  },
  docs: {
    theme: themes.docs,
    container: ({ context, children }) => withDocsContainer(context, children)
  },
  backgrounds: {
    default: "light"
  }
}