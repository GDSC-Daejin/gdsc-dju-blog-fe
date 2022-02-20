import React from 'react';
import { Giscus } from '@giscus/react';
import { useRecoilState } from 'recoil';
import { themeState } from '../../store/theme';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';

const Post = () => {
  const [themeMode] = useRecoilState(themeState);
  console.log(themeMode);
  return (
    <LayoutContainer>
      <ContainerInner>
        <Giscus
          repo="GDSC-Daejin/gdsc-dju-blog-fe"
          repoId="R_kgDOGwlX0Q"
          category="Announcements"
          categoryId="DIC_kwDOGwlX0c4CBQA5"
          mapping="pathname"
          theme={themeMode.light ? 'light' : 'dark'}
          lang="ko"
        />
      </ContainerInner>
    </LayoutContainer>
  );
};

export default Post;
