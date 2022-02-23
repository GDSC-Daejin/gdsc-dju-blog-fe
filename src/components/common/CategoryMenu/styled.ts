import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const CategoryText = styled.div<{ active: boolean }>`
  font-size: ${(props) => props.theme.fontSize.h5};

  font-weight: normal;
  font-family: 'Google Sans', sans-serif;
  ${(props) =>
    props.active &&
    css`
      color: ${(props) => props.theme.color.grey900};
    `}
`;
export const CategoryTextWrapper = styled(motion.div)`
  cursor: pointer;
  height: 65px;
  color: ${(props) => props.theme.color.grey300};
`;
export const CategoryMenuWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 625px;
  justify-content: space-around;
`;
