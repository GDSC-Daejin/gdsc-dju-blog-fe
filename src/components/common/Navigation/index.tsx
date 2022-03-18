import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  NavInner,
  LogoInner,
  BlogText,
  LogoWrapper,
  BlogWrapper,
  Univ,
  BlogBanner,
  Search,
  NavDesign,
  NavWrapper,
  SearchWrapper,
  NavMargin,
  VectorWrapper,
  GdscLogoWrapper,
  MobileVectorWrapper,
  MobileNavigationWrapper,
  DeskNavigationWrapper,
  BeforeMargin,
} from './styled';
/* 아이콘 컬러 전체 변경 기능 */
import GdscBlogLogo from '../../../Images/GdscBlogLogo';
import DaejinUnivLogo from '../../../Images/DaejinUnivLogo';
import GdscLogo from '../../../Images/GdscLogo';
import SideBar from '../SideBar';
import MenuToggleIcon from '../MenuToggleIcon';
import Vector from '../../../Images/Vector';

function Navigation() {
  const navigate = useNavigate();
  return (
    <>
      {/* 아이콘 컬러 전체 변경 기능 */}
      {/*Desk Navigation */}
      <SideBar />
      <NavDesign>
        <NavWrapper>
          <NavInner>
            <DeskNavigationWrapper>
              <BlogWrapper>
                <BeforeMargin />
                <LogoWrapper onClick={() => navigate('/')}>
                  <LogoInner>
                    <GdscLogo />
                    <DaejinUnivLogo />
                    <GdscBlogLogo />
                  </LogoInner>
                </LogoWrapper>
              </BlogWrapper>
              <NavMargin />
              <SearchWrapper>
                <Search
                  type="text"
                  placeholder="궁금한 정보나 계정을 입력해주세요"
                />
                <VectorWrapper>
                  <Vector />
                </VectorWrapper>
              </SearchWrapper>
            </DeskNavigationWrapper>
            {/* Mobile Navigation */}
            <MobileNavigationWrapper>
              <MenuToggleIcon />
              <LogoWrapper onClick={() => navigate('/')}>
                <GdscLogoWrapper>
                  <GdscLogo />
                </GdscLogoWrapper>
              </LogoWrapper>
              <MobileVectorWrapper>
                <Vector />
              </MobileVectorWrapper>
            </MobileNavigationWrapper>
          </NavInner>
        </NavWrapper>
      </NavDesign>
    </>
  );
}
export default Navigation;
