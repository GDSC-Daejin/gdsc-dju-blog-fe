import React, { createRef } from 'react';
import { Giscus } from '@giscus/react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
const Posts = () => {
  const editorRef: any = createRef<HTMLInputElement>();

  const handleClick = () => {
    editorRef.current.getInstance().exec('Bold');
  };
  return (
    <>
      <LayoutContainer>
        <ContainerInner>
          <Giscus
            repo="GDSC-Daejin/gdsc-dju-blog-fe"
            repoId="R_kgDOGwlX0Q"
            category="Announcements"
            categoryId="DIC_kwDOGwlX0c4CBQA5"
            mapping="pathname"
            lang="ko"
          />
        </ContainerInner>
      </LayoutContainer>
      <Editor
        previewStyle="vertical"
        height="400px"
        initialEditType="markdown"
        initialValue="hello"
        ref={editorRef}
      />
    </>
  );
};

export default Posts;
