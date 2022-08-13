import React from 'react';
import { useParams } from 'react-router-dom';
import { Giscus } from '@giscus/react';

import { LayoutContainer, PostContainerInner } from '../../styles/layouts';
import PostContent from './Content';
import { ContentWrapper, GiscusWrapper } from './styled';

const Post = () => {
  const { postId } = useParams<'postId'>();
  const theme = localStorage.getItem('theme') || 'light';
  return (
    <LayoutContainer>
      <PostContainerInner>
        <ContentWrapper>
          {postId && <PostContent postId={postId} />}
        </ContentWrapper>
        <GiscusWrapper>
          <Giscus
            repo="GDSC-Daejin/gdsc-dju-blog-fe"
            repoId="R_kgDOGwlX0Q"
            category="Announcements"
            categoryId="DIC_kwDOGwlX0c4CBQA5"
            mapping="pathname"
            theme={theme}
            lang="ko"
          />
        </GiscusWrapper>
      </PostContainerInner>
    </LayoutContainer>
  );
};

export default Post;
