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
import { AuthorProps, DetailPostDataType } from '../../types/postData';
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
import { useRecoilState } from 'recoil';
import { modalState } from '../../store/modal';
import { IUserInfoDataType } from '../../types/userInfoData';
import { useCookies } from 'react-cookie';
import { alertState } from '../../store/alert';
interface PostIconBoxProps {
  userInfoData: IUserInfoDataType;
  postData: DetailPostDataType;
  postId: string;
}
interface AuthorBoxProps extends AuthorProps {
  uploadDate: string;
  postHashTags: string;
}
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
  const [token, setToken] = useCookies(['token']);
  const { postData } = useGetDetailPost(postId);
  const location = useLocation();
  const { userData } = useGetUserData(token.token);
  const userInfoData = userData?.memberInfo;

  document.querySelectorAll('pre').forEach((el) => {
    hljs.highlightElement(el as HTMLPreElement);
  });

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
                <PostIconBlock
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

          <Viewer initialValue={postData.content} />
        </>
      )}
    </>
  );
};
const PostIconBlock: React.FC<PostIconBoxProps> = ({
  postData,
  userInfoData,
  postId,
}) => {
  const navigate = useNavigate();

  const [modal, setModal] = useRecoilState(modalState);
  const [alert, setAlert] = useRecoilState(alertState);
  const deleteHandler = async () => {
    setModal({ ...modal, isOpen: false });
    try {
      await API.deletePostData(postId);
      await setAlert({
        ...alert,
        alertStatus: 'success',
        alertHandle: true,
        alertMessage: '글이 삭제되었어요.',
      });
      await navigate(-1);
    } catch (e) {
      setAlert({
        ...alert,
        alertStatus: 'error',
        alertHandle: true,
        alertMessage: '글 삭제에 실패했어요.',
      });
    }
  };
  const handleRemove = () => {
    setModal({
      ...modal,
      isOpen: true,
      type: 'deleteCheck',
      onClick: deleteHandler,
    });
  };
  const isUserEqual = userInfoData.nickname == postData.memberInfo.nickname;
  return (
    <PostIconWrapper>
      <BookmarkWrapper>
        <Bookmark marked={!isUserEqual} height={'25'} />
      </BookmarkWrapper>
      {isUserEqual && (
        <>
          <PostEditIconWrapper
            onClick={() => {
              navigate(`/post/edit/${postId}`);
            }}
          >
            <PostEditIcon marked={isUserEqual} height={'25'} />
          </PostEditIconWrapper>
          <PostTrashIconWrapper
            onClick={isUserEqual ? handleRemove : undefined}
          >
            <PostTrashIcon marked={isUserEqual} height={'25'} />
          </PostTrashIconWrapper>
        </>
      )}
    </PostIconWrapper>
  );
};

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
