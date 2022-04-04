import React from 'react';
import {
  GdscSideLogoWrapper,
  GdscSideUnivWrapper,
  GdscSideBlogLogoWrapper,
  GoogleButtonWrapper,
  GoogleLogoWrapper,
} from '../styled';
import GdscLogo from '../../../../Images/GdscLogo';
import DaejinUnivLogo from '../../../../Images/DaejinUnivLogo';
import GdscBlogLogo from '../../../../Images/GdscBlogLogo';
import GoogleLogo from '../../../../Images/GoogleLogo';
import { GDSCButton } from '../../Button';

const SideBarLogout = () => {
  return (
    <>
      <GdscSideLogoWrapper>
        <GdscLogo />
      </GdscSideLogoWrapper>
      <GdscSideUnivWrapper>
        <DaejinUnivLogo />
      </GdscSideUnivWrapper>
      <GdscSideBlogLogoWrapper>
        <GdscBlogLogo />
      </GdscSideBlogLogoWrapper>
      <GoogleButtonWrapper>
        <GDSCButton text={' Google로 계속'} />
        <GoogleLogoWrapper>
          <GoogleLogo />
        </GoogleLogoWrapper>
      </GoogleButtonWrapper>
    </>
  );
};

export default SideBarLogout;
