import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { lightColors } from '../../../../styles/lightColors';

export const SideCategoryText = styled(motion.div)<{ active?: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.h7};
  font-weight: normal;
  font-family: 'Google Sans', sans-serif;
  ${(active) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.grey900};
    `}
  margin-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
`;
export const SideCategoryTextWrapper = styled(motion.div)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grey300};
  position: relative;
  display: flex;
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
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
export const SideCategoryCircle = styled.div<{
  color: string;
}>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  ${({ color }) =>
    color &&
    css`
      background: ${({ theme }) =>
        theme.colors[color as keyof typeof lightColors]};
    `}
`;
export const SideBarGDSCLogoWrapper = styled(motion.div)`
  position: absolute;
  left: -6px;
  top: -1px;
  & svg {
    width: 19px;
  }
`;
