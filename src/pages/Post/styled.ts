import { Viewer } from '@toast-ui/react-editor';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export const PostHead = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 110px;
  margin-bottom: 15px;
`;
export const PostTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h3};
  color: ${({ theme }) => theme.color.grey900};
  margin-bottom: 23px;
`;
export const ContentWrapper = styled.article`
  margin-bottom: 70px;
`;
export const GiscusWrapper = styled.div`
  margin-bottom: 150px;
`;
export const PostAuthorWrapper = styled.h1`
  margin-bottom: 23px;
`;
export const PositionCircle = styled.div<{ color: string }>`
  display: flex;
  position: absolute;
  top: -10px;
  left: 45%;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  ${({ color }) => css`
    background-color: ${color};
  `}
`;
export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 50px;
`;
export const AuthorImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
`;
export const Author = styled.div<{
  color?: keyof typeof theme.color;
  marginRight?: number;
}>`
  font-size: ${({ theme }) => theme.fontSize.h6};
  font-weight: 500;
  ${({ color }) =>
    color &&
    css`
      color: ${theme.color[color as keyof typeof theme.color]};
    `};
  ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: ${marginRight}px;
    `};
`;
export const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSize.h6};
  color: ${({ theme }) => theme.color.grey500};
  font-weight: 400;
`;
export const HashTageSection = styled.section`
  display: flex;
  flex-direction: row;
`;
export const CategoryWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
`;
export const Category = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.color.grey900};
  font-weight: 400;
  flex-wrap: wrap;
  border-bottom: 1px solid black;
  display: flex;
  padding: 4px 0;
  margin-bottom: 20px;
`;
