import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { useTheme } from '../../hooks/useTheme';
import BlogCard from '../../components/common/BlogCard';
import {
  CardSection,
  BlogCardWrapper,
  SlideButton,
  ButtonWrapper,
} from './styled';

function index() {
  const Cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [buttonOn, setButtonOn] = useState(0);
  const SectionScrollWidth = scrollRef.current?.scrollWidth || 0;

  const scrollMove = async (buttonNumber: number) => {
    scrollRef.current?.scrollTo({
      top: 0,
      left: (buttonNumber / 2) * SectionScrollWidth,
      behavior: 'smooth',
    });
    setButtonOn((prev) => {
      return (buttonNumber / 2) * SectionScrollWidth;
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

  useEffect(() => {
    if (scrollRef.current?.scrollLeft) {
      setButtonOn(scrollRef.current?.scrollLeft);
      console.log('!!!');
    }
  }, [scrollRef.current?.scrollLeft, buttonOn]);

  return (
    <LayoutContainer>
      <CardSection
        ref={scrollRef}
        isDrag={isDrag}
        onMouseDown={onDragStart}
        onMouseMove={isDrag ? onDragMove : undefined}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
      >
        {Cards.map((CardData, index) => (
          <BlogCardWrapper key={CardData}>
            <BlogCard />
          </BlogCardWrapper>
        ))}
      </CardSection>
      <ButtonWrapper>
        <SlideButton
          ButtonColor={buttonOn >= 0 && buttonOn < 1000 ? true : false}
          onClick={() => scrollMove(0)}
        ></SlideButton>
        <SlideButton
          ButtonColor={buttonOn >= 1000 && buttonOn < 2000 ? true : false}
          onClick={() => scrollMove(1)}
        ></SlideButton>
        <SlideButton
          ButtonColor={buttonOn >= 2000 && buttonOn < 3000 ? true : false}
          onClick={() => scrollMove(2)}
        ></SlideButton>
      </ButtonWrapper>
    </LayoutContainer>
  );
}

// 드래그 할때는 잘 동작하는데 버튼 누르면 동작 안됨

export default index;
