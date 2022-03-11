import React from 'react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import BlogCard from '../../components/common/BlogCard';
import { BlogCardWrapper, CardSection } from './styled';
import { useRecoilState } from 'recoil';
import { themeState } from '../../store/theme';

const Home = () => {
  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <LayoutContainer>
        <ContainerInner>
          <CardSection>
            {number.map((item) => (
              <BlogCardWrapper key={item}>
                <BlogCard />
              </BlogCardWrapper>
            ))}
          </CardSection>
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default Home;
