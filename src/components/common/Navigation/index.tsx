import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from '../SidebarData/index';
import {
  Navbars,
  Logo,
  BlogText,
  MenuBars,
  TitleText,
  BlogWrapper,
  Univ,
  BlogBanner,
  SideMenu,
  Search,
  NavDesign,
  NavWrapper,
  SearchWrapper,
  NavMargin,
} from './styled';
/* 아이콘 컬러 전체 변경 기능 */
import { IconContext } from 'react-icons';
import MenuToggleIcon from '../MenuToggleIcon/index';
import GdscBlog from '../../../Images/GdscBlog';
import DaejinUniv from '../../../Images/DaejinUniv';
import GdscLogo from '../../../Images/GdscLogo';
function Navigation() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      {/* 아이콘 컬러 전체 변경 기능 */}
      <IconContext.Provider value={{ color: '#fff' }}>
        {/* 네비게이션 토글 코드*/}
        <NavDesign>
          <NavWrapper>
            <Navbars>
              <BlogWrapper>
                <SideMenu>
                  <MenuToggleIcon />
                </SideMenu>
                <MenuBars href="/">
                  <Logo>
                    <GdscLogo />
                  </Logo>
                  <BlogText>
                    <Univ>
                      <DaejinUniv />
                    </Univ>
                    <BlogBanner>
                      <GdscBlog />
                    </BlogBanner>
                  </BlogText>
                </MenuBars>
              </BlogWrapper>
              <NavMargin />
              <SearchWrapper>
                <Search
                  type="text"
                  className="search"
                  placeholder="궁금한 정보나 계정을 입력해주세요"
                />
              </SearchWrapper>
            </Navbars>
          </NavWrapper>
        </NavDesign>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle"></li>
            {/* SidebarData를 순서대로 담기*/}
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <TitleText>{item.title}</TitleText>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
export default Navigation;
