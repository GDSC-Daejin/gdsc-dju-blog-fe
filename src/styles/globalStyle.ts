import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body{
    color: ${(props) => props.theme.theme.color};
    background: ${(props) => props.theme.theme.background};
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 1.5;
    word-break: keep-all;
    font-size: 10px;
    margin: 0;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend{
    margin: 0;
    padding: 0;
    border: 0;
  }

  :focus {
    outline: 0;
  }
`;
