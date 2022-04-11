import React, { useRef, useState } from 'react';
import {
  PostInformation,
  PostContentWrapper,
  PostThumbnailWrapper,
  PostTitle,
  PostHashtag,
  PostGDSCButtonWrapper,
  PostBottomButtonWrapper,
  PostBottomButtonLWrapper,
  PostBottomButtonCWrapper,
  PostBottomButtonRWrapper,
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
import PostCategoryMenu from '../../components/common/PostCategoryMenu';
import PostThumbnail from '../../Images/PostThumbnail';
import { GDSCButton } from '../../components/common/Button';
import axios from 'axios';
import API from '../../api';

export const PostCategoryMenuData = [
  {
    title: 'Frontend',
    subtitle: 'frontend',
  },
  {
    title: 'Backend',
    subtitle: 'backend',
  },
  {
    title: 'Android',
    subtitle: 'android',
  },
  {
    title: 'Design',
    subtitle: 'design',
  },
  {
    title: 'Common',
    subtitle: 'beginner',
  },
];

const PostWrite = () => {
  const editorRef: any = useRef();
  const [title, setTitle] = useState('');
  const [state, setState] = useState('');
  const handleSubmit = async () => {
    const content = editorRef.current.getInstance().getHTML();
    setState(content);
    console.log(title);
    console.log(content);
    axios
      .post('https://gdsc-dju.com/api/member/v2/post', {
        base64Thumbnail: 'base64인코딩자료',
        blocked: false,
        category: {
          categoryName: 'string',
          modifiedAt: '2022-04-11T15:35:34.892Z',
          uploadDate: '2022-01-06 14:57:42.777000',
        },
        content: '내용',
        fileName: 'base64인코딩해서보낼때 필요한 파일이름',
        postHashTags: 'HashtagContent',
        title: '제목',
      })
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <>
      <NavigationBlock />
      <LayoutContainer>
        <ContainerInner>
          <PostCategoryMenu />
          <PostInformation>
            <PostThumbnailWrapper>
              <PostThumbnail />
            </PostThumbnailWrapper>
            <PostContentWrapper>
              <PostTitle
                placeholder="제목을 입력하세요."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></PostTitle>
              <PostHashtag>#해시태그 ,로 구분하세요</PostHashtag>
            </PostContentWrapper>
            <PostGDSCButtonWrapper>
              <GDSCButton text="임시글" />
            </PostGDSCButtonWrapper>
          </PostInformation>
          <Editor
            previewStyle="vertical"
            height="627px"
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
          <PostBottomButtonWrapper>
            <PostBottomButtonLWrapper>
              <GDSCButton text="작성취소" />
            </PostBottomButtonLWrapper>
            <PostBottomButtonCWrapper>
              <GDSCButton text="임시저장" />
            </PostBottomButtonCWrapper>
            <PostBottomButtonRWrapper>
              <GDSCButton
                text="업로드"
                onClick={handleSubmit}
                color="GDSC blue"
              />
            </PostBottomButtonRWrapper>
          </PostBottomButtonWrapper>
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default PostWrite;
