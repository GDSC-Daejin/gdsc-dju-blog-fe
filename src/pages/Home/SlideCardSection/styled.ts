import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardSection = styled(motion.section)`
  display: flex;
  align-items: center;
  padding: 60px 0px 50px;
  box-sizing: border-box;
  div:last-child {
    margin-right: 0;
  }
`;
export const BlogCardWrapper = styled(motion.div)`
  width: 248px;
  height: 294px;
  margin: 0px 15px;
`;
