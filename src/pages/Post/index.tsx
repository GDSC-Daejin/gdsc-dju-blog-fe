import React from 'react';
import { Giscus } from '@giscus/react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { useParams } from 'react-router-dom';
import { useGetDetailPost } from '../../api/hooks/useGetDetailPost';
import { Viewer } from '@toast-ui/react-editor';
import './post.css';
import styled from 'styled-components';
import { PostAuthorWrapper, PostHead, PostTitle } from './styled';
import { MemberDataInfoType } from '../../types/userDataType';

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
    <div>
      {postData && (
        <>
          <PostHead>
            <PostTitle>{postData.title}</PostTitle>
            <PostAuthorWrapper>
              <Author author={postData.memberInfo} />
            </PostAuthorWrapper>
          </PostHead>
          <Viewer initialValue={postData.content} />
        </>
      )}
    </div>
  );
};

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const AuthorImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
`;
const Author: React.FC<{ author: MemberDataInfoType }> = ({ author }) => {
  return (
    <AuthorWrapper>
      <AuthorImage />
    </AuthorWrapper>
  );
};

export default Post;
