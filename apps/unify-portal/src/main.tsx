import { StrictMode } from "react"
import * as ReactDOM from "react-dom"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "@ui"
import { QueryClient, QueryClientProvider } from "react-query"
import { Global, css } from "@emotion/core"
import { BrowserRouter } from "react-router-dom"
import App from "./app/app"

const GlobalStyles = css`
  *:not(:input):focus {
    outline: none !important;
    box-shadow: none !important;
  }
`

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30000,
    },
  },
})

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Global styles={GlobalStyles} />
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root")
)
