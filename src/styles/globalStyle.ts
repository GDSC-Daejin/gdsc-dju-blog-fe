import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    color: ${(props) => props.theme.theme.color};
    background: ${(props) => props.theme.theme.background};
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 1.5;
    word-break: keep-all;
    font-size: 10px;
  }
`;
