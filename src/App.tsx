import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Layout from './Layout';
import { theme } from './styles/theme';
import GoogleLoader from './components/common/GoogleLoader';

function App() {
  return (
    <>
      <Suspense fallback={<GoogleLoader background={false} />}>
        <ThemeProvider theme={theme}>
          <Layout />
        </ThemeProvider>
      </Suspense>
    </>
  );
}

export default App;
