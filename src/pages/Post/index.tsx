import React, { useEffect } from 'react';
import { Giscus } from '@giscus/react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetDetailPost } from '../../api/hooks/useGetDetailPost';
import './post.css';
import API from '../../api';
import {
  Author,
  AuthorImage,
  AuthorWrapper,
  Category,
  CategoryWrapper,
  ContentWrapper,
  Date,
  GiscusWrapper,
  HashTageSection,
  PositionCircle,
  PostAuthorWrapper,
  PostHead,
  PostTitle,
  PostIconWrapper,
  BookmarkWrapper,
  PostTrashIconWrapper,
  PostEditIconWrapper,
  PostTitleWrapper,
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
  console.log(postData);
  console.log(location);
  const { userData } = useGetUserData();
  const userInfoData = userData?.memberInfo;
  console.log(userInfoData);
  const isUserEqual = location.pathname.includes(`${userInfoData?.nickname}`);

  useEffect(() => {
    document.querySelectorAll('.toastui-editor-contents pre').forEach((el) => {
      hljs.highlightElement(el as HTMLElement);
    });
  }, [postData]);

  const handleRemove = async () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      API.deletePostData(postId);
      navigate(-1);
      console.log(postId);
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
                  onClick={
                    isUserEqual
                      ? () => navigate(`/post/write/${postId}`)
                      : undefined
                  }
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
