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
  PostThumbnailInner,
  PostFileImage,
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
  if (window.history && history.pushState) {
    addEventListener('load', function () {
      history.pushState(null, '', null);

      addEventListener('popstate', function () {
        const stayOnPage = confirm('페이지를 벗어나시겠습니까?');

        if (!stayOnPage) {
          history.pushState(null, '', null);
        } else {
          history.back();
        }
      });
    });
  }
  const [file, setFile] = useState(null);
  const [fileImage, setFileImage] = useState('');
  const input = useRef<HTMLInputElement>(null);
  const editorRef: any = useRef();
  const [category, setCategory] = useState('');
  const [postDetailData, setPostDetailData] = useState({
    title: '',
    content: '',
    hashtag: '',
    base64Thumbnail: '',
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
          console.log(err);
          console.log(postData);
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
  const handleChangeFile = (event: any) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setPostDetailData(() => {
          return { ...postDetailData, base64Thumbnail: base64.toString() };
        });
      }
    };
    if (event.target.files[0]) {
      setFileImage(URL.createObjectURL(event.target.files[0]));
      reader.readAsDataURL(event.target.files[0]);
      setFile(event.target.files[0]);
    }
  };
  console.log(postDetailData.base64Thumbnail);
  return (
    <>
      <NavigationBlock />
      <LayoutContainer>
        <ContainerInner>
          <PostCategoryMenu onClick={setCategory} category={category} />
          <PostInformation>
            <PostThumbnailWrapper>
              <PostThumbnailInner onClick={() => input.current?.click()}>
                {fileImage === '' ? (
                  <PostThumbnail />
                ) : (
                  <PostFileImage src={fileImage} />
                )}
              </PostThumbnailInner>
              <input
                ref={input}
                style={{ display: 'none' }}
                type="file"
                name="imgFile"
                id="imgFile"
                onChange={handleChangeFile}
              />
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
