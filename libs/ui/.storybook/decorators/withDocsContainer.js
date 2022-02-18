import { DocsContainer } from '@storybook/addon-docs';
import { ChakraProvider } from '@chakra-ui/react';
import theme from "../../src/theme"

const withDocsContainer = (context, children) => (
  <DocsContainer context={context}>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </DocsContainer>
);

export default withDocsContainer