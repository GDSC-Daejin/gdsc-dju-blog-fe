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
  HashTageSection,
  IntroduceText,
  ProfileDetailWrapper,
  ProfileImageWrapper,
  ProfileWrapper,
  Role,
} from './styled';
import MockProfile from '../../../Images/MockProfile.png';
import ProfileImage from '../../../components/common/ProfileImage';
import { positionColor } from '../../../store/positionColor';
import { HashTageDark } from '../../../components/common/HashTage';
import CategoryMenu from '../../../components/common/CategoryMenu';

const BlogHome = () => {
  const { user_name } = useParams();
  const hashTage = ['React', 'TypeScript', 'JavaScript', 'Node.js'];

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
                  <HashTageDark text={tag} key={id} />
                ))}
              </HashTageSection>
            </ProfileDetailWrapper>
          </ProfileWrapper>
          <CategoryMenu />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default BlogHome;
