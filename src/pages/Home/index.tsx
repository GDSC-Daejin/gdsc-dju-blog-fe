import React from 'react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { useTheme } from '../../hooks/useTheme';
import BlogCard from '../../components/common/BlogCard';

const Home = () => {
  return (
    <>
      <LayoutContainer>
        <ContainerInner>
          <BlogCard />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default Home;
