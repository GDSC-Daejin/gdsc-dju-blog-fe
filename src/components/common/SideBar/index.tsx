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
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';

const DeskAnimate = {
  width: 486,
};

export const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const { user_name } = useParams<'user_name'>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const typeParams = searchParams.get('type');
  const type = typeParams ? typeParams : '/';
  const pageParams = searchParams.get('page');
  const page = pageParams ? parseInt(pageParams) : 1;

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
                <SideBarDesign>
                  {/*<SideBarLogout />*/}
                  <SideBarLogin />
                  <SideMenuWrapper>
                    <SideCategoryMenu type={type} />
                  </SideMenuWrapper>
                </SideBarDesign>
              </SideBarContainer>
            </SideBarInner>
          )}
        </AnimatePresence>
      </SideBarWrapper>
      <SideBarBtnWrapper>
        <SideBarBtnInner>
          <SideBarBtnIcon onClick={onClickHandler}>
            {open ? visible && <MenuToggleIcon /> : <MenuToggleIcon />}
          </SideBarBtnIcon>
        </SideBarBtnInner>
      </SideBarBtnWrapper>
      <GrayBox onClick={() => setOpen(false)} open={open} />
    </>
  );
};
export default SideBar;
