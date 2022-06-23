import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  BlogWrapper,
  DeskNavigationWrapper,
  GdscLogoWrapper,
  LogoWrapper,
  NavigationDesign,
  NavigationInner,
  NavigationWrapper,
  Search,
  SearchInputWrapper,
  SearchWrapper,
  VectorWrapper,
} from './styled';
import MainLogo from '../MainLogo';
import { MENU_KEY, menuState } from '../../../store/menu';
import MenuToggleIcon from '../MenuToggleIcon';
import { useRecoilState } from 'recoil';
import Vector from '../../../assets/Vector';
import GdscLogo from '../../../assets/GdscLogo';
import { MenuToggleIconWrapper } from '../SideBar/styled';

function Navigation() {
  const navigate = useNavigate();
  const [menu, setMenu] = useRecoilState(menuState);
  const menuHandler = () => {
    const menuState = menu.appMenu;
    setMenu({ ...menu, [MENU_KEY.APP_MENU]: !menuState });
  };
  return (
    <NavigationDesign>
      <NavigationWrapper>
        <NavigationInner>
          <DeskNavigationWrapper>
            <BlogWrapper>
              <MenuToggleIconWrapper onClick={() => menuHandler()}>
                <MenuToggleIcon active="closed" />
              </MenuToggleIconWrapper>
              <LogoWrapper onClick={() => navigate('/')}>
                <MainLogo />
              </LogoWrapper>
            </BlogWrapper>
            <GdscLogoWrapper onClick={() => navigate('/')}>
              <GdscLogo />
            </GdscLogoWrapper>
            <VectorWrapper>
              <Vector />
            </VectorWrapper>
            <SearchWrapper>
              <SearchInput />
            </SearchWrapper>
          </DeskNavigationWrapper>
        </NavigationInner>
      </NavigationWrapper>
    </NavigationDesign>
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
