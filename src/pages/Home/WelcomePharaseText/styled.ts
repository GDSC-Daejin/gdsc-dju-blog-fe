import styled from 'styled-components';

export const WelcomePhrase = styled.div`
  span {
    //styleName: E h7;
    font-family: Google Sans Display;
    font-size: ${(props) => props.theme.fontSize.h7};
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
  }
  p {
    font-family: Noto Sans KR;
    font-size: 2.25rem;
    font-weight: 500;
    line-height: 3.25rem;
    letter-spacing: 0em;
    margin: 10px 0px 26px;
  }
`;
