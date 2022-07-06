import { AnimatePresence } from 'framer-motion';
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useRecoilState } from 'recoil';
import api from '../../../api';
import { useGetMyData } from '../../../api/hooks/useGetMyData';
import TokenService from '../../../api/TokenService';
import { MENU_KEY, menuState } from '../../../store/menu';
import { SideBarAnimation, SideBarGrayBoxAnimation } from '../Animation';
import SideBarCategory from './SideBarCategory';
import SideBarLogin from './SideBarLogin';
import SideBarLogout from './SideBarLogout';
import { GrayBox, SideBarDesign, SideBarInner, SideBarWrapper } from './styled';

export const SideBar = () => {
  const [menu, setMenu] = useRecoilState(menuState);

  const [cookies] = useCookies(['token', 'refresh_token', 'user']);

  const { userData } = useGetMyData();

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
              <SideBarLogin
                userData={userData}
                closeSideBar={() =>
                  setMenu({ ...menu, [MENU_KEY.APP_MENU]: false })
                }
              />
            ) : (
              <SideBarLogout loginURL={TokenService.getRedirectURL()} />
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
