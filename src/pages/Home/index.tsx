import React, { useRef, useState } from 'react';
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

function index() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { x } = useScroll(scrollRef);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState('all');
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

  return (
    <LayoutContainer>
      <MainContentWrapper>
        <HomePhraseWrapper>
          <HomePhrase
            phrase={
              'Google Developer Student Club\n' +
              ' Daejin Univ. Blog 에 오신걸 환영합니다.'
            }
            by={'by Cindy'}
            from={'from Cindy'}
          />
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

export default index;
