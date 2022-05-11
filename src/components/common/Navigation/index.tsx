import React, { useState } from 'react';
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
import GdscLogo from '../../../assets/GdscLogo';
import Vector from '../../../assets/Vector';
import MainLogo from '../MainLogo';

function Navigation() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');

  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setSearchText(e.);
    setSearchText(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?title=${searchText}`);
  };

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
                <form onSubmit={handleSubmit}>
                  <Search
                    name="search"
                    type="text"
                    onChange={handleSearchText}
                    placeholder="궁금한 정보나 계정을 입력해주세요"
                  />
                </form>
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
export default React.memo(Navigation);
