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
const BlogHome = () => {
  const { user_name } = useParams<'user_name'>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const typeParams = searchParams.get('type');
  const type = typeParams ? typeParams : 'all';
  const pageParams = searchParams.get('page');
  const page = pageParams ? parseInt(pageParams) : 1;
  const { userData } = useGetUserData();
  const pagination = () => {
    return postListData.slice(page === 0 ? 0 : page * 10 + 1, (page + 1) * 10);
  };
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
  const hashTageSpreader = (hashTages: string) => {
    return hashTages.split(',');
  };
  useEffect(() => {
    if (page || type) {
      navigate(`/${user_name}?type=all&page=0`);
    }
    API.postForceLogin();
  }, []);

  return (
    <>
      <NavigationBlock />
      {userData && (
        <LayoutContainer>
          <ContainerInner>
            <ProfileWrapper>
              <ProfileImageWrapper>
                <ProfileImage
                  image={userData.profileImageUrl}
                  position={userData.memberInfo.positionType.toLowerCase()}
                />
              </ProfileImageWrapper>
              <ProfileDetailWrapper>
                <Role>{userData.role}</Role>
                <BlogNameWrapper>
                  <BlogName>{userData.memberInfo.nickName}</BlogName>
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
                <IntroduceText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque euismod, ipsum eget sagittis consectetur, nisl
                  urna aliquet nunc.
                </IntroduceText>
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
                  onClick={() => navigate(`${user_name}/likes`)}
                />
                <GDSCButton text={'글쓰기'} />
              </ButtonWrapper>
            </TopMenuWrapper>

            <PostSectionWrapper>
              {pagination().map((data, id) => (
                <PostCardWrapper key={id}>
                  <PostCard
                    title={data.post.title}
                    date={data.post.uploadDate}
                    content={data.post.content}
                    hashTage={data.post.postHashTags}
                  />
                </PostCardWrapper>
              ))}
            </PostSectionWrapper>
            <PageBarSection>
              <PageBar page={page} onClick={pageHandler} />
            </PageBarSection>
          </ContainerInner>
        </LayoutContainer>
      )}
    </>
  );
};

export default BlogHome;
