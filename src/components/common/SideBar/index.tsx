import {
  SideBarBtnWrapper,
  SideBarWrapper,
  SideBarInner,
  SideBarBtnInner,
  SideBarBtnIcon,
  GrayBox,
  SideBarDesign,
} from './styled';
import React from 'react';
import MenuToggleIcon from '../MenuToggleIcon';
import SideBarLogin from './SideBarLogin';
import SideBarLogout from './SideBarLogout';
import { useLocation } from 'react-router';
import SideBarCategory from './SideBarCategory';
import { SideBarAnimation } from '../Animation';
import { MENU_KEY, menuState } from '../../../store/menu';
import { useRecoilState } from 'recoil';

export const sideBarMenuData = [
  {
    route: '/all',
    title: 'ALL',
    subtitle: 'all',
  },
  {
    route: '/fe',
    title: 'Frontend',
    subtitle: 'frontend',
  },
  {
    route: '/be',
    title: 'Backend',
    subtitle: 'backend',
  },
  {
    route: '/and',
    title: 'Android',
    subtitle: 'android',
  },
  {
    route: '/de',
    title: 'Design',
    subtitle: 'design',
  },
  {
    route: '/common',
    title: 'Common',
    subtitle: 'beginner',
  },
];

export const SideBar = () => {
  const [menu, setMenu] = useRecoilState(menuState);
  const location = useLocation();
  return (
    <>
      <SideBarWrapper
        initial={false}
        variants={SideBarAnimation}
        animate={menu.appMenu ? 'isActive' : 'isUnActive'}
      >
        <SideBarInner>
          {/* Login version */}
          <SideBarDesign>
            {/*<SideBarLogout />*/}
            <SideBarLogin />
            <SideBarCategory locationStyle={location.pathname} />
          </SideBarDesign>
        </SideBarInner>
      </SideBarWrapper>
      <SideBarBtnWrapper>
        <SideBarBtnInner>
          <SideBarBtnIcon>
            <MenuToggleIcon />
          </SideBarBtnIcon>
        </SideBarBtnInner>
      </SideBarBtnWrapper>
      <GrayBox
        onClick={() => {
          setMenu({ ...menu, [MENU_KEY.APPMENU]: false });
        }}
        open={menu.appMenu}
      />
    </>
  );
};

export default SideBar;
