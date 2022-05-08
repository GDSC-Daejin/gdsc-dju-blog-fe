import React from 'react';
import { LogoWrapper } from '../DeskNavigation/styled';
import {
  MobileNavigationWrapper,
  GdscLogoWrapper,
  MobileVectorWrapper,
  MobileNavigationDesign,
} from './styled';
import GdscLogo from '../../../../assets/GdscLogo';
import Vector from '../../../../assets/Vector';
import { useNavigate } from 'react-router';

const MobileMenu = () => {
  const navigate = useNavigate();

  return (
    <MobileNavigationDesign>
      <MobileNavigationWrapper>
        <LogoWrapper onClick={() => navigate('/*')}>
          <GdscLogoWrapper>
            <GdscLogo />
          </GdscLogoWrapper>
        </LogoWrapper>
        <MobileVectorWrapper>
          <Vector />
        </MobileVectorWrapper>
      </MobileNavigationWrapper>
    </MobileNavigationDesign>
  );
};

export default MobileMenu;
