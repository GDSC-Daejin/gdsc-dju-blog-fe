import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MainContentWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  gap: 3.75rem;
  margin-top: 50px;
`;

export const WelcomePhrase = styled.div`
  span {
    font-size: ${(props) => props.theme.fontSize.h7};
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
  }
  p {
    font-size: 2.25rem;
    font-weight: 500;
    line-height: 3.25rem;
    letter-spacing: 0em;
    margin: 10px 0px 26px;
  }
`;

export const CardSection = styled(motion.section)<{ isDrag: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 1195px;
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
`;

export const BlogCardWrapper = styled(motion.div)`
  width: 248px;
  height: 294px;
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
