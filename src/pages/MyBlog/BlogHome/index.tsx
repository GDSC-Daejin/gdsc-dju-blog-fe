import React from 'react';
import { useParams } from 'react-router';
import {
  ContainerInner,
  LayoutContainer,
  NavigationBlock,
} from '../../../styles/layouts';
import { ProfileWrapper } from './styled';
import MockProfile from '../../../Images/MockProfile.png';
import ProfileImage from '../../../components/common/ProfileImage';

const BlogHome = () => {
  const { user_name } = useParams();
  console.log(typeof MockProfile);
  return (
    <>
      <NavigationBlock />
      <LayoutContainer>
        <ContainerInner>
          <ProfileWrapper>
            <ProfileImage image={MockProfile} position={'frontend'} />
          </ProfileWrapper>
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default BlogHome;
