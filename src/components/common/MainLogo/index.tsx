import React from 'react';
import {
  GdscLogoWrapper,
  GdscBlogLogoWrapper,
  DaejinUnivLogoWrapper,
  SubLogoWrapper,
} from './styled';
import GdscLogo from '../../../assets/GdscLogo';
import DaejinUnivLogo from '../../../assets/DaejinUnivLogo';
import GdscBlogLogo from '../../../assets/GdscBlogLogo';

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
