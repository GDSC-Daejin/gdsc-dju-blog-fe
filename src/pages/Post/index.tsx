import React from 'react';
import { Giscus } from '@giscus/react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetDetailPost } from '../../api/hooks/useGetDetailPost';
import API from '../../api';
import {
  Author,
  AuthorImage,
  AuthorWrapper,
  BookmarkWrapper,
  Category,
  CategoryWrapper,
  ContentWrapper,
  Date,
  GiscusWrapper,
  HashTageSection,
  PositionCircle,
  PostAuthorWrapper,
  PostEditIconWrapper,
  PostHead,
  PostIconWrapper,
  PostTitle,
  PostTitleWrapper,
  PostTrashIconWrapper,
} from './styled';
import { AuthorProps } from '../../types/postData';
import { dateFilter } from '../../Utils/dateFilter';
import { hashTageSpreader } from '../../Utils/hashTageSpreader';
import { HashTageDark } from '../../components/common/HashTage';
import { positionColor } from '../../store/positionColor';
import hljs from 'highlight.js';
import { Viewer } from '@toast-ui/react-editor';
import PostTrashIcon from '../../assets/PostTrashIcon';
import PostEditIcon from '../../assets/PostEditIcon';
import Bookmark from '../../assets/Bookmark';
import { useLocation } from 'react-router';
import { useGetUserData } from '../../api/hooks/useGetUserData';
import './post.css';

const Post = () => {
  const { postId } = useParams<'postId'>();

  return (
    <LayoutContainer>
      <ContainerInner>
        <ContentWrapper>
          {postId && <PostContent postId={postId} />}
        </ContentWrapper>
        <GiscusWrapper>
          <Giscus
            repo="GDSC-Daejin/gdsc-dju-blog-fe"
            repoId="R_kgDOGwlX0Q"
            category="Announcements"
            categoryId="DIC_kwDOGwlX0c4CBQA5"
            mapping="pathname"
            theme={'light'}
            lang="ko"
          />
        </GiscusWrapper>
      </ContainerInner>
    </LayoutContainer>
  );
};

const PostContent: React.FC<{ postId: string }> = ({ postId }) => {
  const { postData } = useGetDetailPost(postId);
  const navigate = useNavigate();
  const location = useLocation();
  const { userData } = useGetUserData();
  const userInfoData = userData?.memberInfo;
  const isUserEqual = location.pathname.includes(`${userInfoData?.nickname}`);

  document.querySelectorAll('pre').forEach((el) => {
    hljs.highlightElement(el as HTMLPreElement);
  });

  const handleRemove = async () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      API.deletePostData(postId);
      navigate(-1);
    }
  };
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
              <PostIconWrapper>
                <BookmarkWrapper>
                  <Bookmark marked={!isUserEqual} height={'25'} />
                </BookmarkWrapper>
                <PostEditIconWrapper
                  onClick={() => {
                    navigate(`/post/write/${postId}`);
                  }}
                >
                  <PostEditIcon marked={isUserEqual} height={'25'} />
                </PostEditIconWrapper>
                <PostTrashIconWrapper
                  onClick={isUserEqual ? handleRemove : undefined}
                >
                  <PostTrashIcon marked={isUserEqual} height={'25'} />
                </PostTrashIconWrapper>
              </PostIconWrapper>
            </PostTitleWrapper>
            <PostAuthorWrapper>
              <AuthorBox {...postData.memberInfo} {...postData} />
            </PostAuthorWrapper>
          </PostHead>
          <Viewer initialValue={postData.content} />
        </>
      )}
    </>
  );
};

interface AuthorBoxProps extends AuthorProps {
  uploadDate: string;
  postHashTags: string;
}
const AuthorBox: React.FC<AuthorBoxProps> = ({
  member,
  nickname,
  uploadDate,
  postHashTags,
}) => {
  return (
    <>
      <AuthorWrapper>
        <AuthorImage src={member.profileImageUrl} />
        <Author color={'grey500'} marginRight={2}>
          by
        </Author>
        <Author marginRight={10}>{nickname}</Author>
        <Date>{dateFilter(uploadDate)}</Date>
      </AuthorWrapper>
      <HashTageSection>
        {hashTageSpreader(postHashTags).map((tage) => (
          <HashTageDark text={tage} key={tage} size={'L'} />
        ))}
      </HashTageSection>
    </>
  );
};

export default Post;
