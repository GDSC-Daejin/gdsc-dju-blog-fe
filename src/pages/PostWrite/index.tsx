import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  PostBottomButtonCWrapper,
  PostBottomButtonLWrapper,
  PostBottomButtonRWrapper,
  PostBottomButtonWrapper,
  PostContentWrapper,
  PostFileImage,
  PostGDSCButtonWrapper,
  PostHashtag,
  PostInformation,
  PostThumbnailInner,
  PostThumbnailWrapper,
  PostTitle,
  ThumbnailText,
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
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { modalState, ModalType } from '../../store/modal';
import { PostPostDataType } from '../../types/postData';
import { alertState } from '../../store/alert';
import { postState } from '../../store/postEdit';
import { useGetDetailPost } from '../../api/hooks/useGetDetailPost';
import hljs from 'highlight.js';

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
  const [fileImage, setFileImage] = useState<string | null>(null);
  const [modal, setModal] = useRecoilState(modalState);
  const [alert, setAlert] = useRecoilState(alertState);
  const [detailPostData, setDetailPostData] = useState<PostPostDataType>({
    title: '',
    content: '',
    category: { categoryName: '' },
    postHashTags: '',
    base64Thumbnail: '',
    fileName: '',
    tmpStore: true,
  });
  const input = useRef<HTMLInputElement>(null);
  const editorRef: any = useRef();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { postData } = useGetDetailPost(id);

  const isButtonBlock =
    !detailPostData.category.categoryName ||
    !detailPostData.title ||
    detailPostData.content.length < 10;

  const handleDraft = async () => {
    try {
      setDetailPostData(() => {
        return { ...detailPostData, tmpStore: true };
      });
      await API.postPostData(detailPostData);
      await setAlert({
        ...alert,
        alertStatus: 'success',
        alertHandle: true,
        alertMessage: '임시 저장에 성공했어요',
      });
      await navigate(`/category/all`);
    } catch (e) {
      setAlert({
        ...alert,
        alertStatus: 'error',
        alertHandle: true,
        alertMessage: '임시 저장에 실패했어요',
      });
    }
  };

  const handleSubmit = async () => {
    try {
      setDetailPostData(() => {
        return { ...detailPostData, tmpStore: false };
      });
      await API.postPostData(detailPostData);
      await navigate(`/category/all`);
    } catch (error) {
      setAlert({
        ...alert,
        alertHandle: true,
        alertMessage: '포스트 업로드에 실패했어요.',
      });
    }
  };

  const submitHandler = (type: string) => {
    //포스트 하는거
    if (type === 'uploadPost') {
      console.log(111);
      setDetailPostData(() => {
        return { ...detailPostData, tmpStore: false };
      });
      setModal({
        ...modal,
        isOpen: true,
        type: type as ModalType,
        onClick: handleSubmit,
      });
    }
    // 임시저장
    if (type === 'draft') {
      handleDraft();
    }
    if (type === 'backBlock') {
      setModal({
        ...modal,
        isOpen: true,
        type: type as ModalType,
        onClick: () => navigate(`/category/all`),
      });
    }
  };
  const setCategory = (category: string) => {
    setDetailPostData(() => {
      return { ...detailPostData, category: { categoryName: category } };
    });
  };

  const setEditorValue = () => {
    const editorContent = editorRef.current.getInstance().getMarkdown();
    setDetailPostData(() => {
      return { ...detailPostData, content: editorContent };
    });
  };
  const fileHandler = (e: any) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result?.toString();
      if (base64) {
        setDetailPostData((prev) => {
          return { ...prev, base64Thumbnail: base64.split(',')[1] };
        });
      }
    };
    if (input?.current?.files) {
      const selectFile = input.current.files[0];
      if (selectFile) {
        setFileImage(URL.createObjectURL(selectFile));
        setDetailPostData((prev) => {
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

  useLayoutEffect(() => {
    id &&
      postData &&
      setDetailPostData({
        ...detailPostData,
        title: postData.title,
        category: {
          categoryName: postData.category.categoryName.toLowerCase(),
        },
        content: postData.content,
        postHashTags: postData.postHashTags,
      });
    postData && setFileImage(postData.imagePath);
  }, [postData, id]);

  useEffect(() => {
    const preventGoBack = () => {
      // change start
      history.pushState(null, '', location.href);
      // change end
      setModal({
        ...modal,
        isOpen: true,
        type: 'backBlock',
        onClick: () => {
          navigate(`/category/all`);
          setModal({ ...modal, isOpen: false });
        },
      });
    };
    history.pushState(null, '', location.href);
    window.addEventListener('popstate', preventGoBack);
    return () => window.removeEventListener('popstate', preventGoBack);
  }, []);
  useEffect(() => {
    document.querySelectorAll('.toastui-editor-contents pre').forEach((el) => {
      hljs.highlightElement(el as HTMLElement);
    });
  }, [detailPostData]);
  return (
    <>
      <NavigationBlock />
      <LayoutContainer>
        <ContainerInner>
          <PostCategoryMenu
            onClick={setCategory}
            category={detailPostData.category.categoryName}
          />
          <PostInformation>
            <PostThumbnailWrapper>
              <PostThumbnailInner onClick={() => input.current?.click()}>
                <ThumbnailText>
                  {fileImage
                    ? '썸네일을 수정하려면 다시 눌러주세요!'
                    : '썸네일은 4:3비율이 가장 어울려요!'}
                </ThumbnailText>
                {fileImage ? (
                  <>
                    <PostThumbnail />
                    <PostFileImage src={fileImage} />
                  </>
                ) : (
                  <PostThumbnail />
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
                value={detailPostData.title}
                onChange={(e) => {
                  setDetailPostData(() => {
                    return { ...detailPostData, title: e.target.value };
                  });
                }}
              />
              <PostHashtag
                placeholder={'#해시태그 ,로 구분하세요'}
                value={detailPostData.postHashTags}
                onChange={(e) => {
                  setDetailPostData(() => {
                    return { ...detailPostData, postHashTags: e.target.value };
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
          {id ? (
            <>
              {detailPostData.content.length > 0 && (
                <Editor
                  previewStyle="vertical"
                  height="627px"
                  initialEditType="markdown"
                  initialValue={detailPostData.content}
                  ref={editorRef}
                  onChange={setEditorValue}
                  plugins={[
                    colorSyntax,
                    [codeSyntaxHighlight, { highlighter: Prism }],
                    chart,
                    tableMergedCell,
                  ]}
                />
              )}
            </>
          ) : (
            <>
              <Editor
                previewStyle="vertical"
                height="627px"
                initialEditType="markdown"
                initialValue={detailPostData.content}
                ref={editorRef}
                onChange={setEditorValue}
                plugins={[
                  colorSyntax,
                  [codeSyntaxHighlight, { highlighter: Prism }],
                  chart,
                  tableMergedCell,
                ]}
              />
            </>
          )}

          <BottomPostButtonBox
            postCancel={() => submitHandler('backBlock')}
            postSubmit={() => submitHandler('uploadPost')}
            disable={isButtonBlock}
            draft={() => submitHandler('draft')}
          />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};
const BottomPostButtonBox: React.FC<{
  postCancel: () => void;
  postSubmit: () => void;
  draft: () => void;
  disable: boolean;
}> = ({ postCancel, postSubmit, draft, disable }) => {
  return (
    <PostBottomButtonWrapper>
      <PostBottomButtonLWrapper>
        <GDSCButton text="작성취소" onClick={postCancel} />
      </PostBottomButtonLWrapper>
      <PostBottomButtonCWrapper>
        <GDSCButton text="임시저장" onClick={draft} disable={disable} />
      </PostBottomButtonCWrapper>
      <PostBottomButtonRWrapper>
        <GDSCButton
          text="업로드"
          onClick={() => !disable && postSubmit()}
          color={'googleBlue'}
          disable={disable}
        />
      </PostBottomButtonRWrapper>
    </PostBottomButtonWrapper>
  );
};

export default PostWrite;
