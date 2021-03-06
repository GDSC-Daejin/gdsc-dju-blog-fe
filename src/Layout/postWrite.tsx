import chart from '@toast-ui/editor-plugin-chart';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
import { Editor } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import React, {
  ChangeEvent,
  Dispatch,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import PostThumbnail from '../assets/PostThumbnail';
import { GDSCButton } from '../components/common/Button';
import PostCategoryMenu from '../components/common/PostCategoryMenu';
import { useTheme } from '../hooks/ThemeHandler';
import { ContentBox } from '../pages/Post/styled';

import { DetailPostDataType, PostPostDataType } from '../types/postData';
import {
  PostBottomButtonBox,
  PostBottomButtonWrapper,
  PostContentWrapper,
  PostFileImage,
  PostGDSCButtonWrapper,
  PostHashtag,
  PostInformation,
  PostLayoutWrapper,
  PostThumbnailInner,
  PostThumbnailWrapper,
  PostTitle,
  ThumbnailText,
} from './postWrite.styled';

interface PostWriteProps {
  postData: DetailPostDataType | undefined;
  submitHandler: (postData: PostPostDataType, type: string) => void;
  fileHandler: (
    e: ChangeEvent<HTMLInputElement>,
    setDetailPostData: Dispatch<React.SetStateAction<PostPostDataType>>,
    files: FileList | undefined | null,
  ) => void;
  setFileImage: Dispatch<React.SetStateAction<string | null>>;
  fileImage: string | null;
  id: string | undefined;
}

const PostWriteLayout: React.FC<PostWriteProps> = ({
  postData,
  submitHandler,
  fileHandler,
  fileImage,
  setFileImage,
  id,
}) => {
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
  const editorRef: any = useRef();
  const input = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const { theme } = useTheme();
  const isUpdate = id !== undefined;
  const isButtonBlock =
    !detailPostData.category.categoryName ||
    !detailPostData.title ||
    detailPostData.content.length < 10;
  const setEditorValue = () => {
    const editorContent = editorRef.current.getInstance().getMarkdown();
    setDetailPostData(() => {
      return { ...detailPostData, content: editorContent };
    });
  };
  const setCategory = (category: string) => {
    setDetailPostData(() => {
      return { ...detailPostData, category: { categoryName: category } };
    });
  };
  useLayoutEffect(() => {
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
  return (
    <PostLayoutWrapper>
      <PostCategoryMenu
        onClick={setCategory}
        category={detailPostData.category.categoryName}
      />
      <PostInformation>
        <PostThumbnailWrapper>
          <PostThumbnailInner onClick={() => input.current?.click()}>
            <ThumbnailText>
              {fileImage
                ? '???????????? ??????????????? ?????? ???????????????!'
                : '???????????? ??????????????????!'}
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
            onChange={(e) =>
              fileHandler(e, setDetailPostData, input.current?.files)
            }
          />
        </PostThumbnailWrapper>

        <PostContentWrapper>
          <PostTitle
            placeholder="????????? ???????????????."
            value={detailPostData.title}
            onChange={(e) => {
              setDetailPostData(() => {
                return { ...detailPostData, title: e.target.value };
              });
            }}
          />
          <PostHashtag
            placeholder={'#???????????? ,??? ???????????????'}
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
          text="?????????"
          onClick={() => {
            navigate(`/post/saves`);
          }}
        />
      </PostGDSCButtonWrapper>
      <ContentBox>
        {id ? (
          detailPostData.content !== '' && (
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
          )
        ) : (
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
      </ContentBox>
      <BottomPostButtonBox
        isUpdate={isUpdate}
        postCancel={() => submitHandler(detailPostData, 'backBlock')}
        postSubmit={() => {
          submitHandler(detailPostData, isUpdate ? 'update' : 'uploadPost');
        }}
        disable={isButtonBlock}
        draft={() => {
          submitHandler(detailPostData, 'draft');
        }}
      />
    </PostLayoutWrapper>
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
    <PostBottomButtonBox>
      <PostBottomButtonWrapper className={'cancel-button'}>
        <GDSCButton text="????????????" onClick={postCancel} />
      </PostBottomButtonWrapper>
      <PostBottomButtonWrapper>
        <GDSCButton text="????????????" onClick={draft} disable={disable} />
      </PostBottomButtonWrapper>
      <PostBottomButtonWrapper>
        <GDSCButton
          text={isUpdate ? '????????????' : '?????????'}
          onClick={() => {
            !disable && (isUpdate ? postSubmit() : postSubmit());
          }}
          color={'googleBlue'}
          disable={disable}
        />
      </PostBottomButtonWrapper>
    </PostBottomButtonBox>
  );
};

export default PostWriteLayout;
