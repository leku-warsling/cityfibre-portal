import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@ui';
import { lazy } from "@loadable/component";
import { QueryClient, QueryClientProvider } from 'react-query';
import { Global, css } from '@emotion/core';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Suspense } from 'react';

const MigrationErrorsPage = lazy(() => import('./pages/migration'))

const GlobalStyles = css`
  *:focus {
    outline: none !important;
    box-shadow: none !important;
  }
`;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30000,
    },
  },
});

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Global styles={GlobalStyles} />
          <AnimatePresence>
            <Routes>
              <Route path="/" element={
                <Suspense fallback="loading...">
                  <MigrationErrorsPage />
                </Suspense>
              }/>
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
