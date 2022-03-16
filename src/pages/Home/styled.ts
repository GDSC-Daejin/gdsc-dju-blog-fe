import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MainContentWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

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
  margin: 0px 15px;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  gap: 16px;
  left: 15px;
  bottom: 0px;
  margin-top: 3px;
`;

export const CardSectionBlur = styled.div`
  position: absolute;
  width: 150px;
  height: 432px;
  z-index: 2;
  right: 0px;
  background: linear-gradient(
    270.96deg,
    #ffffff 13.01%,
    rgba(255, 255, 255, 0.859167) 30.46%,
    rgba(255, 255, 255, 0.386709) 58.16%,
    rgba(255, 255, 255, 0) 89.38%
  );
`;
