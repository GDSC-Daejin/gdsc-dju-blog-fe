import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const PostCardWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  width: 100%;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(25, 31, 40, 0.08);
  box-sizing: border-box;
`;
export const PostCardImage = styled.div<{ backgroundImage: string }>`
  //background: black;
  width: 500px;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: left;
`;
export const PostCardImageWrapper = styled.div`
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: hidden;
  display: flex;
  position: absolute;
  transition: all 0.3s ease-in-out;
  justify-content: flex-start;
`;

export const PostCardContentWrapper = styled(motion.div)<{ hover: boolean }>`
  box-sizing: border-box;
  height: 240px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  position: relative;
  padding: 30px 40px;
  z-index: 2;
  background: #fff;
  left: 30%;
  width: 70%;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  ${({ hover }) =>
    hover &&
    css`
      left: 5%;
      width: 95%;
    `}
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
export const PostContent = styled(motion.p)`
  font-size: ${(props) => props.theme.fontSize.body1};
  color: ${(props) => props.theme.color.grey600};
  box-sizing: border-box;
  transition: all 0.3s ease;
  height: 67.2px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
