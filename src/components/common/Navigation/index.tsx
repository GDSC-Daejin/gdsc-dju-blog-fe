import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  NavInner,
  Logo,
  BlogText,
  MenuBars,
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
  MobileIconWrapper,
  MobileNavigationWrapper,
  DeskNavigationWrapper,
  BeforeMargin,
} from './styled';
/* 아이콘 컬러 전체 변경 기능 */
import GdscBlogLogo from '../../../Images/GdscBlogLogo';
import DaejinUnivLogo from '../../../Images/DaejinUnivLogo';
import GdscLogo from '../../../Images/GdscLogo';
import MagnifyingGlassIcon from '../../../Images/MagnifyingGlassIcon';
import SideBar from './SideBar';
import MenuToggleIcon from '../MenuToggleIcon';

function Navigation() {
  const navigate = useNavigate();
  return (
    <>
      {/* 아이콘 컬러 전체 변경 기능 */}
      {/*Desk Navigation */}
      <NavDesign>
        <NavWrapper>
          <NavInner>
            <DeskNavigationWrapper>
              <BlogWrapper>
                <SideBar />
                <BeforeMargin />
                <MenuBars onClick={() => navigate('/')}>
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
              <MenuToggleIcon />
              <MenuBars onClick={() => navigate('/')}>
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
    </>
  );
}
export default Navigation;
