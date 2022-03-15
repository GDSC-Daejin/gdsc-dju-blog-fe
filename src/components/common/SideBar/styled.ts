import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const SideBarWrapper = styled.div`
  display: flex;
  position: absolute;
  z-index: 1002;
  left: 0px;
  top: 0px;
  height: 100vh;
`;
export const SideBarInner = styled(motion.aside)`
  width: 18.75rem;
  height: 100vh;
  background-color: #ffffff;
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
  display: block;
  margin: 20px;
  color: black;
  text-decoration: none;
  font-size: 1.75rem;
  font-weight: 600;
`;
export const SideBarBtnInner = styled.div`
  border: none;
  background-color: #ffffff;
  cursor: pointer;
`;
export const GrayBox = styled.div<{ open: boolean }>`
  display: none;
  ${(props: any) =>
    props.open
      ? css`
          display: flex;
          position: fixed;
          width: 100vw;
          height: 100vh;
          background-color: #191f18;
          right: 0px;
          top: 0px;
          z-index: 1001;
          opacity: 0.35;
        `
      : css`
          opacity: 0;
        `};
`;
