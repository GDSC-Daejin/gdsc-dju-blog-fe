import styled from 'styled-components';
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
  background-color: blue;
  z-index: 1002;
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
