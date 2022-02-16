import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardSection = styled(motion.section)<{ isDrag: boolean }>`
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
