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
  /* &::-webkit-scrollbar {
    display: none;
  } */
`;

export const BlogCardWrapper = styled(motion.div)`
  width: 276px;
  height: 328px;
  margin: 15px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 500;

  button:nth-child(2) {
    margin: 0px 8px;
  }
`;

export const SlideButton = styled.button<{ ButtonColor: boolean }>`
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.ButtonColor ? 'red' : 'blue')};
`;
