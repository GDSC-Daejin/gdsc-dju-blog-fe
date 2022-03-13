import React, { useRef, useState } from 'react';
import { useScroll } from 'react-use';
import { LayoutContainer } from '../../styles/layouts';
import BlogCardScrollButton from '../../components/common/BlogCardButton';
import BlogCard from '../../components/common/BlogCard';
import {
  MainBannerText,
  CardSection,
  BlogCardWrapper,
  ButtonWrapper,
} from './styled';

function index() {
  const Cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const scrollRef = useRef<HTMLDivElement>(null);
  const { x } = useScroll(scrollRef);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

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
      <MainBannerText>
        <p>from ...</p>
        <p>Google Developer Student Club</p>
        <p>Daejin Univ. Blog 에 오신걸 환영합니다.</p>
        <p>by ...</p>
      </MainBannerText>
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
        <BlogCardScrollButton
          ScrollX={x}
          scrollRef={scrollRef}
          buttonNumber={0}
        />
        <BlogCardScrollButton
          ScrollX={x}
          scrollRef={scrollRef}
          buttonNumber={1}
        />
        <BlogCardScrollButton
          ScrollX={x}
          scrollRef={scrollRef}
          buttonNumber={2}
        />
      </ButtonWrapper>
    </LayoutContainer>
  );
}

export default index;
