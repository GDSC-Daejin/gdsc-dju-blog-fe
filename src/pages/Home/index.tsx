import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { LayoutContainer } from '../../styles/layouts';
import { MainContentWrapper, CategoryMenuWrapper } from './styled';
import { useGetPostListData } from '../../api/hooks/useGetPostListData';
import CategoryMenu from '../../components/common/CategoryMenu';
import WelcomePhraseText from './WelcomePharaseText/WelcomePhraseText';
import SlideCardSection from './SlideCardSection/SlideCardSection';

function index() {
  const [categoryName, setcategoryName] = useState('all');
  const { postListData } = useGetPostListData(categoryName, 0, 11);

  const categoryMenuHandler = (categoryName: string) => {
    setcategoryName(categoryName);
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
      <MainContentWrapper>
        <SlideCardSection PostData={PostDataHandler()} />
      </MainContentWrapper>
    </LayoutContainer>
  );
}

export default index;
