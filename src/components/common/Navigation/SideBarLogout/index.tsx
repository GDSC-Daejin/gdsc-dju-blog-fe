import React from 'react';
import {
  GdscSideLogoWrapper,
  GdscSideUnivWrapper,
  GdscSideBlogLogoWrapper,
  GoogleLoaderWrapper,
} from '../SideBar/styled';
import GdscLogo from '../../../../Images/GdscLogo';
import DaejinUnivLogo from '../../../../Images/DaejinUnivLogo';
import GdscBlogLogo from '../../../../Images/GdscBlogLogo';
import GoogleLoader from '../../GoogleLoader';

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
      <GoogleLoaderWrapper>
        <GoogleLoader background={true} />
      </GoogleLoaderWrapper>
    </>
  );
};

export default SideBarLogout;
