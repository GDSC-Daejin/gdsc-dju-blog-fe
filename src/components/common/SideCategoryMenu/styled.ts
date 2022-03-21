import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const CategoryText = styled(motion.div)<{ active?: boolean }>`
  font-size: ${(props) => props.theme.fontSize.h5};
  font-weight: normal;
  font-family: 'Google Sans', sans-serif;
  ${(props) =>
    props.active &&
    css`
      color: ${(props) => props.theme.color.grey900};
    `}
  padding-bottom: 8px;
`;
export const CategoryTextWrapper = styled(motion.div)`
  cursor: pointer;
  color: ${(props) => props.theme.color.grey300};
  position: relative;
  display: flex;
  margin-bottom: 34px;
`;
export const CategoryMenuWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const CategoryCircleWrapper = styled(motion.div)`
  position: absolute;
  left: -25%;
  top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
`;
export const CategoryCircle = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;
