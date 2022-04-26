import React from 'react';
import { Giscus } from '@giscus/react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { useParams } from 'react-router-dom';
import { useGetDetailPost } from '../../api/hooks/useGetDetailPost';
import { Viewer } from '@toast-ui/react-editor';
import './post.css';
import styled, { css } from 'styled-components';
import { PostAuthorWrapper, PostHead, PostTitle } from './styled';
import { AuthorProps } from '../../types/postData';
import { theme } from '../../styles/theme';
import { dateFilter } from '../../Utils/dateFilter';
import { hashTageSpreader } from '../../Utils/hashTageSpreader';
import { HashTageDark } from '../../components/common/HashTage';
import { positionColor } from '../../store/positionColor';

const Post = () => {
  const { postId } = useParams<'postId'>();

  return (
    <LayoutContainer>
      <ContainerInner>
        {postId && <PostContent postId={postId} />}
        <Giscus
          repo="GDSC-Daejin/gdsc-dju-blog-fe"
          repoId="R_kgDOGwlX0Q"
          category="Announcements"
          categoryId="DIC_kwDOGwlX0c4CBQA5"
          mapping="pathname"
          theme={'light'}
          lang="ko"
        />
      </ContainerInner>
    </LayoutContainer>
  );
};
const PostContent: React.FC<{ postId: string }> = ({ postId }) => {
  const { postData } = useGetDetailPost(postId);

  return (
    <>
      {postData && (
        <>
          <PostHead>
            <CategoryWrapper>
              <PositionCircle
                color={positionColor(postData.category.categoryName)}
              />
              <Category>{postData.category.categoryName}</Category>
            </CategoryWrapper>
            <PostTitle>{postData.title}</PostTitle>
            <PostAuthorWrapper>
              <AuthorBox {...postData.memberInfo} {...postData} />
            </PostAuthorWrapper>
          </PostHead>
          <Viewer initialValue={postData.content} />
        </>
      )}
    </>
  );
};

const PositionCircle = styled.div<{ color: string }>`
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
const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 50px;
`;
const AuthorImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
`;
const Author = styled.div<{
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
const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSize.h6};
  color: ${({ theme }) => theme.color.grey500};
  font-weight: 400;
`;
const HashTageSection = styled.section`
  display: flex;
  flex-direction: row;
`;
const CategoryWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
`;
const Category = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.color.grey900};
  font-weight: 400;
  flex-wrap: wrap;
  border-bottom: 1px solid black;
  display: flex;
  padding: 4px 0;
  margin-bottom: 20px;
`;
interface AuthorBoxProps extends AuthorProps {
  uploadDate: string;
  postHashTags: string;
}
const AuthorBox: React.FC<AuthorBoxProps> = ({
  member,
  nickname,
  uploadDate,
  postHashTags,
}) => {
  return (
    <>
      <AuthorWrapper>
        <AuthorImage src={member.profileImageUrl} />
        <Author color={'grey500'} marginRight={2}>
          by
        </Author>
        <Author marginRight={10}>{nickname}</Author>
        <Date>{dateFilter(uploadDate)}</Date>
      </AuthorWrapper>
      <HashTageSection>
        {hashTageSpreader(postHashTags).map((tage) => (
          <HashTageDark text={tage} key={tage} size={'L'} />
        ))}
      </HashTageSection>
    </>
  );
};

export default Post;
