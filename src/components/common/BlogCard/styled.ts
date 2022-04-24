import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const BlogCardInner = styled(motion.div)`
  position: relative;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 19px 32px -1px rgba(0, 0, 0, 0.1);
`;

export const BookMarkWrapper = styled.div`
  position: absolute;
  width: 23.33px;
  height: 30px;
  right: 17px;
  top: -3px;
  cursor: pointer;
`;

export const BlogCardThumbnail = styled.img`
  border-radius: 13px;
`;

export const BlogCardTagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  transition: all 0.3s ease;
  margin-bottom: 12px;
`;

export const BlogCardBottom = styled.div<{ isHovered: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  transition: all 0.3s ease;
  height: ${({ isHovered }) => (isHovered ? '280' : '115')}px;
  width: 100%;
  left: 0;
  bottom: 0;
`;
export const BlogCardTag = styled.div`
  width: 73px;
  height: 17px;
  padding: 1px 10px;
  border-radius: 50px;
  border: 1px solid #ffffff99;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }
`;

export const BlogCardBottomBox = styled(motion.div)`
  transition: all 0.3s ease-in-out;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  padding: 12px 20px;
  cursor: pointer;
`;
export const BlogCardTitle = styled(motion.h6)<{ isHovered: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.h6};
  font-weight: 400;
  color: ${(props) => props.theme.color.grey900};
  margin-bottom: ${(props) => (props.isHovered ? '8' : '12')}px;
  transition: all 0.3s ease;
  white-space: nowrap;
`;
export const BlogCardSubTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const BlogCardAuthorWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const BlogCardAuthorImage = styled.img`
  background: ${(props) => props.theme.color.grey400};
  border-radius: 100%;
  margin-right: 7px;
  height: 20px;
  width: 20px;
`;
export const BlogCardPostText = styled(motion.p)`
  font-size: 1.4rem;
  min-height: 208px;
  overflow: hidden;
  margin-bottom: 39px;
`;

export const BlogCardSubText = styled.div<{
  subText?: boolean;
  bold?: boolean;
}>`
  font-size: ${(props) => props.theme.fontSize.body3};
  ${({ subText }) =>
    subText &&
    css`
      color: ${(props) => props.theme.color.grey400};
    `}
  ${({ bold }) =>
    bold &&
    css`
      font-weight: 600;
    `}
  margin-right: 3px;
  &:last-child {
    margin-right: 0;
  }
`;
