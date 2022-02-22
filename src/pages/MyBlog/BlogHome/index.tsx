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
  IntroduceText,
  ProfileDetailWrapper,
  ProfileImageWrapper,
  ProfileWrapper,
  Role,
} from './styled';
import MockProfile from '../../../Images/MockProfile.png';
import ProfileImage from '../../../components/common/ProfileImage';
import { positionColor } from '../../../store/positionColor';

const BlogHome = () => {
  const { user_name } = useParams();
  console.log(typeof MockProfile);
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
                  's Blog
                </BlogNamePosition>
              </BlogNameWrapper>
              <IntroduceText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, ipsum eget sagittis consectetur, nisl urna
                aliquet nunc.
              </IntroduceText>
            </ProfileDetailWrapper>
          </ProfileWrapper>
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default BlogHome;
