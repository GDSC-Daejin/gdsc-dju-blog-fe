import React from 'react';
import {
  NavDesign,
  NavWrapper,
  NavInner,
  MenuBars,
} from '../DeskNavigation/styled';
import {
  MenuToggleIconWrapper,
  GdscLogoWrapper,
  MobileIconWrapper,
} from './styled';
import MenuToggleIcon from '../../MenuToggleIcon';
import styled from 'styled-components';
import MagnifyingGlassIcon from '../../../../Images/MagnifyingGlassIcon';
import MobileGdscLogo from '../../../../Images/MobileGdscLogo';

const MobileNavigation = () => {
  return (
    <NavDesign>
      <NavWrapper>
        <NavInner>
          <MenuToggleIconWrapper>
            <MenuToggleIcon />
          </MenuToggleIconWrapper>
          <MenuBars href="/">
            <GdscLogoWrapper>
              <MobileGdscLogo />
            </GdscLogoWrapper>
          </MenuBars>
          <MobileIconWrapper>
            <MagnifyingGlassIcon />
          </MobileIconWrapper>
        </NavInner>
      </NavWrapper>
    </NavDesign>
  );
};
export default MobileNavigation;
