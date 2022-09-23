import { Box, ChakraProvider } from "@chakra-ui/react"
import { theme } from "@ui"
import { QueryClient, QueryClientProvider } from "react-query"
import { Global, css } from "@emotion/react"
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

const Wizard = () => {
  const Comp = () => <p>poo</p>
  const StepOne = () => <p>step 1</p>
  const StepTwo = () => <p>step 2</p>
  const StepThree = () => <p>step 3</p>

  return (
    <Box>
      <p>yo</p>
      <Routes>
        <Route path="/" element={<Comp />} />
        <Route path="/step-1" element={<StepOne />} />
        <Route path="/step-2" element={<StepTwo />} />
        <Route path="/step-3" element={<StepThree />} />
      </Routes>
    </Box>
  )
}

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Global styles={GlobalStyles} />
          <AnimatePresence>
            <Routes>
              <Route path="/wizard/*" element={<Wizard />} />
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
