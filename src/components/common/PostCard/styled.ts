import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const PostCardWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  width: 100%;
  cursor: pointer;
`;
export const PostCardImage = styled.img`
  width: 400px;
`;
export const PostCardImageWrapper = styled.div`
  width: 360px;
  height: 240px;
  border: solid 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PostCardContentWrapper = styled(motion.div)`
  box-sizing: border-box;
  height: 240px;
  box-shadow: 0 2px 12px rgba(25, 31, 40, 0.08);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  position: relative;
  padding: 30px 40px;
  z-index: 2;
  background: #fff;
  flex-direction: column;
`;
export const PostDate = styled.p`
  font-size: ${(props) => props.theme.fontSize.body2};
  color: ${(props) => props.theme.color.grey600};
  margin-bottom: 12px;
`;
export const BookmarkWrapper = styled.div`
  position: absolute;
  top: -3px;
  right: 39px;
  transition: all 0.3s ease;
`;
export const PostTitle = styled.h4`
  font-size: ${(props) => props.theme.fontSize.h5};
  color: ${(props) => props.theme.color.grey900};
  margin-bottom: 16px;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const PostHashTageSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  transition: all 0.2s;
`;
export const PostContent = styled(motion.p)<{ hover: boolean }>`
  font-size: ${(props) => props.theme.fontSize.body1};
  color: ${(props) => props.theme.color.grey600};
  box-sizing: border-box;
  width: 720px;
  transition: all 0.3s ease;
  height: 67.2px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  ${(props) =>
    props.hover &&
    css`
      width: 1050px;
    `}
`;
