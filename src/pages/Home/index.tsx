import React, { useRef, useState } from 'react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { useTheme } from '../../hooks/useTheme';
import BlogCard from '../../components/common/BlogCard';
import { CardSection, SlideButton, ButtonWrapper } from './styled';
import { useElementScroll, useTransform } from 'framer-motion';

/*
  hover시 text 다 뭉개짐
  text 뿐만 아니라 카드 다 뭉개짐
  pointer 수정해야 함
  omMouseMove의 이벤트 발생이 너무 많아 수정해야 함


  test 더 필요할 듯
*/

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
      <ButtonWrapper>
        <SlideButton onClick={() => scrollMove(0)}></SlideButton>
        <SlideButton onClick={() => scrollMove(1)}></SlideButton>
        <SlideButton onClick={() => scrollMove(2)}></SlideButton>
      </ButtonWrapper>
    </LayoutContainer>
  );
}

export default index;
