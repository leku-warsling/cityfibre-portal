import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@ui';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Global, css } from '@emotion/core';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MigrationErrorsPage from './pages/migration';
import LoginPage from './pages/auth/login.page';
import MainLayout from './layouts/MainLayout';
import { AuthProvider } from './providers/auth.provider';
import RequireAuth from './components/route/require-auth';
import { AnimatePresence } from 'framer-motion';

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
          <AuthProvider>
            <Global styles={GlobalStyles} />
            <AnimatePresence>
              <Routes>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={
                    <RequireAuth>
                      <MigrationErrorsPage />
                    </RequireAuth>
                  }/>
                </Route>
              </Routes>
            </AnimatePresence>
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
