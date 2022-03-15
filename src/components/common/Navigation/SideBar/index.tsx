import {
  SidebarBtnWrapper,
  SideBarWrapper,
  SideBarContainer,
  SideBarInner,
  SideBarBtnInner,
  GrayBox,
  SideBarDesign,
} from './styled';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import MenuToggleIcon from '../../MenuToggleIcon';
import SideBarLogin from '../SideBarLogin';

const DeskAnimate = {
  width: 486,
};

export const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const onClickHandler = () => {
    setOpen(true);
    setVisible(false);
  };
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
                <SideBarDesign>{/*<SideBarLogin />*/}</SideBarDesign>
              </SideBarContainer>
            </SideBarInner>
          )}
        </AnimatePresence>
        <SidebarBtnWrapper>
          <SideBarBtnInner onClick={onClickHandler}>
            {open ? visible && <MenuToggleIcon /> : <MenuToggleIcon />}
          </SideBarBtnInner>
        </SidebarBtnWrapper>
      </SideBarWrapper>
      <GrayBox onClick={() => setOpen(false)} open={open} />
    </>
  );
};
export default SideBar;
