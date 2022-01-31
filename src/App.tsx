import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { theme } from './styles/theme';
import Layout from './Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
