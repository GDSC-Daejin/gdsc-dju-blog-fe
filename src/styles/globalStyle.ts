import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Noto Sans KR';
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
    unicode-range: U+AC00-D7A3;
  }
  @font-face {
    font-family: "Product Sans";
    src: url('../fonts/Product Sans Regular.ttf') format('truetype');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039, U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E;
  }@font-face {
    font-family: "Product Sans Bold";
    src: url("../fonts/Product Sans Bold.ttf") format("truetype");
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039, U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E;
  }
  html{
    font-size: 10px;
    font-family:  "Product Sans","Noto Sans KR", sans-serif;
  }

  body{
    color: ${(props) => props.theme.theme.color};
    background: ${(props) => props.theme.theme.background};
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
