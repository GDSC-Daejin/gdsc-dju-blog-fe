import styled from 'styled-components';

export const MenuInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
  margin-right: 60px;
  margin-left: 60px;
  background: transparent;
  z-index: 1000;
  @media screen and (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 20px;
`;
export const MenuLine = styled.span`
  width: 30px;
  height: 4px;
  transition: all 0.4s;
  background: #000000;
  transition: all 0.35s;
  margin: 3px 0px;
  @media screen and (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    width: 20px;
    height: 3px;
    margin: 2px;
`;
