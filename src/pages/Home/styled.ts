import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HomeContentWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.75rem;
  margin-top: 50px;
  padding: 0 20px;
  min-width: 1160px;
`;
export const HomeLayoutContainer = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  min-width: 320px;
`;
export const HomePhraseWrapper = styled(motion.div)`
  height: 180px;
  margin-top: 50px;
  margin-bottom: 30px;
`;
export const CardSectionWrapper = styled.div`
  height: 400px;
`;

export const CardSection = styled(motion.section)<{ isDrag: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 1160px;
  height: 100%;
  cursor: ${(props) => (props.isDrag ? 'grabbing' : 'grab')};
  overflow-x: scroll;
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
  margin: 0 15px;
  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
  margin-bottom: 230px;
  display: flex;
  gap: 16px;
  left: 20px;
  bottom: 0px;
  margin-top: 3px;
`;
