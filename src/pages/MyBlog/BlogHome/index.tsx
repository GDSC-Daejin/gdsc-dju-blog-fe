import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

import {
  ContainerInner,
  LayoutContainer,
  NavigationBlock,
} from '../../../styles/layouts';
import {
  BlogName,
  BlogNamePosition,
  BlogNameWrapper,
  ButtonWrapper,
  HashTageSection,
  HashTageWrapper,
  IntroduceText,
  PageBarSection,
  PostCardWrapper,
  PostSectionWrapper,
  ProfileDetailWrapper,
  ProfileImageWrapper,
  ProfileWrapper,
  Role,
  SettingIconWrapper,
  TopMenuWrapper,
} from './styled';
import MockProfile from '../../../Images/MockProfile.png';
import ProfileImage from '../../../components/common/ProfileImage';
import { positionColor } from '../../../store/positionColor';
import { HashTageDark } from '../../../components/common/HashTage';
import CategoryMenu from '../../../components/common/CategoryMenu';
import { GDSCButton } from '../../../components/common/Button';
import PostCard from '../../../components/common/PostCard';
import { useSearchParams } from 'react-router-dom';
import Setting from '../../../Images/Setting';
import PageBar from '../../../components/common/PageBar';
import { useGetUserData } from '../../../api/hooks/useGetUserData';
import { useGetUserPostListData } from '../../../api/hooks/useGetUserPostListData';
import { hashTageSpreader } from '../../../Utils/hashTageSpreader';

const BlogHome = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const typeParams = searchParams.get('type');
  const type = typeParams ? typeParams : 'all';

  const pageParams = searchParams.get('page');
  const page = pageParams ? parseInt(pageParams) : 1;

  const { userData } = useGetUserData();
  const userInfoData = userData?.memberInfo;
  const { userPostData } = useGetUserPostListData(type, page);

  const navigate = useNavigate();

  const pageHandler = (page: number, limit?: number) => {
    if (page < 0) {
      return;
    }
    if (page === limit) {
      return;
    } else {
      navigate(`/${userInfoData?.nickname}?type=${type}&page=${page}`);
    }
  };

  useEffect(() => {
    if (page || type) {
      setSearchParams({
        type: 'all',
        page: '0',
      });
    }
  }, []);

  return (
    <>
      <NavigationBlock />
      <LayoutContainer>
        <ContainerInner>
          {userInfoData && (
            <>
              <ProfileWrapper>
                <ProfileImageWrapper>
                  <ProfileImage
                    image={MockProfile}
                    position={userInfoData.positionType}
                  />
                </ProfileImageWrapper>
                <ProfileDetailWrapper>
                  <Role>{userData.role}</Role>
                  <BlogNameWrapper>
                    <BlogName>{userInfoData.nickname}</BlogName>
                    <BlogNamePosition
                      color={positionColor(userInfoData.positionType)}
                    >
                      &apos;s Blog
                    </BlogNamePosition>
                    <SettingIconWrapper
                      onClick={() => navigate(`/${userInfoData.nickname}/edit`)}
                    >
                      <Setting />
                    </SettingIconWrapper>
                  </BlogNameWrapper>
                  <IntroduceText>{userInfoData.introduce}</IntroduceText>
                  <HashTageSection>
                    {hashTageSpreader(userInfoData.hashTag).map((tag, id) => (
                      <HashTageWrapper key={id}>
                        <HashTageDark text={tag} />
                      </HashTageWrapper>
                    ))}
                  </HashTageSection>
                </ProfileDetailWrapper>
              </ProfileWrapper>

              <TopMenuWrapper>
                <CategoryMenu
                  type={type as string}
                  onClick={(url: string) =>
                    navigate(
                      `/${userInfoData.nickname}?type=${url}&page=${page}`,
                    )
                  }
                />
                <ButtonWrapper>
                  <GDSCButton
                    text={'스크랩'}
                    onClick={() => navigate(`/${userInfoData.nickname}/likes`)}
                  />
                  <GDSCButton
                    text={'글쓰기'}
                    onClick={() => navigate('/post/write')}
                  />
                </ButtonWrapper>
              </TopMenuWrapper>
            </>
          )}
          {userPostData && (
            <PostSectionWrapper>
              {!userPostData.empty ? (
                userPostData.content.map((data) => (
                  <PostCardWrapper
                    key={data.postId}
                    onClick={() =>
                      navigate(`/${data.memberInfo.nickname}/${data.postId}`)
                    }
                  >
                    <PostCard {...data} />
                  </PostCardWrapper>
                ))
              ) : (
                <div>작성된 글이 없습니다.</div>
              )}
            </PostSectionWrapper>
          )}
          <PageBarSection>
            {userPostData && userInfoData && (
              <PageBar
                page={page}
                totalPage={userPostData.totalPages}
                nickname={userInfoData.nickname}
                type={type}
              />
            )}
          </PageBarSection>
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default BlogHome;
