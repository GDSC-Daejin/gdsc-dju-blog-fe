import React, { useState, useRef } from 'react';
import { CardSection, BlogCardWrapper, ButtonWrapper } from './styled';
import { useScroll } from 'react-use';
import BlogCardScrollButton from '../../../components/common/BlogCardButton';
import BlogCard from '../../../components/common/BlogCard';
import { detailPostDataType } from '../../../types/postData';

interface ISlideCardSectionProps {
  PostData: detailPostDataType[];
}

const SlideCardSection = (props: ISlideCardSectionProps) => {
  const { PostData } = props;
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
  return PostData.length === 0 ? (
    <h3>해당 카테고리 데이터는 없습니다..</h3>
  ) : (
    <>
      <CardSection
        ref={scrollRef}
        isDrag={isDrag}
        onMouseDown={onDragStart}
        onMouseMove={isDrag ? onDragMove : undefined}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
      >
        {PostData.map((CardData, index) => (
          <BlogCardWrapper key={CardData.postId}>
            <BlogCard CardData={CardData} />
          </BlogCardWrapper>
        ))}
      </CardSection>
      <ButtonWrapper>
        <BlogCardScrollButton ScrollX={x} scrollRef={scrollRef} />
      </ButtonWrapper>
    </>
  );
};

export default SlideCardSection;
