import styled from 'styled-components';

export const MobileNavigationWrapper = styled.div`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  position: sticky;
  top: 0;
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
export const MobileNavigationDesign = styled.nav`
  display: none;
  height: 60px;
  align-items: center;
  width: 100%;
  position: sticky;
  @media screen and (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    display: flex;
  }
`;
