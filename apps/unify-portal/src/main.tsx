import { ChakraProvider } from "@chakra-ui/provider"
import { css, Global } from "@emotion/react"
import { theme } from "@ui/theme"
import { StrictMode } from "react"
import * as ReactDOM from "react-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"
import App from "./app/app"
import { AuthProvider } from "./app/providers/auth.provider"

const GlobalStyles = css`
  *:not(input):focus {
    outline: none !important;
    box-shadow: none !important;
  }

  #registration .chakra-steps > li > div {
    div:first-of-type span {
      color: #1582ff;
      font-weight: 600;
    }

    div:last-of-type span {
      font-weight: 600;
      color: white !important;
      font-size: 20px;
      padding-left: 8px;
    }
  }

  #registration .chakra-steps > li[aria-disabled="true"] > div {
    div:first-of-type {
      background: none;
      span {
        color: white;
      }
    }
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
          <AuthProvider>
            <Global styles={GlobalStyles} />
            <App />
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root")
)
