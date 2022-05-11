import theme from "../src/theme"
import themes from "./storybook-theme"
import Code from "./components/Code"
import { withDocsContainer } from "./decorators"

export const parameters = {
  chakra: {
    theme,
  },
  docs: {
    theme: themes.docs,
    components: {
      code: Code,
    },
    container: ({ context, children }) => withDocsContainer(context, children),
  },
}
