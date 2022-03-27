import styled from 'styled-components';

export const NavDesign = styled.nav`
  color: ${(props) => props.theme.color.white};
  position: sticky;
  top: 0;
  z-index: 990;
  height: 70px;
  width: 100vw;
  @media screen and (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    height: 60px;
`;
export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  margin: auto;
  height: 100%;
`;
export const NavInner = styled.div`
  padding: 0 20px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media screen and (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    justify-content: space-between;
`;
export const BlogWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const DeskNavigationWrapper = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  @media screen and (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    display: none;
  }
`;
export const BeforeMargin = styled.div`
  display: flex;
  width: 110px;
  height: 100%;
`;
export const NavMargin = styled.div`
  flex-grow: 1;
  min-width: 20px;
`;
export const VectorWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 20px;
  top: 9px;
  @media screen and (max-width: 630px) {
    & svg {
      position: absolute;
      top: -20px;
      right: 0px;
    }
  }
  & svg {
    cursor: pointer;
    & hover svg path {
      fill: ${(props) => props.theme.color.grey300};
    }
  }
`;
export const SearchWrapper = styled.label`
  display: flex;
  margin-right: 60px;
  position: relative;
`;
export const Search = styled.input`
  min-width: 400px;
  height: 30px;
  border-radius: 50px;
  border: 1px solid ${(props) => props.theme.color.grey300};
  padding-left: 20px;
  color: ${(props) => props.theme.color.grey900};
  @media screen and (max-width: 1000px) {
    width: 280px;
  }
  @media screen and (max-width: 780px) {
    width: 250px;
  }
  @media screen and (max-width: 630px) {
    display: none;
  }
  &::placeholder {
    color: ${(props) => props.theme.color.grey300};
  }
`;
export const MobileNavigationWrapper = styled.div`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  display: none;
  @media screen and (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    display: flex;
  }
`;

export const GdscLogoWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 43%;
  top: 20px;
  & svg {
    width: 40px;
    height: 20px;
  }
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
