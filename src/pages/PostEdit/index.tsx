import React, { useRef, useState, useEffect } from 'react';
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
} from '../PostWrite/styled';
import { PostEditContentWrapper } from './styled';
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
  const { postData } = useGetDetailPost(postId);
  console.log(postData);

  console.log(postData?.category.categoryName);
  useEffect(() => {
    document.querySelectorAll('.toastui-editor-contents pre').forEach((el) => {
      hljs.highlightElement(el as HTMLElement);
    });
  }, [postData]);

  const editorRef: any = useRef();
  const [category, setCategory] = useState(postData?.category.categoryName);
  const [postDetailData, setPostDetailData] = useState({
    title: postData?.title,
    content: postData?.content,
    hashtag: postData?.postHashTags,
  });

  const navigate = useNavigate();

  const postEditData: PostPostDataType = {
    title: postDetailData.title,
    content: postDetailData.content,
    category: { categoryName: category },
    postHashTags: postDetailData.hashtag,
    fileName: '',
    base64Thumbnail: '',
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
  return (
    <>
      {postData && (
        <>
          <PostCategoryMenu onClick={setCategory} category={category} />
          <PostInformation>
            <PostThumbnailWrapper>
              <PostThumbnail />
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
                value={postDetailData.hashtag}
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
