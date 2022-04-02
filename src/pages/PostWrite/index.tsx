import React, { createRef, useState } from 'react';
import {
  PostInformation,
  PostContentWrapper,
  PostThumbnailWrapper,
  PostTitle,
  PostHashtag,
} from './styled';
import {
  LayoutContainer,
  ContainerInner,
  NavigationBlock,
} from '../../styles/layouts';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
/*color plugin*/
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
/*Code Syntax Highlight */
import 'prismjs/themes/prism.css';
import Prism from 'prismjs';
import 'prismjs/components/prism-clojure.js';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
/*Chart Plugin*/
import '@toast-ui/chart/dist/toastui-chart.css';
import chart from '@toast-ui/editor-plugin-chart';
/*Table Cell Plugin*/
import '@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import CategoryMenu from '../../components/common/CategoryMenu';
import PostCategoryMenu from '../../components/common/PostCategoryMenu';

const PostWrite = () => {
  const editorRef: any = createRef<HTMLInputElement>();
  const [content, setContent] = useState('');

  return (
    <>
      <NavigationBlock />
      <LayoutContainer>
        <ContainerInner>
          <PostCategoryMenu />
          <PostInformation />
          <PostThumbnailWrapper />
          <PostContentWrapper />
          <PostTitle>sfsaf</PostTitle>
          <PostHashtag>dfasdfsa</PostHashtag>
          <Editor
            previewStyle="vertical"
            height="400px"
            initialEditType="markdown"
            initialValue="hello"
            ref={editorRef}
            plugins={[
              colorSyntax,
              [codeSyntaxHighlight, { highlighter: Prism }],
              chart,
              tableMergedCell,
            ]}
          />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default PostWrite;
