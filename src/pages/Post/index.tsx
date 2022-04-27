import React, { useEffect } from 'react';
import { Giscus } from '@giscus/react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { useParams } from 'react-router-dom';
import { useGetDetailPost } from '../../api/hooks/useGetDetailPost';
import { Viewer } from '@toast-ui/react-editor';
import './post.css';
import styled, { css } from 'styled-components';
import {
  Author,
  AuthorImage,
  AuthorWrapper,
  Category,
  CategoryWrapper,
  Date,
  HashTageSection,
  PositionCircle,
  PostAuthorWrapper,
  PostHead,
  PostTitle,
} from './styled';
import { AuthorProps } from '../../types/postData';
import { theme } from '../../styles/theme';
import { dateFilter } from '../../Utils/dateFilter';
import { hashTageSpreader } from '../../Utils/hashTageSpreader';
import { HashTageDark } from '../../components/common/HashTage';
import { positionColor } from '../../store/positionColor';
import hljs from 'highlight.js';

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

  useEffect(() => {
    document.querySelectorAll('.toastui-editor-contents pre').forEach((el) => {
      hljs.highlightElement(el as HTMLElement);
    });
  }, [postData]);

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
