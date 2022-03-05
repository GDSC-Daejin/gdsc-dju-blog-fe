import styled from 'styled-components';

export const Navbars = styled.div`
  background-color: #ffffff;
  height: 12rem;
  display: flex;
  align-items: center;
`;
export const MenuBars = styled.a`
  display: flex;
  align-items: center;
`;
export const SideMenu = styled.div`
  margin-left: 60px;
  margin-right: 60px;
  width: 30px;
`;
export const BlogText = styled.div`
  align-items: center;
`;
export const GDSCBlog = styled.div`
  display: flex;
  padding-bottom: 18px;
`;
export const Univ = styled.img`
  padding-top: 12px;
  padding-bottom: 5px;
  display: flex;
  margin-left: 5px;
`;
export const Logo = styled.div`
  margin-right: 20px;
`;
export const Search = styled.input`
  position: absolute;
  padding-left: 10px;
  right: 10px;
  width: 480px;
  height: 38px;
  border-radius: 50px;
  border: 1px solid #d1d6db;
  &::placeholder {
    padding-left: 10px;
    color: #d1d6db;
  }
  &:focus {
    outline: 1px solid #d1d6db;
  }
`;
export const Span = styled.span`
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
