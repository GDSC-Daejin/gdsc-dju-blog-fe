import React, { createRef, useState } from 'react';
import { Giscus } from '@giscus/react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
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
const Posts = () => {
  const editorRef: any = createRef<HTMLInputElement>();
  const [content, setContent] = useState('');

  const handleChangeEditor = () => {
    const content = editorRef.current.getInstance().getHTML();
    setContent(content);
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
          <div id="toastUIEditor">
            <h1>Toast UI Editor Example</h1>
            <div id="button">
              <button className="btn_save" onClick={handleChangeEditor}>
                Save
              </button>
            </div>
            <div>
              <h2>Result</h2>
              <textarea
                className="result"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
          </div>
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default Posts;
