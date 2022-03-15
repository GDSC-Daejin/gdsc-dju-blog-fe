import React from 'react';
import {
  GdscSideLogoWrapper,
  GdscSideUnivWrapper,
  GdscSideBlogLogoWrapper,
  GoogleLoaderWrapper,
  SideBarText,
  GoogleButtonWrapper,
} from '../SideBar/styled';
import GdscLogo from '../../../../Images/GdscLogo';
import DaejinUnivLogo from '../../../../Images/DaejinUnivLogo';
import GdscBlogLogo from '../../../../Images/GdscBlogLogo';
import GoogleLoader from '../../GoogleLoader';
import { GDSCButtonL } from '../../Button';
import { SideBarData } from '../../SideBarData';

const opacityVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

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
        <GDSCButtonL text="Google로 계속" />
        <GoogleLoaderWrapper>
          <GoogleLoader background={false} />
        </GoogleLoaderWrapper>
      </GoogleButtonWrapper>
      {SideBarData.map(({ name, to, id }) => (
        <SideBarText
          key={id}
          href={to}
          whileHover={{ scale: 1.1 }}
          variants={opacityVariants}
          transition={{ delay: 0.5, duration: 0.1 }}
        >
          {name}
        </SideBarText>
      ))}
    </>
  );
};

export default SideBarLogout;
