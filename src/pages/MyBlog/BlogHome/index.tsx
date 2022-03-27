import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

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
import { postListData } from '../../../api/Mocks/postListData';
import { useSearchParams } from 'react-router-dom';
import Setting from '../../../Images/Setting';
import PageBar from '../../../components/common/PageBar';
import API from '../../../api/index';
import { useGetUserData } from '../../../api/hooks/useGetUserData';
import { useGetUserPostListData } from '../../../api/hooks/useGetUserPostListData';

const hashTage = [
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'SWR',
  'Recoil',
  'GraphQL',
  'Apollo',
  'Next.js',
  'Gatsby',
  'React Hooks',
  'Redux',
];

export const hashTageSpreader = (hashTages: string) => {
  return hashTages.split(',');
};
const BlogHome = () => {
  const { user_name } = useParams<'user_name'>();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const typeParams = searchParams.get('type');
  const type = typeParams ? typeParams : 'all';
  const pageParams = searchParams.get('page');
  const page = pageParams ? parseInt(pageParams) : 1;
  const { userData } = useGetUserData();
  const { userPostData } = useGetUserPostListData(type, page);
  console.log(userPostData);

  const pageHandler = (page: number, limit?: number) => {
    if (page < 0) {
      return;
    }
    if (page === limit) {
      return;
    } else {
      navigate(`/${user_name}?type=${type}&page=${page}`);
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
          {userData && (
            <ProfileWrapper>
              <ProfileImageWrapper>
                <ProfileImage
                  image={MockProfile}
                  position={userData.memberInfo.positionType.toLowerCase()}
                />
              </ProfileImageWrapper>
              <ProfileDetailWrapper>
                <Role>{userData.role}</Role>
                <BlogNameWrapper>
                  <BlogName>{userData.memberInfo.nickname}</BlogName>
                  <BlogNamePosition
                    color={positionColor(userData.memberInfo.positionType)}
                  >
                    &apos;s Blog
                  </BlogNamePosition>
                  <SettingIconWrapper
                    onClick={() => navigate(`/${user_name}/edit`)}
                  >
                    <Setting />
                  </SettingIconWrapper>
                </BlogNameWrapper>
                <IntroduceText>{userData.memberInfo.introduce}</IntroduceText>
                <HashTageSection>
                  {hashTageSpreader(userData.memberInfo.hashTag).map(
                    (tag, id) => (
                      <HashTageWrapper key={id}>
                        <HashTageDark text={tag} />
                      </HashTageWrapper>
                    ),
                  )}
                </HashTageSection>
              </ProfileDetailWrapper>
            </ProfileWrapper>
          )}
          <TopMenuWrapper>
            <CategoryMenu
              type={type as string}
              onClick={(url: string) =>
                navigate(`/${user_name}?type=${url}&page=${page}`)
              }
            />
            <ButtonWrapper>
              <GDSCButton
                text={'스크랩'}
                onClick={() => navigate(`/${user_name}/likes`)}
              />
              <GDSCButton text={'글쓰기'} />
            </ButtonWrapper>
          </TopMenuWrapper>
          {userPostData && (
            <>
              <PostSectionWrapper>
                {!userPostData.empty &&
                  userPostData.content.map((data) => (
                    <PostCardWrapper key={data.postId}>
                      <PostCard {...data} />
                    </PostCardWrapper>
                  ))}
              </PostSectionWrapper>
              <PageBarSection>
                <PageBar
                  page={page}
                  totalPage={userPostData.totalPages}
                  onClick={pageHandler}
                />
              </PageBarSection>
            </>
          )}
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default BlogHome;
