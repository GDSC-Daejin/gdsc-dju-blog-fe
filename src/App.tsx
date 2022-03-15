import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Layout from './Layout';
import { theme } from './styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default App;
