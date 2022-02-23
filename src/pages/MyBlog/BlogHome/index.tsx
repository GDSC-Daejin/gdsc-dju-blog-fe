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
import { GDSCButton, GDSCButtonL } from '../../../components/common/Button';

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
          <GDSCButton text={'내 블로그'} disable={true} />
          <GDSCButton text={'내 블로그'} color={'GDSC blue'} />
          <GDSCButtonL text={'글쓰기'} />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default BlogHome;
