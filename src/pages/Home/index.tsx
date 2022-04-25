import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useScroll } from 'react-use';
import { useSearchParams } from 'react-router-dom';
import { LayoutContainer } from '../../styles/layouts';
import BlogCardScrollButton from '../../components/common/BlogCardButton';
import BlogCard from '../../components/common/BlogCard';
import {
  BlogCardWrapper,
  ButtonWrapper,
  CardSection,
  HomePhraseWrapper,
  MainContentWrapper,
} from './styled';
import CategoryMenu from '../../components/common/CategoryMenu';
import { useGetPostListData } from '../../api/hooks/useGetPostListData';
import HomePhrase from '../../components/common/HomePhrase';
import { homePhraseData } from '../../api/Mocks/homePhraseData';

function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { x } = useScroll(scrollRef);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState('all');
  const [phrase, setPhrase] = useState(homePhraseData[0]);
  const currentParamsPageNumber = searchParams.get('category');

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
  //
  // const instance = axios.create({
  //   baseURL: 'https://gdsc-dju.com',
  //   timeout: 15000,
  // });
  // useEffect(() => {
  //   instance.get('/api/v1/post/list?page=0&size=11').then(function (response) {
  //     setPostData(response.data.body.data.content);
  //   });
  //   instance.get('/api/admin/v1/all/list').then(function (response) {
  //     // console.log(response);
  //   });
  // }, []);

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
    <LayoutContainer>
      <MainContentWrapper>
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
        <CardSection
          ref={scrollRef}
          isDrag={isDrag}
          onMouseDown={onDragStart}
          onMouseMove={isDrag ? onDragMove : undefined}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
        >
          {postListData &&
            postListData.content.map((postData, index) => (
              <BlogCardWrapper key={postData.postId}>
                <BlogCard postData={postData} />
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

export default Home;
