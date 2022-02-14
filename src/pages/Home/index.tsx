import React, { useRef, useState } from 'react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { useTheme } from '../../hooks/useTheme';
import BlogCard from '../../components/common/BlogCard';
import { CardSection, CardWrapper } from './styled';
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
  const { scrollX } = useElementScroll(ref);
  const [scrollXPercent, setXscroll] = useState(0);

  scrollX.onChange(setXscroll);
  const scrollXvalue = useTransform(scrollX, [0, 1], [0, 2]);

  const scrollMove = (buttonNum: number) => {
    ref.current?.scrollTo({
      top: 0,
      left: buttonNum * 1212,
      behavior: 'smooth',
    });
  };
  return (
    <LayoutContainer>
      <CardSection ref={ref}>
        <CardWrapper>
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
        </CardWrapper>
      </CardSection>
      <button onClick={() => scrollMove(0)}>1</button>
      <button onClick={() => scrollMove(1)}>2</button>
      <button onClick={() => scrollMove(2)}>3</button>
    </LayoutContainer>
  );
}

export default index;
