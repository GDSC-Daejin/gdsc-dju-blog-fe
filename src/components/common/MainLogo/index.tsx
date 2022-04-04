import React from 'react';
import {
  GdscLogoWrapper,
  GdscBlogLogoWrapper,
  DaejinUnivLogoWrapper,
  SubLogoWrapper,
} from './styled';
import GdscLogo from '../../../Assets/GdscLogo';
import DaejinUnivLogo from '../../../Assets/DaejinUnivLogo';
import GdscBlogLogo from '../../../Assets/GdscBlogLogo';

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
