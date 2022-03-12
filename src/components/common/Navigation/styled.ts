import styled from 'styled-components';

export const NavDesign = styled.nav`
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 990;
  height: 120px;
  width: 100%;
  @media screen and (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    height: 60px;
`;
export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1440px;
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
export const MenuBars = styled.a`
  display: flex;
  align-items: center;
`;
export const DeskNavigationWrapper = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  @media screen and (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    display: none;
  }
`;
export const BlogText = styled.div`
  align-items: center;
`;
export const BlogBanner = styled.div`
  display: flex;
  padding-bottom: 20px;
`;
export const Univ = styled.div`
  width: 52px;
  padding-top: 12px;
  padding-bottom: 5px;
  display: flex;
  margin-left: 5px;
  @media screen and (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    display: none;
  }
`;
export const Logo = styled.div`
  margin-right: 20px;
`;
export const NavMargin = styled.div`
  flex-basis: 505px;
  flex-shrink: 1;
  min-width: 20px;
`;
export const IconWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 20px;
  top: 12px;
  height: 18px;
  & svg {
    cursor: pointer;
    & hover svg path {
      fill: #d1d6db;
    }
  }
`;
export const SearchWrapper = styled.label`
  display: flex;
  margin-right: 60px;
  position: relative;
`;
export const Search = styled.input`
  width: 480px;
  height: 38px;
  border-radius: 50px;
  border: 1px solid #d1d6db;
  &::placeholder {
    padding-left: 20px;
    color: #d1d6db;
  }
  &:focus {
    &::placeholder {
      padding-left: 2px;
    }
    padding-left: 20px;
    width: 462px;
    outline: 1px solid #d1d6db;
  }
`;
export const TitleText = styled.span`
  margin-left: 16px;
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
  & svg {
    width: 40px;
    height: 20px;
  }
`;
export const MobileIconWrapper = styled.div`
  display: flex;
  width: 20px;
  & svg {
    cursor: pointer;
  }
  & svg path {
    fill: #8b95a1;
  }
`;
/* 여기서부터 받아온 리액트 아이콘이다 */

export const NavText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;
  a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }
  &:hover {
    background-color: #1a83ff;
  }
`;
export const NavMenuItems = styled.ul`
  width: 100%;
`;

export const Sidebar = styled.span`
  margin-left: 16px;
`;
