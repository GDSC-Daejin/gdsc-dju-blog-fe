import React from 'react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { useTheme } from '../../hooks/useTheme';
import BlogCard from '../../components/common/BlogCard';
import { CardSection } from './styled';
import { motion } from 'framer-motion';

/* 

레이아웃 수정 우선
  1. 전체 content width 수정
  2. 
버튼에 따라 이동하기 구현
스크롤에 따라 버튼 바꾸는 거 구현

*/

function index() {
  return (
    <LayoutContainer>
      <CardSection>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </CardSection>
    </LayoutContainer>
  );
}

export default index;
