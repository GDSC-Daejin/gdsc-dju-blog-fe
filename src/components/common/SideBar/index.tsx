import {
  SidebarBtnWrapper,
  SideBarWrapper,
  SideBarContainer,
  SideBarInner,
  SideBarBtnInner,
  SideBarText,
  GrayBox,
} from './styled';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MenuToggleIcon from '../MenuToggleIcon';

const links = [
  { name: 'Home', to: '#', id: 1 },
  { name: 'About', to: '#', id: 2 },
  { name: 'Blog', to: '#', id: 3 },
  { name: 'Contact', to: '#', id: 4 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
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
              animate={{
                width: 300,
              }}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 },
              }}
            >
              <SideBarContainer
                className="container"
                initial="closed"
                animate="open"
                exit="closed"
              >
                {links.map(({ name, to, id }) => (
                  <SideBarText
                    key={id}
                    href={to}
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                  >
                    {name}
                  </SideBarText>
                ))}
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
