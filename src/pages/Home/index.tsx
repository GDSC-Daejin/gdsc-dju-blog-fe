import React from 'react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { useTheme } from '../../hooks/useTheme';

const Home = () => {
  return (
    <>
      <LayoutContainer>
        <ContainerInner>홈임!!!</ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default Home;
