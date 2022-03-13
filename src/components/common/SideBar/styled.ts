import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const SideBarWrapper = styled.div`
  display: flex;
  position: absolute;
  z-index: 1001;
  left: 0px;
  top: 0px;
  height: 100vh;
`;
export const SideBarInner = styled(motion.aside)`
  background-color: #ffffff;
  width: 18.75rem;
  height: 100vh;
`;
export const SideBarContainer = styled(motion.div)`
  margin: 4.5rem 1.4rem;
`;
export const SidebarBtnWrapper = styled.div`
  position: absolute;
  top: 48px;
  left: 60px;
`;
export const SideBarText = styled(motion.a)`
  color: black;
  text-decoration: none;
  font-size: 1.75rem;
  font-weight: 600;
  display: block;
  margin: 20px;
`;
export const SideBarBtnInner = styled.div`
  cursor: pointer;
  border: none;
  background-color: #ffffff;
`;
export const GrayBox = styled.div<{ open: boolean }>`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 1001;
  background-color: #191f18;
  ${(props: any) =>
    props.open
      ? css`
          opacity: 0.35;
        `
      : css`
          opacity: 0;
        `};
`;
