import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Layout from './Layout';
import { theme } from './styles/theme';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './pages/ErrorFallback';
import ScrollTop from './Utils/ScrollTop';

function App() {
  return (
    <>
      <ScrollTop />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ThemeProvider theme={theme}>
          <Layout />
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
