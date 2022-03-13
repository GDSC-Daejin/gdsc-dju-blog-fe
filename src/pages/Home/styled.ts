import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardSection = styled(motion.section)<{ isDrag: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 1200px;
  height: 400px;
  cursor: ${(props) => (props.isDrag ? 'grabbing' : 'grab')};
  overflow-x: scroll;
  overflow-y: hidden;
  div:last-child {
    margin-right: 0;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  &::-moz-scrollbar {
    display: none;
  }
  &::-ms-scrollbar {
    display: none;
  }
  &::-o-scrollbar {
    display: none;
  }
`;

export const BlogCardWrapper = styled(motion.div)`
  width: 276px;
  height: 328px;
  margin: 15px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 862px;
  button:nth-child(2) {
    margin: 0px 16px;
  }
`;
