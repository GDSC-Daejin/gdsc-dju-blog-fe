import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { LayoutContainer } from '../../styles/layouts';
import BlogCard from '../../components/common/BlogCard';
import { CardSection, BlogCardWrapper } from './styled';

const Home = () => {
  return (
    <>
      <LayoutContainer>
        <CardSection>
          <BlogCard />
        </CardSection>
      </LayoutContainer>
    </>
  );
};

export default Home;
