import React, { useRef, useState } from 'react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { useTheme } from '../../hooks/useTheme';
import BlogCard from '../../components/common/BlogCard';
import { CardSection } from './styled';
import { useElementScroll, useTransform } from 'framer-motion';

/* 

레이아웃 수정 우선
  1. 전체 content width 수정
  2. 
버튼에 따라 이동하기 구현
스크롤에 따라 버튼 바꾸는 거 구현

*/

function index() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useElementScroll(ref);
  const [Xscroll, setXscroll] = useState(0);
  const scale = useTransform(scrollXProgress, [0, 1], [0, 3]);

  scrollXProgress.onChange(setXscroll);

  return (
    <LayoutContainer>
      <CardSection ref={ref}>
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
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <h1>{scale.get()}</h1>
    </LayoutContainer>
  );
}

export default index;
