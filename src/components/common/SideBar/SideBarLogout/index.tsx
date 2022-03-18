import React from 'react';
import {
  GdscSideLogoWrapper,
  GdscSideUnivWrapper,
  GdscSideBlogLogoWrapper,
  GoogleLoaderWrapper,
  GoogleButtonWrapper,
} from '../styled';
import GdscLogo from '../../../../Images/GdscLogo';
import DaejinUnivLogo from '../../../../Images/DaejinUnivLogo';
import GdscBlogLogo from '../../../../Images/GdscBlogLogo';
import GoogleLoader from '../../GoogleLoader';
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
        <GDSCButton text={'\u00A0\u00A0\u00A0\u00A0 Google로 계속'} />
        <GoogleLoaderWrapper>
          <GoogleLoader background={false} />
        </GoogleLoaderWrapper>
      </GoogleButtonWrapper>
    </>
  );
};

export default SideBarLogout;
