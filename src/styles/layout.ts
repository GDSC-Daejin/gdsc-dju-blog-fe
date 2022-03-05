import styled from 'styled-components';

export const Navbar = styled.div`
  background-color: #ffffff;
  height: 12rem;
  display: flex;
  align-items: center;
`;
export const MenuBars = styled.link`
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
  right: 10px;
  width: 480px;
  height: 38px;
  border-radius: 50px;
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
