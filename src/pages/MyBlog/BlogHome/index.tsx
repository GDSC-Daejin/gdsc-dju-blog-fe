import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';

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

const BlogHome = () => {
  const { user_name } = useParams<'user_name'>();

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
  const navigate = useNavigate();
  const location = useLocation();
  const [type, setType] = useState('all');
  const [searchParams] = useSearchParams();
  const detail = searchParams.get('type');
  useEffect(() => {
    setType(detail as string);
    if (detail === null) {
      navigate(`/${user_name}?type=all`);
    }
  }, [detail]);

  return (
    <>
      <NavigationBlock />
      <LayoutContainer>
        <ContainerInner>
          <ProfileWrapper>
            <ProfileImageWrapper>
              <ProfileImage image={MockProfile} position={'frontend'} />
            </ProfileImageWrapper>
            <ProfileDetailWrapper>
              <Role>Core Member</Role>
              <BlogNameWrapper>
                <BlogName>Jason</BlogName>
                <BlogNamePosition color={positionColor('frontend')}>
                  &apos;s Blog
                </BlogNamePosition>
                <SettingIconWrapper>
                  <Setting />
                </SettingIconWrapper>
              </BlogNameWrapper>
              <IntroduceText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, ipsum eget sagittis consectetur, nisl urna
                aliquet nunc.
              </IntroduceText>
              <HashTageSection>
                {hashTage.map((tag, id) => (
                  <HashTageWrapper key={id}>
                    <HashTageDark text={tag} />
                  </HashTageWrapper>
                ))}
              </HashTageSection>
            </ProfileDetailWrapper>
          </ProfileWrapper>
          <TopMenuWrapper>
            <CategoryMenu
              type={type}
              onClick={(url: string) => navigate(`/${user_name}?type=${url}`)}
            />
            <ButtonWrapper>
              <GDSCButton text={'스크랩'} />
              <GDSCButton text={'글쓰기'} />
            </ButtonWrapper>
          </TopMenuWrapper>
          <PostSectionWrapper>
            {postListData.map((data, id) => (
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
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default BlogHome;
