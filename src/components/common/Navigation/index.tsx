import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  NavInner,
  LogoWrapper,
  BlogWrapper,
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
import GdscBlogLogo from '../../../Assets/GdscBlogLogo';
import DaejinUnivLogo from '../../../Assets/DaejinUnivLogo';
import GdscLogo from '../../../Assets/GdscLogo';
import MenuToggleIcon from '../MenuToggleIcon';
import Vector from '../../../Assets/Vector';
import MainLogo from '../MainLogo';

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
                <BeforeMargin />
                <LogoWrapper onClick={() => navigate('/')}>
                  <MainLogo />
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
