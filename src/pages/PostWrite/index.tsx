import React, { useEffect, useRef, useState } from 'react';
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
import { useRecoilState } from 'recoil';
import { MODAL_KEY, modalState } from '../../store/modal';
import Modal from '../../components/common/modal';

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
    fileName: '',
    tmpStore: true,
  });
  const navigate = useNavigate();
  const postData = {
    base64Thumbnail: postDetailData.base64Thumbnail,
    title: postDetailData.title,
    content: postDetailData.content,
    category: { categoryName: category },
    postHashTags: postDetailData.hashtag,
    fileName: postDetailData.fileName,
    tmpStore: postDetailData.tmpStore,
  };
  const isButtonBlock = () => {
    if (
      postData.category.categoryName == '' ||
      postData.title == '' ||
      postData.content.length < 10
    ) {
      return true;
    } else return false;
  };
  const handleSubmit = async () => {
    if (!isButtonBlock()) {
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
  const [modal, setModal] = useRecoilState(modalState);
  const modalHandler = (modalType: string) => {
    if (modalType === 'uploadPost') {
      setPostDetailData(() => {
        return { ...postDetailData, tmpStore: false };
      });
    }
    setModal({
      ...modal,
      [MODAL_KEY.SHOW]: true,
      [MODAL_KEY.TYPE]: modalType,
    });
  };
  const setEditorValue = () => {
    const editorContent = editorRef.current.getInstance().getMarkdown();
    setPostDetailData(() => {
      return { ...postDetailData, content: editorContent };
    });
  };
  const fileHandler = (e: any) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result?.toString();
      if (base64) {
        setPostDetailData((prev) => {
          return { ...prev, base64Thumbnail: base64.split(',')[1] };
        });
      }
    };
    if (input?.current?.files) {
      const selectFile = input.current.files[0];
      if (selectFile) {
        setFileImage(URL.createObjectURL(selectFile));
        setPostDetailData((prev) => {
          return {
            ...prev,
            fileName: selectFile.name,
          };
        });
        reader.readAsDataURL(selectFile);
        setFile(e.target.files[0]);
      }
    }
  };
  return (
    <>
      <Modal onClick={handleSubmit} />
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
                onChange={fileHandler}
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
          </PostInformation>
          <PostGDSCButtonWrapper>
            <GDSCButton
              text="임시글"
              onClick={() => {
                navigate(`/post/saves`);
              }}
            />
          </PostGDSCButtonWrapper>
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
              <GDSCButton
                text="작성취소"
                onClick={() => {
                  modalHandler('savePost');
                }}
              />
            </PostBottomButtonLWrapper>
            <PostBottomButtonCWrapper>
              <GDSCButton
                text="임시저장"
                onClick={() => {
                  handleSubmit();
                  alert('임시저장 되었습니다.');
                }}
                disable={isButtonBlock()}
              />
            </PostBottomButtonCWrapper>
            <PostBottomButtonRWrapper>
              <GDSCButton
                text="업로드"
                onClick={() => modalHandler('uploadPost')}
                color={'googleBlue'}
                disable={isButtonBlock()}
              />
            </PostBottomButtonRWrapper>
          </PostBottomButtonWrapper>
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default PostWrite;
