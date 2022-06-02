import React, { useRef, useState, useEffect } from 'react';
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
import { useGetDetailPost } from '../../api/hooks/useGetDetailPost';
import { PostPostDataType } from '../../types/postData';
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

const PostEdit = () => {
  const { postId } = useParams<'postId'>();
  console.log(`postId ${postId}`);
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
  const { postData } = useGetDetailPost(postId);

  useEffect(() => {
    document.querySelectorAll('.toastui-editor-contents pre').forEach((el) => {
      hljs.highlightElement(el as HTMLElement);
    });
  }, [postData]);

  const editorRef: any = useRef();
  const [file, setFile] = useState(null);
  const [fileImage, setFileImage] = useState(`${postData?.imagePath}`);
  const input = useRef<HTMLInputElement>(null);
  const [category, setCategory] = useState(
    postData?.category.categoryName.toLowerCase(),
  );
  const [postDetailData, setPostDetailData] = useState<PostPostDataType>({
    title: '',
    content: '',
    postHashTags: '',
    fileName: '',
    category: {
      categoryName: '',
    },
    base64Thumbnail: '',
  });

  const navigate = useNavigate();

  const postEditData: PostPostDataType = {
    title: postDetailData.title,
    content: postDetailData.content,
    category: { categoryName: postDetailData.category.categoryName },
    postHashTags: postDetailData.postHashTags,
    fileName: postDetailData.fileName,
    base64Thumbnail: postDetailData.base64Thumbnail,
  };
  const handleSubmit = async () => {
    await API.updatePostData(postEditData, postId)
      .then((res) => {
        navigate(`/category/all`);
      })
      .catch((err) => {
        alert('실패');
      });
    console.log('제출완료');
  };
  const setEditorValue = () => {
    const editorContent = editorRef.current.getInstance().getMarkdown();
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
  return (
    <>
      {postData && (
        <>
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
                value={postDetailData.title}
                onChange={(e) => {
                  setPostDetailData(() => {
                    return { ...postDetailData, title: e.target.value };
                  });
                }}
              />
              <PostHashtag
                placeholder={'#해시태그 ,로 구분하세요'}
                value={postDetailData.postHashTags}
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
                color={'googleBlue'}
                onClick={handleSubmit}
              />
            </PostBottomButtonRWrapper>
          </PostBottomButtonWrapper>
        </>
      )}
    </>
  );
};

export default PostEdit;
