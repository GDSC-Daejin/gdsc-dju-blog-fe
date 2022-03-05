import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledMenuButton = styled(motion.button)`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 9px;
  right: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
  z-index: 1000;
  @media (min-width: 500px) {
    display: none;
  }
`;
