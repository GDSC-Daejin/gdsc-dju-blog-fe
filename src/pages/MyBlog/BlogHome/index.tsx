import React from 'react';
import { useParams } from 'react-router';
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
  ProfileDetailWrapper,
  ProfileImageWrapper,
  ProfileWrapper,
  Role,
  TopMenuWrapper,
} from './styled';
import MockProfile from '../../../Images/MockProfile.png';
import ProfileImage from '../../../components/common/ProfileImage';
import { positionColor } from '../../../store/positionColor';
import { HashTageDark } from '../../../components/common/HashTage';
import CategoryMenu from '../../../components/common/CategoryMenu';
import { GDSCButton, GDSCButtonL } from '../../../components/common/Button';

const BlogHome = () => {
  const { user_name } = useParams();
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
            <CategoryMenu />
            <ButtonWrapper>
              <GDSCButton text={'스크랩'} />
              <GDSCButton text={'글쓰기'} />
            </ButtonWrapper>
          </TopMenuWrapper>
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default BlogHome;
