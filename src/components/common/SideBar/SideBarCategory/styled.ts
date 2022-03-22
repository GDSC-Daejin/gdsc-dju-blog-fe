import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const SideCategoryText = styled(motion.div)<{ active?: boolean }>`
  font-size: ${(props) => props.theme.fontSize.h7};
  font-weight: normal;
  font-family: 'Google Sans', sans-serif;
  ${(props) =>
    props.active &&
    css`
      color: ${(props) => props.theme.color.grey900};
    `}
  padding-bottom: 8px;
`;
export const SideCategoryTextWrapper = styled(motion.div)`
  cursor: pointer;
  color: ${(props) => props.theme.color.grey300};
  position: relative;
  display: flex;
  margin-bottom: 24px;
`;
export const SideCategoryMenuWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const SideCategoryCircleWrapper = styled(motion.div)`
  position: absolute;
  left: -9px;
  top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
`;
export const SideCategoryCircle = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;
export const SideBarGDSCLogoWrapper = styled(motion.div)`
  position: absolute;
  left: -10px;
  top: -5px;
  & svg {
    width: 19px;
  }
`;
