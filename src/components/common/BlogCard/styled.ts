import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const BlogCardInner = styled(motion.div)<{ route: string }>`
  position: relative;
  z-index: 9;
  min-width: 276px;
  height: 328px;
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
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 10px;
  background: #fff;
  padding: 12px 20px;
`;
export const BlogCardTitle = styled(motion.h6)`
  font-size: 2.4rem;
  font-weight: 400;
  color: ${(props) => props.theme.color.grey900};
`;
export const BlogCardSubTextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
export const BlogCardAuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const BlogCardAuthorImage = styled.img`
  background: ${(props) => props.theme.color.grey400};
  border-radius: 100%;
  margin-right: 7px;
  height: 20px;
  width: 20px;
`;
export const BlogCardPostText = styled.div`
  font-size: 1.4rem;
  width: 100%;
  min-height: 160px;
`;
export const BlogCardPostTextWrapper = styled(motion.div)`
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const BlogCardSubText = styled.div<{
  subText?: boolean;
  bold?: boolean;
}>`
  font-size: ${(props) => props.theme.fontSize.p};

  ${(props) =>
    props.subText &&
    css`
      color: ${(props) => props.theme.color.grey400};
    `}
  ${(props) =>
    props.bold &&
    css`
      font-weight: 600;
    `}
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }
`;
