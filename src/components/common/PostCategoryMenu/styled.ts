import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const PostCategoryText = styled(motion.div)<{ active?: boolean }>`
  font-size: ${(props) => props.theme.fontSize.body1};

  font-weight: normal;
  font-family: 'Google Sans', sans-serif;
  ${(props) =>
    props.active &&
    css`
      color: ${(props) => props.theme.color.grey900};
    `}
  padding: 2px 0;
`;
export const PostCategoryTextWrapper = styled(motion.div)`
  cursor: pointer;
  color: ${(props) => props.theme.color.grey300};
  position: relative;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #fff;
`;
export const PostCategoryMenuWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 400px;
  justify-content: space-between;
`;
export const PostCategoryCircleWrapper = styled(motion.div)`
  position: absolute;
  left: 45%;
  top: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
`;
export const PostCategoryCircle = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;
export const PostGDSCLogoWrapper = styled.div`
  position: absolute;
  left: -10px;
  & svg {
    width: 19px;
  }
`;
