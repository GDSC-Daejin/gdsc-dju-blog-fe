import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardSection = styled(motion.section)<{ isDrag: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 1200px;
  height: 400px;
  overflow-x: scroll;
  cursor: ${(props) => (props.isDrag ? 'grabbing' : 'grab')};
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BlogCardWrapper = styled(motion.div)`
  min-width: 276px;
  height: 328px;
  margin: 15px;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  left: 140px;
  top: 500px;
  button:first-child {
    margin-right: 8px;
  }
  button:nth-child(2) {
    margin: 0px 8px;
  }
  button:last-child {
    margin-left: 8px;
  }
`;

export const SlideButton = styled.button`
  width: 40px;
  height: 4px;
`;
