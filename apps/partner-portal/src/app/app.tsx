import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion"
import { ChakraProvider } from "@chakra-ui/provider"
import { Global } from "@emotion/react"
import { theme } from "@ui/theme"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"
import AuthProvider from "./components/route/auth0-provider-with-history"
import styles from "./global.styles"
import Router from "./routes"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30000,
    },
  },
})

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
            <Global styles={styles} />
            <LazyMotion features={domAnimation}>
              <AnimatePresence>
                <Router />
              </AnimatePresence>
            </LazyMotion>
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
