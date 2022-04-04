import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Layout from './Layout';
import { theme } from './styles/theme';
import GoogleLoader from './components/common/GoogleLoader';
import { AnimatePresence } from 'framer-motion';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './pages/Error';

function App() {
  return (
    <>
      <ErrorBoundary fallback={<Error />}>
        <Suspense
          fallback={
            <AnimatePresence>
              <GoogleLoader background={false} />
            </AnimatePresence>
          }
        >
          <ThemeProvider theme={theme}>
            <Layout />
          </ThemeProvider>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
