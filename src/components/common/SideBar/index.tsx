import {
  SideBarBtnWrapper,
  SideBarWrapper,
  SideBarContainer,
  SideBarInner,
  SideBarBtnInner,
  SideBarBtnIcon,
  GrayBox,
  SideBarDesign,
  SideMenuWrapper,
} from './styled';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import MenuToggleIcon from '../MenuToggleIcon';
import SideBarLogin from './SideBarLogin';
import SideBarLogout from './SideBarLogout';
import SideCategoryMenu from '../SideCategoryMenu';
import { useNavigate } from 'react-router-dom';

const DeskAnimate = {
  width: 486,
};

export const SideBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <SideBarWrapper>
        <AnimatePresence>
          {open && (
            <SideBarInner
              initial={{ width: 0 }}
              animate={DeskAnimate}
              exit={{
                width: 0,
                transition: { delay: 0.5, duration: 0.3 },
              }}
            >
              <SideBarContainer
                className="container"
                initial="closed"
                animate="open"
                exit="closed"
              >
                {/* Login version */}
                <SideBarDesign>
                  {/*<SideBarLogout />*/}
                  <SideBarLogin />
                  <SideMenuWrapper>
                    <SideCategoryMenu type={string} />
                  </SideMenuWrapper>
                </SideBarDesign>
              </SideBarContainer>
            </SideBarInner>
          )}
        </AnimatePresence>
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
