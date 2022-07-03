import React from 'react';
import { ThemeProvider } from 'styled-components';

import Layout from './Layout';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './pages/ErrorFallback';
import ScrollTop from './Utils/ScrollTop';
import ThemeButton from './assets/icons/ThemeButton';
import { useTheme } from './hooks/ThemeHandler';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <ScrollTop />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <Layout />
          <ThemeButton toggleTheme={toggleTheme} theme={theme} />
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
