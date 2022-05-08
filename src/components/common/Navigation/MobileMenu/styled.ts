import styled from 'styled-components';

export const MobileNavigationDesign = styled.nav`
  align-items: center;
  height: 60px;
  width: 100%;
  display: none;
  position: sticky;
  top: 0;
  @media screen and (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    display: flex;
  }
`;
export const MobileNavigationWrapper = styled.div`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 20px;
`;
export const GdscLogoWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 43%;
  & svg {
    width: 40px;
    height: 20px;
`;
export const MobileVectorWrapper = styled.div`
  display: flex;
  width: 20px;
  & svg {
    cursor: pointer;
  }
  & svg path {
    fill: ${(props) => props.theme.color.grey300};
  }
`;
