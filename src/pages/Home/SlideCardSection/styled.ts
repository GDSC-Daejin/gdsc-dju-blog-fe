import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardSection = styled(motion.section)<{ isDrag: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 350px;
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
  width: 248px;
  height: 294px;
  margin: 0px 15px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  left: 15px;
  bottom: 0px;
`;
