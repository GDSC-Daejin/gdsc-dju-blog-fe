import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
import { Viewer } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import React from 'react';
import { useGetDetailPost } from '../../../api/hooks/useGetDetailPost';
import { useGetMyData } from '../../../api/hooks/useGetMyData';
import { positionColor } from '../../../store/positionColor';
import AuthorBox from '../AuthorBox';
import PostIconBox from '../PostIconBox';
import {
  Category,
  CategoryWrapper,
  ContentBox,
  PositionCircle,
  PostAuthorWrapper,
  PostHead,
  PostTitle,
  PostTitleWrapper,
} from '../styled';

const PostContent: React.FC<{ postId: string }> = ({ postId }) => {
  const { postData } = useGetDetailPost(postId);
  const { userData } = useGetMyData();
  const userInfoData = userData?.memberInfo;
  return (
    <>
      {postData && (
        <>
          <PostHead>
            <CategoryWrapper>
              <PositionCircle
                color={positionColor(postData.category.categoryName)}
              />
              <Category>{postData.category.categoryName}</Category>
            </CategoryWrapper>
            <PostTitleWrapper>
              <PostTitle>{postData.title}</PostTitle>
              {userInfoData && postData && (
                <PostIconBox
                  postData={postData}
                  userInfoData={userInfoData}
                  postId={postId}
                />
              )}
            </PostTitleWrapper>
            <PostAuthorWrapper>
              <AuthorBox {...postData.memberInfo} {...postData} />
            </PostAuthorWrapper>
          </PostHead>
          <ContentBox>
            <Viewer
              initialValue={postData.content}
              plugins={[
                [codeSyntaxHighlight, { highlighter: Prism }],
                tableMergedCell,
              ]}
            />
          </ContentBox>
        </>
      )}
    </>
  );
};

export default PostContent;
