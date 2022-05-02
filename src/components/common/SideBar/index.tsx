import {
  SideBarBtnWrapper,
  SideBarWrapper,
  SideBarInner,
  SideBarBtnInner,
  SideBarBtnIconWrapper,
  GrayBox,
  SideBarDesign,
} from './styled';
import React from 'react';
import MenuToggleIcon from '../MenuToggleIcon';
import SideBarLogin from './SideBarLogin';
import SideBarLogout from './SideBarLogout';
import { useLocation } from 'react-router';
import SideBarCategory from './SideBarCategory';
import { SideBarAnimation, SideBarGrayBoxAnimation } from '../Animation';
import { MENU_KEY, menuState } from '../../../store/menu';
import { useRecoilState } from 'recoil';
import { AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { userState } from '../../../store/user';

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
  const [user, setUser] = useRecoilState(userState);
  const API_BASE_URL = 'https://gdsc-dju.com';
  const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';
  const GOOGLE_AUTH_URL = `${API_BASE_URL}/oauth2/authorization/google?redirect_uri=${OAUTH2_REDIRECT_URI}`;

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
            {user ? <SideBarLogin {...user} /> : <SideBarLogout />}
            {/*<SideBarLogin />*/}
            <SideBarCategory />
          </SideBarDesign>
        </SideBarInner>
      </SideBarWrapper>
      <SideBarBtnWrapper>
        <SideBarBtnInner>
          <SideBarBtnIconWrapper>
            <MenuToggleIcon />
          </SideBarBtnIconWrapper>
        </SideBarBtnInner>
      </SideBarBtnWrapper>
      <AnimatePresence>
        {menu.appMenu && (
          <GrayBox
            variants={SideBarGrayBoxAnimation}
            animate={'isActive'}
            exit={'isUnActive'}
            onClick={() => {
              setMenu({ ...menu, [MENU_KEY.APPMENU]: false });
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SideBar;
