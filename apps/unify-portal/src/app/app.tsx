import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion"
import { ChakraProvider } from "@chakra-ui/provider"
import { Global } from "@emotion/react"
import { theme, rebrand } from "@ui/theme"
import { useFlags } from "launchdarkly-react-client-sdk"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./providers/auth.provider"
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
  const { rebrandTheme } = useFlags()
  const AppTheme = rebrandTheme ? rebrand : theme
  return (
    <ChakraProvider theme={AppTheme}>
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
