import {
  SideBarWrapper,
  SideBarInner,
  GrayBox,
  SideBarDesign,
  MenuToggleIconWrapper,
  MobileMenuIconWrapper,
} from './styled';
import React, { useEffect } from 'react';
import MenuToggleIcon from '../MenuToggleIcon';
import SideBarLogin from './SideBarLogin';
import SideBarLogout from './SideBarLogout';
import { useLocation } from 'react-router';
import SideBarCategory from './SideBarCategory';
import { SideBarAnimation, SideBarGrayBoxAnimation } from '../Animation';
import { MENU_KEY, menuState } from '../../../store/menu';
import { useRecoilState } from 'recoil';
import { AnimatePresence } from 'framer-motion';

export const sideBarMenuData = [
  {
    title: 'ALL',
    subtitle: 'all',
  },
  {
    title: 'Frontend',
    subtitle: 'frontend',
  },
  {
    title: 'Backend',
    subtitle: 'backend',
  },
  {
    title: 'Android',
    subtitle: 'android',
  },
  {
    title: 'Design',
    subtitle: 'design',
  },
  {
    title: 'Common',
    subtitle: 'common',
  },
];

export const SideBar = () => {
  const [menu, setMenu] = useRecoilState(menuState);
  const menuHandler = () => {
    const menuState = menu.appMenu;
    setMenu({ ...menu, [MENU_KEY.APP_MENU]: !menuState });
    console.log(menu);
  };

  return (
    <>
      <SideBarWrapper
        initial={false}
        variants={SideBarAnimation}
        animate={menu.appMenu ? 'isActive' : 'isUnActive'}
      >
        <MobileMenuIconWrapper onClick={() => menuHandler()}>
          <MenuToggleIcon active="open" />
        </MobileMenuIconWrapper>
        <SideBarInner>
          <SideBarDesign>
            {/*<SideBarLogout />*/}
            <SideBarLogin />
            <SideBarCategory />
          </SideBarDesign>
        </SideBarInner>
      </SideBarWrapper>
      <MenuToggleIconWrapper onClick={() => menuHandler()}>
        <MenuToggleIcon active="closed" />
      </MenuToggleIconWrapper>
      <AnimatePresence>
        {menu.appMenu && (
          <GrayBox
            variants={SideBarGrayBoxAnimation}
            animate={'isActive'}
            exit={'isUnActive'}
            onClick={() => {
              setMenu({ ...menu, [MENU_KEY.APP_MENU]: false });
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SideBar;
