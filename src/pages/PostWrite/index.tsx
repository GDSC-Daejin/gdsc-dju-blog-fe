import React, { useRef, useState } from 'react';
import {
  PostBottomButtonCWrapper,
  PostBottomButtonLWrapper,
  PostBottomButtonRWrapper,
  PostBottomButtonWrapper,
  PostContentWrapper,
  PostGDSCButtonWrapper,
  PostHashtag,
  PostInformation,
  PostThumbnailWrapper,
  PostTitle,
} from './styled';
import {
  ContainerInner,
  LayoutContainer,
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
import API from '../../api';
import { useNavigate } from 'react-router-dom';

export const PostCategoryMenuData = [
  {
    title: 'Frontend'.toLowerCase(),
  },
  {
    title: 'Backend'.toLowerCase(),
  },
  {
    title: 'Android'.toLowerCase(),
  },
  {
    title: 'Design'.toLowerCase(),
  },
  {
    title: 'Common'.toLowerCase(),
  },
];

const PostWrite = () => {
  const editorRef: any = useRef();
  const [category, setCategory] = useState('');
  const [postDetailData, setPostDetailData] = useState({
    title: '',
    content: '',
    hashtag: '',
  });
  const navigate = useNavigate();
  const postData = {
    title: postDetailData.title,
    content: postDetailData.content,
    category: { categoryName: category },
    postHashTags: postDetailData.hashtag,
    fileName: '',
    base64Thumbnail: '',
    tmpStore: 'false',
  };
  const isUploadBlock = () => {
    if (postData.category.categoryName == '' || postData.title == '') {
      return true;
    } else return false;
  };
  const isContentBlock = () => {
    if (postData.content.length < 10) {
      return true;
    } else return false;
  };
  const handleSubmit = async () => {
    if (!isUploadBlock()) {
      await API.postPostData(postData)
        .then((res) => {
          navigate(`/category/all`);
        })
        .catch((err) => {
          alert('실패');
        });
    } else {
      alert('카테고리와 제목을 입력해주세요');
    }
  };
  const setEditorValue = () => {
    const editorContent = editorRef.current.getInstance().getMarkdown();
    setPostDetailData(() => {
      return { ...postDetailData, content: editorContent };
    });
  };
  return (
    <>
      <NavigationBlock />
      <LayoutContainer>
        <ContainerInner>
          <PostCategoryMenu onClick={setCategory} category={category} />
          <PostInformation>
            <PostThumbnailWrapper>
              <PostThumbnail />
            </PostThumbnailWrapper>
            <PostContentWrapper>
              <PostTitle
                placeholder="제목을 입력하세요."
                value={postData.title}
                onChange={(e) => {
                  setPostDetailData(() => {
                    return { ...postDetailData, title: e.target.value };
                  });
                }}
              />
              <PostHashtag
                placeholder={'#해시태그 ,로 구분하세요'}
                onChange={(e) => {
                  setPostDetailData(() => {
                    return { ...postDetailData, hashtag: e.target.value };
                  });
                }}
              />
            </PostContentWrapper>
            <PostGDSCButtonWrapper>
              <GDSCButton text="임시글" />
            </PostGDSCButtonWrapper>
          </PostInformation>
          <Editor
            previewStyle="vertical"
            height="627px"
            initialEditType="markdown"
            initialValue="helloWorld"
            ref={editorRef}
            onChange={setEditorValue}
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
              <GDSCButton text="임시저장" disable={isContentBlock()} />
            </PostBottomButtonCWrapper>
            <PostBottomButtonRWrapper>
              <GDSCButton
                text="업로드"
                onClick={handleSubmit}
                color={'googleBlue'}
                disable={isUploadBlock()}
              />
            </PostBottomButtonRWrapper>
          </PostBottomButtonWrapper>
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default PostWrite;
