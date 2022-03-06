import styled from 'styled-components';
import MagnifyingGlassIcon from '../../../../Images/MagnifyingGlassIcon';
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
export const BlogText = styled.div`
  align-items: center;
`;
export const BlogBanner = styled.div`
  display: flex;
  padding-bottom: 20px;
`;
export const Univ = styled.div`
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
`;
export const SearchWrapper = styled.label`
  display: flex;
  margin-right: 60px;
`;
/* position: relative;
  &:before {
    background-image: MagnifyingGLassIcon;
  }
 */

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
    outline: 1px solid #d1d6db;
  }
`;
export const TitleText = styled.span`
  margin-left: 16px;
`;
/* 여기서부터 받아온 리액트 아이콘이다 */
export const NavMenu = styled.nav`
  background-color: #060b26;
  width: 250px;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;
  &:active {
    left: 0;
    transition: 350ms;
  }
`;
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
export const NavbarToogle = styled.li`
  background-color: #060b26;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Sidebar = styled.span`
  margin-left: 16px;
`;
