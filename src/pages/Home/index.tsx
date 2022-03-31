import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { LayoutContainer } from '../../styles/layouts';
import BlogCard from '../../components/common/BlogCard';
import { CardSection, BlogCardWrapper } from './styled';

const Home = () => {
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
        <CardSection>
          <BlogCard />
        </CardSection>
        <button onClick={handleClick}>로그인</button>;
      </LayoutContainer>
    </>
  );
};

export default Home;
