import {
  SideBarBtnWrapper,
  SideBarWrapper,
  SideBarInner,
  SideBarBtnInner,
  SideBarBtnIcon,
  GrayBox,
  SideBarDesign,
} from './styled';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import MenuToggleIcon from '../MenuToggleIcon';
import SideBarLogin from './SideBarLogin';
import SideBarLogout from './SideBarLogout';
import SideCategoryMenu from '../SideCategoryMenu';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import SideBarCategory from './SideBarCategory';
import { SideBarMotion } from '../Animation';

export const sideBarMenuData = [
  {
    route: '/all',
    title: 'ALL',
    subtitle: 'all',
  },
  {
    route: '/frontend',
    title: 'Frontend',
    subtitle: 'frontend',
  },
  {
    route: '/backend',
    title: 'Backend',
    subtitle: 'backend',
  },
  {
    route: '/android',
    title: 'Android',
    subtitle: 'android',
  },
  {
    route: '/design',
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
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <>
      <SideBarWrapper
        initial={false}
        variants={SideBarMotion}
        animate={open ? 'isActive' : 'isUnActive'}
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
          <SideBarBtnIcon onClick={() => setOpen(true)}>
            <MenuToggleIcon />
          </SideBarBtnIcon>
        </SideBarBtnInner>
      </SideBarBtnWrapper>
      <GrayBox onClick={() => setOpen(false)} open={open} />
    </>
  );
};

export default SideBar;
