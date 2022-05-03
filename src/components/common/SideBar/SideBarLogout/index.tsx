import React from 'react';
import {
  GdscSideLogoWrapper,
  GdscSideUnivWrapper,
  GdscSideBlogLogoWrapper,
  GoogleButtonWrapper,
  GoogleLogoWrapper,
} from '../styled';
import GdscLogo from '../../../../assets/GdscLogo';
import DaejinUnivLogo from '../../../../assets/DaejinUnivLogo';
import GdscBlogLogo from '../../../../assets/GdscBlogLogo';
import GoogleLogo from '../../../../assets/GoogleLogo';
import { GDSCButton } from '../../Button';

interface IProps {
  loginURL: string;
}
const SideBarLogout: React.FC<IProps> = ({ loginURL }) => {
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
        <GDSCButton
          text={' Google로 계속'}
          onClick={() => {
            window.open(loginURL);
          }}
        />
        <GoogleLogoWrapper>
          <GoogleLogo />
        </GoogleLogoWrapper>
      </GoogleButtonWrapper>
    </>
  );
};

export default SideBarLogout;
