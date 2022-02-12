import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BlogCardWrapper = styled(motion.div)`
  align-items: center;
  justify-content: center;
  width: 300px;
`;
export const BlogCardInner = styled(motion.div)<{ route: string }>`
  width: 276px;
  height: 333px;
  border-radius: 10px;
  display: flex;
  flex-direction: column-reverse;
  box-shadow: 0 19px 32px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-image: url(${(props) => props.route});
`;
export const StyledImage = styled(motion.img)`
  height: 100%;
  border-radius: 10px;
`;
export const BlogCardBottomBox = styled(motion.div)`
  position: absolute;
  z-index: 2;
  box-sizing: border-box;
  min-width: 276px;
  height: 92px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 19px 32px -1px rgba(0, 0, 0, 0.1);
  padding: 12px 20px;
`;
export const BlogCardTitle = styled.div`
  font-size: 2.4rem;
  font-weight: 400;
  color: ${(props) => props.theme.color.grey900};
`;
