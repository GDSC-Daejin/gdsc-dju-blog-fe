import React from 'react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { useTheme } from '../../hooks/useTheme';
import BlogCard from '../../components/common/BlogCard';
import { BlogCardWrapper, CardSection } from './styled';
import { useRecoilState } from 'recoil';
import { loaderState } from '../../store/loader';

const Home = () => {
  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [loader, setLoader] = useRecoilState(loaderState);
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
          <button
            onClick={() => {
              setLoader({ ...loader, loading: true, background: true });
            }}
          >
            asdasdssa
          </button>
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default Home;
