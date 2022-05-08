import styled from 'styled-components';

export const NavDesign = styled.nav`
  background-color: ${(props) => props.theme.color.white};
  position: sticky;
  top: 0;
  z-index: 990;
  height: 70px;
  width: 100%;
  @media screen and (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    height: 60px;
  }
  @media screen and (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    display: none;
  }
`;
export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
`;
export const BlogWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const DeskNavigationWrapper = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  @media screen and (max-width: ${(props) => props.theme.windowSize.tablet}px) {
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
  @media screen and (max-width: ${(props) => props.theme.windowSize.tablet}px) {
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
  font-size: ${(props) => props.theme.fontSize.body2};
  border-radius: 50px;
  border: 1px solid ${(props) => props.theme.color.grey300};
  padding-left: 20px;
  color: ${(props) => props.theme.color.grey900};
  @media screen and (max-width: ${(props) => props.theme.windowSize.desk}px) {
    min-width: 280px;
  }
  @media screen and (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    display: none;
  }
  &::placeholder {
    color: ${(props) => props.theme.color.grey300};
  }
`;
export const ShortNavigation = styled.nav`
  position: sticky;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  @media (min-width: ${(props) => props.theme.windowSize.tablet}px) {
    display: none;
  }
`;
