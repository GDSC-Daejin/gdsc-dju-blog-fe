import React from 'react';
import axios from 'axios';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import BlogCard from '../../components/common/BlogCard';
import { BlogCardWrapper, CardSection } from './styled';
import { useRecoilState } from 'recoil';
import { themeState } from '../../store/theme';

const config = {
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
};
export const API_BASE_URL = 'https://gdsc-dju.com';

export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/OauthRedirectPage';

export const GOOGLE_AUTH_URL =
  API_BASE_URL +
  '/oauth2/authorization/google?redirect_uri=' +
  OAUTH2_REDIRECT_URI;

const Home = () => {
  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleClick = async () => {
    const res = await axios.get(
      'https://gdsc-dju.com/api/admin/v1/all/list',
      config,
    );
    console.log(res);
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
          <a href={GOOGLE_AUTH_URL}>로그인</a>
          <button onClick={handleClick}>로그인확인</button>
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default Home;
