/*Chart Plugin*/
import '@toast-ui/chart/dist/toastui-chart.css';
import chart from '@toast-ui/editor-plugin-chart';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
/*Table Cell Plugin*/
import '@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
/*Code Syntax Highlight */
import 'prismjs/themes/prism.css';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
/*color plugin*/
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { useGetMyPostData } from '../../api/hooks/useGetMyPostData';
import PostService from '../../api/PostService';
import { GDSCButton } from '../../components/common/Button';
import PostCategoryMenu from '../../components/common/PostCategoryMenu';
import PostThumbnail from '../../assets/PostThumbnail';
import { alertState } from '../../store/alert';
import { ModalType, modalState } from '../../store/modal';
import {
  ContainerInner,
  LayoutContainer,
  NavigationBlock,
} from '../../styles/layouts';
import { PostPostDataType } from '../../types/postData';
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
import { ContentBox } from '../Post/styled';
import { useTheme } from '../../hooks/ThemeHandler';

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
  const [temp, setTemp] = useState<undefined | boolean>(undefined);
  const [alert, setAlert] = useRecoilState(alertState);
  const [detailPostData, setDetailPostData] = useState<PostPostDataType>({
    base64Thumbnail: '',
    fileName: '',
    title: '',
    category: {
      categoryName: '',
    },
    content: '',
    postHashTags: '',
    tmpStore: undefined,
  });
  console.log(detailPostData);
  const input = useRef<HTMLInputElement>(null);
  const editorRef: any = useRef();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { postData } = useGetMyPostData(id);
  const isUpdate = id !== undefined;
  const isButtonBlock =
    !detailPostData.category.categoryName ||
    !detailPostData.title ||
    detailPostData.content.length < 10;

  const handleDraft = async (temp: boolean) => {
    const postData = { ...detailPostData, tmpStore: temp };
    try {
      await PostService.postMyPostData(postData);
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

  const handleSubmit = async (temp: boolean) => {
    const postData = { ...detailPostData, tmpStore: temp };
    setModal({
      ...modal,
      isOpen: false,
    });
    try {
      await PostService.postMyPostData(postData);
      await navigate(`/category/all`);
      await setAlert({
        ...alert,
        alertStatus: 'success',
        alertHandle: true,
        alertMessage: '업로드에 성공했어요',
      });
    } catch (error) {
      setAlert({
        ...alert,
        alertStatus: 'error',
        alertHandle: true,
        alertMessage: '포스트 업로드에 실패했어요.',
      });
    }
  };
  const updatePost = async () => {
    const postData = { ...detailPostData, tmpStore: false };
    setModal({
      ...modal,
      isOpen: false,
    });
    try {
      id && (await PostService.updateMyPostData(postData, id));
      await setAlert({
        ...alert,
        alertStatus: 'success',
        alertHandle: true,
        alertMessage: '업데이트에 성공했어요',
      });
      await navigate(`/category/all`);
    } catch (error) {
      setAlert({
        ...alert,
        alertStatus: 'error',
        alertHandle: true,
        alertMessage: '업데이트에 실패했어요',
      });
    }
  };

  const submitHandler = (type: string) => {
    //포스트
    if (type === 'uploadPost') {
      setModal({
        ...modal,
        isOpen: true,
        type: type as ModalType,
        onClick: () => handleSubmit(false),
      });
    }
    // 임시저장
    if (type === 'draft') {
      handleDraft(true);
    }
    if (type === 'update') {
      setModal({
        ...modal,
        isOpen: true,
        type: type as ModalType,
        onClick: () => updatePost(),
      });
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
      console.log(base64);
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
  const { theme } = useTheme();
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
          <ContentBox>
            {id ? (
              <>
                {detailPostData.content.length > 0 && (
                  <Editor
                    theme={theme}
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
                  theme={theme}
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
          </ContentBox>
          <BottomPostButtonBox
            isUpdate={isUpdate}
            postCancel={() => submitHandler('backBlock')}
            postSubmit={() => {
              setTemp(false);
              submitHandler(isUpdate ? 'update' : 'uploadPost');
            }}
            disable={isButtonBlock}
            draft={() => {
              setTemp(true);
              submitHandler('draft');
            }}
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
  isUpdate: boolean;
}> = ({ postCancel, postSubmit, draft, disable, isUpdate }) => {
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
          text={isUpdate ? '수정하기' : '업로드'}
          onClick={() => {
            !disable && (isUpdate ? postSubmit() : postSubmit());
          }}
          color={'googleBlue'}
          disable={disable}
        />
      </PostBottomButtonRWrapper>
    </PostBottomButtonWrapper>
  );
};

export default PostWrite;
