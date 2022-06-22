import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  NavigationInner,
  LogoWrapper,
  BlogWrapper,
  Search,
  NavigationDesign,
  NavigationWrapper,
  SearchWrapper,
  NavigationMargin,
  VectorWrapper,
  DeskNavigationWrapper,
  BeforeMargin,
} from './styled';
import Vector from '../../../../assets/Vector';
import MainLogo from '../../MainLogo';
import { useRecoilState } from 'recoil';
import { MENU_KEY, menuState } from '../../../../store/menu';
import { alertState } from '../../../../store/alert';

function DeskNavigation() {
  const navigate = useNavigate();

  return (
    <NavigationDesign>
      <NavigationWrapper>
        <NavigationInner>
          <DeskNavigationWrapper>
            <BlogWrapper>
              <BeforeMargin />
              <LogoWrapper onClick={() => navigate('/')}>
                <MainLogo />
              </LogoWrapper>
            </BlogWrapper>
            <NavigationMargin />
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
        </NavigationInner>
      </NavigationWrapper>
    </NavigationDesign>
  );
}
export default DeskNavigation;
