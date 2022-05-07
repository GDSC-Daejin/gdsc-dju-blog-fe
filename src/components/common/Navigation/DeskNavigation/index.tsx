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
  DeskNavigationWrapper,
  BeforeMargin,
} from './styled';
import Vector from '../../../../assets/Vector';
import MainLogo from '../../MainLogo';

function DeskNavigation() {
  const navigate = useNavigate();
  return (
    <>
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
          </NavInner>
        </NavWrapper>
      </NavDesign>
    </>
  );
}
export default React.memo(DeskNavigation);
