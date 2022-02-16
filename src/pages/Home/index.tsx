import React, { useRef, useState } from 'react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { useTheme } from '../../hooks/useTheme';
import BlogCard from '../../components/common/BlogCard';
import { CardSection } from './styled';
import { useElementScroll, useTransform } from 'framer-motion';

function index() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

  const scrollMove = (buttonNumber: number) => {
    scrollRef.current?.scrollTo({
      top: 0,
      left: buttonNumber * 1212,
      behavior: 'smooth',
    });
  };

  const onDragStart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDrag(true);
    if (scrollRef.current?.scrollLeft !== undefined)
      setStartX(e.pageX + scrollRef.current.scrollLeft);
  };
  const onDragEnd = () => {
    setIsDrag(false);
  };
  const onDragMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isDrag) {
      if (scrollRef.current?.scrollLeft !== undefined)
        scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };

  return (
    <LayoutContainer>
      <CardSection
        ref={scrollRef}
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
      >
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
      <button onClick={() => scrollMove(0)}>1</button>
      <button onClick={() => scrollMove(1)}>2</button>
      <button onClick={() => scrollMove(2)}>3</button>
    </LayoutContainer>
  );
}

export default index;
