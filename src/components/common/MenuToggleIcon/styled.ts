import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledMenuButton = styled(motion.button)`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
  margin-right: 60px;
  margin-left: 60px;
  border-radius: 50%;
  background: transparent;
  z-index: 1000;
  @media screen and (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    margin-left: 0px;
    margin-right: 0px;
    padding: 0;
    width: 23px;
    margin-top: 5px;
  }
`;
