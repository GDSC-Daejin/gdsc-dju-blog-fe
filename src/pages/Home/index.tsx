import React, { useRef, useState } from 'react';
import { useScroll } from 'react-use';
import { LayoutContainer } from '../../styles/layouts';
import BlogCard from '../../components/common/BlogCard';
import {
  CardSection,
  BlogCardWrapper,
  BlogCardButton,
  ButtonWrapper,
} from './styled';

function index() {
  const Cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const scrollRef = useRef<HTMLDivElement>(null);
  const { x } = useScroll(scrollRef);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const SectionScrollWidth = 2457;

  const scrollMove = (buttonNumber: number) => {
    scrollRef.current?.scrollTo({
      top: 0,
      left: SectionScrollWidth * (buttonNumber / 2),
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
        <BlogCardButton
          ButtonActive={x >= 0 && x < 1228 ? true : false}
          onClick={() => scrollMove(0)}
        />
        <BlogCardButton
          ButtonActive={x >= 1228 && x < 2450 ? true : false}
          onClick={() => scrollMove(1)}
        />
        <BlogCardButton
          ButtonActive={x >= 2450 ? true : false}
          onClick={() => scrollMove(2)}
        />
      </ButtonWrapper>
    </LayoutContainer>
  );
}

export default index;
