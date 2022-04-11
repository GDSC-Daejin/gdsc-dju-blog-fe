import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Layout from './Layout';
import { theme } from './styles/theme';
import GoogleLoader from './components/common/GoogleLoader';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './pages/ErrorFallback';

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ThemeProvider theme={theme}>
          <Layout />
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
