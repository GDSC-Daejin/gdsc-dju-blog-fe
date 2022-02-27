import React, { useRef, useState } from 'react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { useTheme } from '../../hooks/useTheme';
import BlogCard from '../../components/common/BlogCard';
import { CardSection, SlideButton, ButtonWrapper } from './styled';
import { useElementScroll, useTransform } from 'framer-motion';
import { start } from 'repl';

function index() {
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
        <BlogCard test={1} />
        <BlogCard test={2} />
        <BlogCard test={3} />
        <BlogCard test={4} />
        <BlogCard test={5} />
        <BlogCard test={6} />
        <BlogCard test={7} />
        <BlogCard test={8} />
        <BlogCard test={9} />
        <BlogCard test={10} />
        <BlogCard test={11} />
      </CardSection>
      <ButtonWrapper>
        <SlideButton
          nowWidth={
            Number(
              (
                (scrollRef.current?.scrollLeft === undefined
                  ? 0
                  : scrollRef.current.scrollLeft) / oneBlockWidth
              ).toFixed(),
            ) === 0
              ? true
              : false
          }
          onClick={() => scrollMove(0)}
        ></SlideButton>
        <SlideButton
          nowWidth={
            Number(
              (
                (scrollRef.current?.scrollLeft === undefined
                  ? 0
                  : scrollRef.current.scrollLeft) / oneBlockWidth
              ).toFixed(),
            ) === 1
              ? true
              : false
          }
          onClick={() => scrollMove(1)}
        ></SlideButton>
        <SlideButton
          nowWidth={
            Number(
              (
                (scrollRef.current?.scrollLeft === undefined
                  ? 0
                  : scrollRef.current.scrollLeft) / oneBlockWidth
              ).toFixed(),
            ) === 2
              ? true
              : false
          }
          onClick={() => scrollMove(2)}
        ></SlideButton>
      </ButtonWrapper>
    </LayoutContainer>
  );
}

// 드래그 할때는 잘 동작하는데 버튼 누르면 동작 안됨

export default index;
