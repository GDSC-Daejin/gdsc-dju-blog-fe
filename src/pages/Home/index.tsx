import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { LayoutContainer } from '../../styles/layouts';
import { MainContentWrapper } from './styled';
import { useGetPostListData } from '../../api/hooks/useGetPostListData';
import CategoryMenu from '../../components/common/CategoryMenu';
import WelcomePhraseText from './WelcomePhraseText';
import SlideCardSection from './SlideCardSection/SlideCardSection';

function index() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentParamsPageNumber = searchParams.get('category');

  const nowParamsCategoryData = () => {
    return currentParamsPageNumber === null ? 'all' : currentParamsPageNumber;
  };
  const { data: PostData } = useGetPostListData(nowParamsCategoryData());

  const categoryMenuHandler = (categoryName: string) => {
    navigate(`?category=${categoryName}`);
  };
  const PostDataHandler = () => {
    return PostData?.body.data.content === undefined
      ? []
      : PostData?.body.data.content;
  };

  return (
    <LayoutContainer>
      <MainContentWrapper>
        <WelcomePhraseText />
        <CategoryMenu
          type={nowParamsCategoryData()}
          onClick={categoryMenuHandler}
        />
        <SlideCardSection PostData={PostDataHandler()} />
      </MainContentWrapper>
    </LayoutContainer>
  );
}

export default React.memo(index);
