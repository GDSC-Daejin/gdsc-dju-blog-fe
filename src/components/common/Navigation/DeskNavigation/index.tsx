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
<<<<<<< HEAD:src/components/common/Navigation/DeskNavigation/index.tsx
import Vector from '../../../../assets/Vector';
import MainLogo from '../../MainLogo';
=======
/* 아이콘 컬러 전체 변경 기능 */
import GdscLogo from '../../../assets/GdscLogo';
import Vector from '../../../assets/Vector';
import MainLogo from '../MainLogo';
>>>>>>> a3ec4c8a35eee3460155cf171864282383c635f3:src/components/common/Navigation/index.tsx

function DeskNavigation() {
  const navigate = useNavigate();
  return (
    <>
<<<<<<< HEAD:src/components/common/Navigation/DeskNavigation/index.tsx
=======
      {/* 아이콘 컬러 전체 변경 기능 */}
      {/*Desk Navigation */}
>>>>>>> a3ec4c8a35eee3460155cf171864282383c635f3:src/components/common/Navigation/index.tsx
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
