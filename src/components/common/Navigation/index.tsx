import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from '../SidebarData';
import {
  NavInner,
  Logo,
  BlogText,
  MenuBars,
  TitleText,
  BlogWrapper,
  Univ,
  BlogBanner,
  Search,
  NavDesign,
  NavWrapper,
  SearchWrapper,
  NavMargin,
  IconWrapper,
  GdscLogoWrapper,
  MenuToggleIconWrapper,
  MobileIconWrapper,
  MobileNavigationWrapper,
  DeskNavigationWrapper,
  NavMenuItems,
  NavbarToogle,
  Sidebar,
} from './styled';
/* 아이콘 컬러 전체 변경 기능 */
import MenuToggleIcon from '../MenuToggleIcon';
import GdscBlogLogo from '../../../Images/GdscBlogLogo';
import DaejinUnivLogo from '../../../Images/DaejinUnivLogo';
import GdscLogo from '../../../Images/GdscLogo';
import MagnifyingGlassIcon from '../../../Images/MagnifyingGlassIcon';

function Navigation() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      {/* 아이콘 컬러 전체 변경 기능 */}
      {/*Desk Navigation */}
      <NavDesign>
        <NavWrapper>
          <NavInner>
            <DeskNavigationWrapper>
              <BlogWrapper>
                <MenuToggleIcon />
                <MenuBars href="/">
                  <Logo>
                    <GdscLogo />
                  </Logo>
                  <BlogText>
                    <Univ>
                      <DaejinUnivLogo />
                    </Univ>
                    <BlogBanner>
                      <GdscBlogLogo />
                    </BlogBanner>
                  </BlogText>
                </MenuBars>
              </BlogWrapper>
              <NavMargin />
              <SearchWrapper>
                <Search
                  type="text"
                  placeholder="궁금한 정보나 계정을 입력해주세요"
                />
                <IconWrapper>
                  <MagnifyingGlassIcon />
                </IconWrapper>
              </SearchWrapper>
            </DeskNavigationWrapper>
            {/* Mobile Navigation */}
            <MobileNavigationWrapper>
              <MenuToggleIconWrapper>
                <MenuToggleIcon />
              </MenuToggleIconWrapper>
              <MenuBars href="/">
                <GdscLogoWrapper>
                  <GdscLogo />
                </GdscLogoWrapper>
              </MenuBars>
              <MobileIconWrapper>
                <MagnifyingGlassIcon />
              </MobileIconWrapper>
            </MobileNavigationWrapper>
          </NavInner>
        </NavWrapper>
      </NavDesign>
      {/* 사이드바 */}
      <Sidebar>
        <NavMenuItems onClick={showSidebar}>
          <NavbarToogle />
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
        </NavMenuItems>
      </Sidebar>
    </>
  );
}
export default Navigation;
