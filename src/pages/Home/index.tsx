import React, { useRef, useState, MouseEvent } from 'react';
import { useScroll } from 'react-use';

import { LayoutContainer } from '../../styles/layouts';
import BlogCardScrollButton from './BlogCardButton';
import {
  MainContentWrapper,
  CategoryMenuWrapper,
  ButtonWrapper,
} from './styled';
import { useGetPostListData } from '../../api/hooks/useGetPostListData';
import CategoryMenu from '../../components/common/CategoryMenu';
import WelcomePhraseText from './WelcomePharaseText/WelcomePhraseText';
import SlideCardSection from './SlideCardSection/SlideCardSection';

function index() {
  const [categoryName, setcategoryName] = useState('all');
  const { postListData } = useGetPostListData(categoryName, 0, 11);
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

  const categoryMenuHandler = (categoryName: string) => {
    setcategoryName(categoryName);
    scrollRef.current?.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  const PostDataHandler = () => {
    return postListData?.content === undefined ? [] : postListData.content;
  };

  return (
    <LayoutContainer>
      <WelcomePhraseText />
      <CategoryMenuWrapper>
        <CategoryMenu type={categoryName} onClick={categoryMenuHandler} />
      </CategoryMenuWrapper>
      <MainContentWrapper
        ref={scrollRef}
        isDrag={isDrag}
        onMouseDown={onDragStart}
        onMouseMove={isDrag ? onDragMove : undefined}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
      >
        <SlideCardSection PostData={PostDataHandler()} />
      </MainContentWrapper>
      {postListData === undefined ||
        (postListData.content.length !== 0 && (
          <ButtonWrapper>
            <BlogCardScrollButton scrollX={x} scrollRef={scrollRef} />
          </ButtonWrapper>
        ))}
    </LayoutContainer>
  );
}

export default index;
