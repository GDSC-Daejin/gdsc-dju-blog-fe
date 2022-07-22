import { AnimatePresence } from 'framer-motion';
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useRecoilState } from 'recoil';
import api from '../../../api';
import { useGetUserData } from '../../../api/hooks/useGetUserData';
import { MENU_KEY, menuState } from '../../../store/menu';
import { SideBarAnimation, SideBarGrayBoxAnimation } from '../Animation';
import SideBarCategory from './SideBarCategory';
import SideBarLogin from './SideBarLogin';
import SideBarLogout from './SideBarLogout';
import { GrayBox, SideBarDesign, SideBarInner, SideBarWrapper } from './styled';

export const SideBar = () => {
  const [menu, setMenu] = useRecoilState(menuState);
  const [cookies, setCookies, removeCookies] = useCookies([
    'token',
    'refresh_token',
    'user',
  ]);
  const { userData } = useGetUserData(cookies.token);

  return (
    <>
      <SideBarWrapper
        initial={false}
        variants={SideBarAnimation}
        animate={menu.appMenu ? 'isActive' : 'isUnActive'}
      >
        <SideBarInner>
          <SideBarDesign>
            {cookies.user ? (
              <SideBarLogin userData={userData} />
            ) : (
              <SideBarLogout loginURL={api.getRedirectURL()} />
            )}
            <SideBarCategory />
          </SideBarDesign>
        </SideBarInner>
      </SideBarWrapper>
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
