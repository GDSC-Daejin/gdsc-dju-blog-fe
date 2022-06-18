import React, { ChangeEvent, useLayoutEffect, useRef, useState } from 'react';
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
} from '../PostWrite/styled';
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
import { DetailPostDataType, PostPostDataType } from '../../types/postData';
import hljs from 'highlight.js';
import { useGetDetailPostTemp } from '../../api/hooks/useGetDetailPostTemp';
import { useRecoilState } from 'recoil';
import { postState } from '../../store/postEdit';
import { useGetDetailPost } from '../../api/hooks/useGetDetailPost';
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

const PostEdit = () => {
  const { postId } = useParams<'postId'>();

  return (
    <>
      <NavigationBlock />
      <LayoutContainer>
        <ContainerInner>
          {postId && <PostEditContent postId={postId} />}
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

const PostEditContent: React.FC<{ postId: string }> = ({ postId }) => {
  const [post, setPost] = useRecoilState(postState);
  const { postData }: any = post.postTmpStore
    ? useGetDetailPostTemp(postId)
    : useGetDetailPost(postId);
  return (
    <>{postData && <PostDetailBox postId={postId} postData={postData} />}</>
  );
};
const PostDetailBox = ({
  postData,
  postId,
}: {
  postData: DetailPostDataType;
  postId: string;
}) => {
  const [postDetailData, setPostDetailData] = useState<PostPostDataType>({
    base64Thumbnail: '',
    fileName: '',
    title: '',
    category: {
      categoryName: '',
    },
    content: '',
    postHashTags: '',
    tmpStore: true,
  });

  const [fileImage, setFileImage] = useState<string>();
  const [file, setFile] = useState(null);
  const categoryHandler = (category: string) => {
    setPostDetailData({
      ...postDetailData,
      category: { categoryName: category },
    });
  };

  useLayoutEffect(() => {
    postData &&
      setPostDetailData({
        ...postDetailData,
        title: postData.title,
        category: {
          categoryName: postData.category.categoryName.toLowerCase(),
        },
        content: postData.content,
        postHashTags: postData.postHashTags,
      });
    postData && setFileImage(postData.imagePath);
    document.querySelectorAll('.toastui-editor-contents pre').forEach((el) => {
      hljs.highlightElement(el as HTMLElement);
    });
  }, [postData]);

  const editorRef: any = useRef(null);
  const input = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const isButtonBlock = () => {
    if (
      postData.category.categoryName == '' ||
      postData.title == '' ||
      postData.content.length < 10
    ) {
      return true;
    } else return false;
  };

  const postEditData = {
    title: postDetailData.title,
    content: postDetailData.content,
    category: { categoryName: postDetailData.category.categoryName },
    postHashTags: postDetailData.postHashTags,
    fileName: postDetailData.fileName,
    base64Thumbnail: postDetailData.base64Thumbnail,
    tmpStore: postDetailData.tmpStore,
  };
  const handleSubmit = async () => {
    if (!isButtonBlock()) {
      await API.updatePostData(postEditData, postId)
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
    const editorContent = editorRef.current?.getInstance().getMarkdown();
    console.log(editorContent);
    setPostDetailData(() => {
      return { ...postDetailData, content: editorContent };
    });
  };
  const handleChangeFile = (e: any) => {
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
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setPostDetailData({
      ...postDetailData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <Modal onClick={handleSubmit} />
      <PostCategoryMenu
        onClick={categoryHandler}
        category={postDetailData.category.categoryName.toLowerCase()}
      />
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
            value={postDetailData.title}
            name={'title'}
            onChange={onChangeValue}
          />
          <PostHashtag
            placeholder={'#해시태그 ,로 구분하세요'}
            value={postDetailData.postHashTags}
            name={'postHashTags'}
            onChange={onChangeValue}
          />
        </PostContentWrapper>
        <PostGDSCButtonWrapper>
          <GDSCButton text="임시글" />
        </PostGDSCButtonWrapper>
      </PostInformation>
      {postDetailData.content.length > 0 && (
        <Editor
          previewStyle="vertical"
          height="627px"
          initialEditType="markdown"
          initialValue={postDetailData.content}
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
    </>
  );
};

export default PostEdit;
