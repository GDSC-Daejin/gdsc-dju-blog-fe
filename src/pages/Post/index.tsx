import { Giscus } from '@giscus/react';
import { Viewer } from '@toast-ui/react-editor';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useRecoilState } from 'recoil';
import API from '../../api';
import { useGetDetailPost } from '../../api/hooks/useGetDetailPost';
import { useGetUserData } from '../../api/hooks/useGetUserData';
import Bookmark from '../../assets/Bookmark';
import PostEditIcon from '../../assets/PostEditIcon';
import PostTrashIcon from '../../assets/PostTrashIcon';
import { HashTageDark } from '../../components/common/HashTage';
import { alertState } from '../../store/alert';
import { modalState } from '../../store/modal';
import { positionColor } from '../../store/positionColor';

import { LayoutContainer, PostContainerInner } from '../../styles/layouts';
import { AuthorProps, DetailPostDataType } from '../../types/postData';
import { IUserInfoDataType } from '../../types/userInfoData';
import { dateFilter } from '../../Utils/dateFilter';
import { hashTageSpreader } from '../../Utils/hashTageSpreader';
import {
  Author,
  AuthorImage,
  AuthorWrapper,
  BookmarkWrapper,
  Category,
  CategoryWrapper,
  ContentBox,
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
  const theme = localStorage.getItem('theme') || 'light';
  return (
    <LayoutContainer>
      <PostContainerInner>
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
            theme={theme}
            lang="ko"
          />
        </GiscusWrapper>
      </PostContainerInner>
    </LayoutContainer>
  );
};

const PostContent: React.FC<{ postId: string }> = ({ postId }) => {
  const { postData } = useGetDetailPost(postId);
  const { userData } = useGetUserData();
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
          <ContentBox>
            <Viewer initialValue={postData.content} />
          </ContentBox>
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
