import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { darkTheme, lightTheme } from './styles/theme';
import Layout from './Layout';

import { GlobalStyle } from './styles/globalStyle';
import { useRecoilState } from 'recoil';
import { themeState } from './store/theme';

function App() {
  const [themeMode] = useRecoilState(themeState);

  const theme = themeMode.light ? lightTheme : darkTheme;
  console.log(themeMode);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
