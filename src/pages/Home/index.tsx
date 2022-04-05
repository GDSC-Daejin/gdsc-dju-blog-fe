import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useScroll } from 'react-use';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { LayoutContainer } from '../../styles/layouts';
import BlogCardScrollButton from '../../components/common/BlogCardButton';
import BlogCard from '../../components/common/BlogCard';
import {
  MainContentWrapper,
  WelcomePhrase,
  CardSection,
  BlogCardWrapper,
  ButtonWrapper,
} from './styled';
import { useGetPostListData } from '../../api/hooks/useGetPostListData';
import { detailPostDataType } from '../../types/postData';
import CategoryMenu from '../../components/common/CategoryMenu';

function index() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { x } = useScroll(scrollRef);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
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

  const nowParamsCategoryData = () => {
    return currentParamsPageNumber === null ? 'all' : currentParamsPageNumber;
  };
  const categoryMenuHandler = (categoryName: string) => {
    navigate(`?category=${categoryName}`);
  };

  const { data: PostData } = useGetPostListData(nowParamsCategoryData());

  return (
    <LayoutContainer>
      <MainContentWrapper>
        <WelcomePhrase>
          <span>from Cindy</span>
          <p>
            Google Developer Student Club
            <br />
            Daejin Univ. Blog 에 오신걸 환영합니다.
          </p>
          <span>by Cindy</span>
        </WelcomePhrase>
        <CategoryMenu
          type={nowParamsCategoryData()}
          onClick={categoryMenuHandler}
        />
        {PostData?.body.data.empty ? (
          '해당 카테고리 데이터는 없습니다..'
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
              {PostData?.body.data.content.map((CardData, index) => (
                <BlogCardWrapper key={CardData.postId}>
                  <BlogCard CardData={CardData} />
                </BlogCardWrapper>
              ))}
            </CardSection>
            <ButtonWrapper>
              <BlogCardScrollButton ScrollX={x} scrollRef={scrollRef} />
            </ButtonWrapper>
          </>
        )}
      </MainContentWrapper>
    </LayoutContainer>
  );
}

export default index;
