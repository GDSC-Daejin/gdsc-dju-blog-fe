import React from 'react';
import {
  GdscLogoWrapper,
  GdscBlogLogoWrapper,
  DaejinUnivLogoWrapper,
  SubLogoWrapper,
} from './styled';
import GdscLogo from '../../../Images/GdscLogo';
import DaejinUnivLogo from '../../../Images/DaejinUnivLogo';
import GdscBlogLogo from '../../../Images/GdscBlogLogo';

const MainLogo = () => {
  return (
    <>
      <GdscLogoWrapper>
        <GdscLogo />
      </GdscLogoWrapper>
      <SubLogoWrapper>
        <DaejinUnivLogoWrapper>
          <DaejinUnivLogo />
        </DaejinUnivLogoWrapper>
        <GdscBlogLogoWrapper>
          <GdscBlogLogo />
        </GdscBlogLogoWrapper>
      </SubLogoWrapper>
    </>
  );
};

export default MainLogo;
