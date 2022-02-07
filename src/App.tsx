import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { darkTheme, lightTheme } from './styles/theme';
import Layout from './Layout';
import { useTheme } from './hooks/useTheme';
import { GlobalStyle } from './styles/globalStyle';

function App() {
  const [themeMode, setTheme] = useTheme();

  const theme = themeMode === 'light' ? lightTheme : darkTheme;
  console.log(themeMode);
  return (
    <ThemeProvider theme={theme}>
      <button onClick={setTheme as () => void}>toggle</button>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
