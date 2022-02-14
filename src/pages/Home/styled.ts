import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardSection = styled(motion.section)`
  display: flex;
  align-items: center;
  width: 1200px;
  height: 400px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
  }
`;

export const CardWrapper = styled.div`
  display: flex;
`;
