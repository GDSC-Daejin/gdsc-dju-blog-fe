import React, { useRef, useState, useEffect } from 'react';
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [PostData, setPostData] = useState<ICardData[]>();
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

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        'https://gdsc-dju.com/api/v1/post/list?page=0&size=16',
      );
      setPostData(result.data.body.data.content);
    }
    fetchData();
  }, []);

  interface ICardData {
    memberInfo: {
      nickname: string;
    };
    category: {
      categoryName: string; //타입에 대한 수정 필요
      modifiedAt: string;
      uploadDate: string;
    };
    title: string;
    tmpStore: boolean;
    postHashTags: string;
    postId: number;
    likes: [];
    modifiedAt: string;
    uploadDate: string;
    content: string;
  }

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
          {PostData?.map((data, index) => (
            <BlogCardWrapper key={data.postId}>
              <BlogCard CardData={data} />
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
