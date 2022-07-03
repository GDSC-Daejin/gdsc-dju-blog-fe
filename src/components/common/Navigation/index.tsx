import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  BlogLogo,
  NavDesign,
  NavInner,
  NavTask,
  NavTaskWrapper,
  NavWrapper,
  Search,
  SearchInputWrapper,
  StyledLogoWrapper,
} from './styled';
import { menuState } from '../../../store/menu';
import MenuToggleIcon from '../MenuToggleIcon';
import { useRecoilState } from 'recoil';
import Vector from '../../../assets/Vector';

import SideBar from '../SideBar';
import GdscBlogLogo from '../../../assets/GdscBlogLogo';

function Navigation() {
  return (
    <NavDesign>
      <NavWrapper>
        <NavInner>
          <NavTaskWrapper>
            <NavTask>
              <MenuToggleIcon />
              <StyledLogoWrapper href={'/'}>
                <GdscBlogLogo />
              </StyledLogoWrapper>
            </NavTask>
          </NavTaskWrapper>
          <SearchInput />
        </NavInner>
      </NavWrapper>
      <SideBar />
    </NavDesign>
  );
}

const SearchInput: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <SearchInputWrapper>
      <Search type="text" placeholder="궁금한 정보나 계정을 입력해주세요" />
      <Vector onClick={onClick} />
    </SearchInputWrapper>
  );
};
export default Navigation;
