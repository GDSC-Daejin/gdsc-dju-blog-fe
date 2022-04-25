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
export const HomePhraseWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
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
