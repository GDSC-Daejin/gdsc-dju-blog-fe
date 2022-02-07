import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    color: ${(props) => props.theme.theme.color};
    background: ${(props) => props.theme.theme.background};
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    word-break: keep-all;
    -webkit-tap-highlight-color: transparent;
    transition: 0.3s;
  }
`;
