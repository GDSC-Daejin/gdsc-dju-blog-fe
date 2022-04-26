import React, { createRef, useEffect, useState } from 'react';
import { Giscus } from '@giscus/react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { useParams } from 'react-router-dom';
import { useGetDetailPost } from '../../api/hooks/useGetDetailPost';

import ReactMarkdown from 'react-markdown';
import './post.css';
import styled from 'styled-components';
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
        <div>
          <h1>{postData.title}</h1>
          <PostArticle
            children={postData.content}
            className={'markdown-body'}
          />
          <p>{postData.content}</p>
          {/*<p>{postData.postHashTags}</p>*/}
          <div>{postData.uploadDate}</div>
        </div>
      )}
    </div>
  );
};
const PostArticle = styled(ReactMarkdown)`
  p,
  a {
    font-size: ${({ theme }) => theme.fontSize.body1};
    line-height: 2;
  }
`;

export default Post;
