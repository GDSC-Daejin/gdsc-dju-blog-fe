import React from 'react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import BlogCard from '../../components/common/BlogCard';
import { BlogCardWrapper, CardSection } from './styled';
import { useRecoilState } from 'recoil';
import { themeState } from '../../store/theme';

const Home = () => {
  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const data = {
    id: 'gudcks0305',
    password: '$10$8lDyClwH.ET3BA44inQLKuRNISg4paTPwgD2V5pw/RMmtTGJvhPvy',
  };
  const handleClick = () => {
    fetch('https://gdsc-dju.com/test/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((response) => console.log('Success:', JSON.stringify(response)));
  };

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
          <button onClick={handleClick}>로그인</button>
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default Home;
