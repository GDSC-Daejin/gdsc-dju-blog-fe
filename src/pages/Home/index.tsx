import React, { useEffect, useRef, useState } from 'react';
import { useScroll } from 'react-use';
import BlogCard from '../../components/common/BlogCard';
import {
  BlogCardWrapper,
  ButtonWrapper,
  CardSection,
  CardSectionWrapper,
  HomeContentWrapper,
  HomeLayoutContainer,
  HomePhraseWrapper,
} from './styled';
import CategoryMenu from '../../components/common/CategoryMenu';
import { useGetPostListData } from '../../api/hooks/useGetPostListData';
import HomePhrase from '../../components/common/HomePhrase';

import { Link } from 'react-router-dom';
import Plus from '../../assets/Plus';
import BlogCardScrollButton from './BlogCardButton';
import api from '../../api';

function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { x } = useScroll(scrollRef);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [category, setCategory] = useState('all');

  const { postListData } = useGetPostListData(category, 0, 11);

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
  const changeCategory = (category: string) => {
    setCategory(category);
  };
  console.log(api.getToken());

  return (
    <>
      <HomeLayoutContainer>
        <HomeContentWrapper>
          <HomePhraseWrapper>
            <HomePhrase />
          </HomePhraseWrapper>
          <CategoryMenu type={category} onClick={changeCategory} />
        </HomeContentWrapper>
      </HomeLayoutContainer>

      <CardSectionWrapper>
        {postListData && (
          <CardSection
            isDrag={isDrag}
            ref={scrollRef}
            onMouseDown={onDragStart}
            onMouseMove={isDrag ? onDragMove : undefined}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
          >
            {postListData.content.map((postData) => (
              <BlogCardWrapper key={postData.postId}>
                <BlogCard postData={postData} />
              </BlogCardWrapper>
            ))}
            <BlogCardWrapper>
              <div className="viewmore-item">
                <Link to={`/category/${category}`}>
                  <button type="button" className="viewmore-item__button">
                    <Plus />
                  </button>
                </Link>
              </div>
            </BlogCardWrapper>
          </CardSection>
        )}
      </CardSectionWrapper>
      <HomeLayoutContainer>
        <ButtonWrapper>
          <BlogCardScrollButton scrollX={x} scrollRef={scrollRef} />
        </ButtonWrapper>
      </HomeLayoutContainer>
    </>
  );
}

export default Home;
