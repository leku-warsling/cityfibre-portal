import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "@ui"
import { QueryClient, QueryClientProvider } from "react-query"
import { Global, css } from "@emotion/core"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { Suspense } from "react"
import MainLayout from "./layouts/main.layout"
import {
  IncidentPage,
  ServiceDetailsForm,
  RaiseIncidentPage,
} from "./pages/incident"

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

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Global styles={GlobalStyles} />
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route
                  index
                  element={
                    <Suspense fallback="loading...">
                      <IncidentPage />
                    </Suspense>
                  }
                />
                <Route
                  path="/incidents/create"
                  element={
                    <Suspense fallback="loading...">
                      <RaiseIncidentPage />
                    </Suspense>
                  }
                >
                  <Route
                    path="/incidents/create/"
                    element={<ServiceDetailsForm />}
                  />
                </Route>
              </Route>
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
