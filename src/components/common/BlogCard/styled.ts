import styled, { css, keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

export const BlogCardInner = styled(motion.article)`
  position: relative;
  width: 248px;
  height: 294px;
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
  width: 248px;
  height: 294px;
  border-radius: 13px;
`;

export const BlogCardTagWrapper = styled.div<{ IsHovered: boolean }>`
  display: flex;
  position: absolute;
  bottom: ${(props) => (props.IsHovered ? '254px' : '92px')};
  transition: all 0.3s ease;
  left: 9px;
`;
export const BlogCardTag = styled.div`
  height: 17px;
  padding: 1px 10px;
  border-radius: 50px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    color: #ffffff;
  }
`;
export const BlogCardBottomBox = styled(motion.div)<{ isHovered: boolean }>`
  position: absolute;
  transition: all 0.3s ease-in;
  border-radius: 10px;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: #fff;
  padding: 8px 20px 12px;
  gap: ${(props) => (props.isHovered ? '170px' : '8px')};
  transition: all 0.3s ease;
  cursor: pointer;
`;
export const BlogCardTitle = styled(motion.h6)`
  font-size: ${(props) => props.theme.fontSize.h6};
  font-weight: 400;
  color: ${(props) => props.theme.color.grey900};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  height: 18px;
  width: 18px;
`;
export const BlogCardPostText = styled(motion.div)`
  position: absolute;
  transform: translate(-50%, 0%);
  top: 53px;
  font-size: 12px;
  width: 208px;
  min-height: 120px;
  max-height: 120px;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const PostText = styled(ReactMarkdown)`
  height: 100%;
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend {
    font-size: ${({ theme }) => theme.fontSize.body3};
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BlogCardSubText = styled.div<{
  subText?: boolean;
  bold?: boolean;
}>`
  font-size: ${(props) => props.theme.fontSize.body3};
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
export const SilverCard = styled.div`
  width: 248px;
  height: 294px;
`;
