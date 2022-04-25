import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useScroll } from 'react-use';
import { useSearchParams } from 'react-router-dom';
import BlogCardScrollButton from '../../components/common/BlogCardButton';
import BlogCard from '../../components/common/BlogCard';
import {
  BlogCardWrapper,
  ButtonWrapper,
  CardSection,
  HomeContentWrapper,
  HomeLayoutContainer,
  HomePhraseWrapper,
} from './styled';
import CategoryMenu from '../../components/common/CategoryMenu';
import { useGetPostListData } from '../../api/hooks/useGetPostListData';
import HomePhrase from '../../components/common/HomePhrase';
import { homePhraseData } from '../../api/Mocks/homePhraseData';
import {
  blogCardAnimate,
  listAnimate,
} from '../../components/common/Animation';

function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { x } = useScroll(scrollRef);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState('all');
  const [phrase, setPhrase] = useState(homePhraseData[0]);

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
  const { postListData } = useGetPostListData(category, 0, 11);

  const setPhraseData = useCallback(() => {
    let index = 0;
    setInterval(() => {
      setPhrase(homePhraseData[index]);
      index++;
      if (index >= homePhraseData.length) index = 0;
    }, 5000);
  }, []);
  useEffect(() => {
    setPhraseData();
  }, []);

  return (
    <>
      <HomeLayoutContainer>
        <HomeContentWrapper>
          <HomePhraseWrapper
            key={phrase.phrase}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 1, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <HomePhrase phraseData={phrase} />
          </HomePhraseWrapper>
          <CategoryMenu type={category} onClick={changeCategory} />
        </HomeContentWrapper>
      </HomeLayoutContainer>
      {postListData && (
        <CardSection
          ref={scrollRef}
          isDrag={isDrag}
          onMouseDown={onDragStart}
          onMouseMove={isDrag ? onDragMove : undefined}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          variants={listAnimate}
          initial={'start'}
          animate={'end'}
        >
          {postListData.content.map((postData) => (
            <BlogCardWrapper key={postData.postId} variants={blogCardAnimate}>
              <BlogCard postData={postData} />
            </BlogCardWrapper>
          ))}
        </CardSection>
      )}
      <HomeLayoutContainer>
        <ButtonWrapper>
          <BlogCardScrollButton ScrollX={x} scrollRef={scrollRef} />
        </ButtonWrapper>
      </HomeLayoutContainer>
    </>
  );
}

export default Home;
