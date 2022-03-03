import React, { useEffect, useRef, useState } from 'react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { useTheme } from '../../hooks/useTheme';
import BlogCard from '../../components/common/BlogCard';
import {
  CardSection,
  BlogCardWrapper,
  SlideButton,
  ButtonWrapper,
} from './styled';
import { useElementScroll, useTransform } from 'framer-motion';
import { start } from 'repl';

function index() {
  const Card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const oneBlockWidth = 1212;

  const scrollMove = (buttonNumber: number) => {
    scrollRef.current?.scrollTo({
      top: 0,
      left: buttonNumber * oneBlockWidth,
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
      if (scrollRef.current !== null) {
        const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
        if (scrollRef.current?.scrollLeft !== undefined)
          scrollRef.current.scrollLeft = startX - e.pageX;

        if (scrollLeft === 0) {
          setStartX(e.pageX);
        } else if (scrollWidth <= clientWidth + scrollLeft) {
          setStartX(e.pageX + scrollLeft);
        }
      }
    }
  };

  return (
    <LayoutContainer>
      <CardSection
        ref={scrollRef}
        onMouseDown={onDragStart}
        onMouseMove={isDrag ? onDragMove : undefined}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        isDrag={isDrag}
      >
        {Card.map((CardData, index) => (
          <BlogCardWrapper key={index}>
            <BlogCard />
          </BlogCardWrapper>
        ))}
      </CardSection>
      <ButtonWrapper>
        <SlideButton onClick={() => scrollMove(0)}></SlideButton>
        <SlideButton onClick={() => scrollMove(1)}></SlideButton>
        <SlideButton onClick={() => scrollMove(2)}></SlideButton>
      </ButtonWrapper>
    </LayoutContainer>
  );
}

// 드래그 할때는 잘 동작하는데 버튼 누르면 동작 안됨

export default index;
