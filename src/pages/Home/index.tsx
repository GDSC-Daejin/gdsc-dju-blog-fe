import React, { useRef, useState, useEffect } from 'react';
import { IBlogCardDataProps } from '../../types/postDataType';
import axios from 'axios';
import { useScroll } from 'react-use';
import { LayoutContainer } from '../../styles/layouts';
import BlogCardScrollButton from '../../components/common/BlogCardButton';
import BlogCard from '../../components/common/BlogCard';
import {
  MainContentWrapper,
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
  const [PostData, setPostData] = useState<IBlogCardDataProps[]>();

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        'https://gdsc-dju.com/api/v1/post/list?page=0&size=16',
      );
      setPostData(result.data.body.data.content);
    }
    fetchData();
  }, []);

  return (
    <LayoutContainer>
      <MainContentWrapper>
        <CardSection
          ref={scrollRef}
          isDrag={isDrag}
          onMouseDown={onDragStart}
          onMouseMove={isDrag ? onDragMove : undefined}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
        >
          {PostData?.map((CardData, index) => (
            <BlogCardWrapper key={CardData.postId}>
              <BlogCard CardData={CardData} />
            </BlogCardWrapper>
          ))}
        </CardSection>
        <ButtonWrapper>
          <BlogCardScrollButton ScrollX={x} scrollRef={scrollRef} />
        </ButtonWrapper>
      </MainContentWrapper>
    </LayoutContainer>
  );
}

export default index;
