import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { LayoutContainer } from '../../styles/layouts';
import { CategoryInner, PageBarWrapper } from './styled';
import BlogCardGridLayout from '../../components/common/BlogCardGridLayout';
import CategoryMenu from '../../components/common/CategoryMenu';
import PageBar from '../../components/common/PageBar';
import { useGetPostsData } from '../../api/hooks/useGetPostListData';

const Category = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState(
    location.pathname.split('/').slice(-1)[0],
  );
  const [nowPage, setNowPage] = useState(
    location.search.split('=').slice(-1)[0] === ''
      ? 0
      : parseInt(location.search.split('=').slice(-1)[0]),
  );

  const handleCategoryMenuNavigation = (categoryName: string) => {
    navigate(`/category/${categoryName}`);
    setCategoryName(categoryName);
    setNowPage(0);
  };
  const handlePageNavigation = (nowPage: number) => {
    navigate(`/category/${categoryName}?page=${nowPage}`);
    setNowPage(nowPage);
  };

  const { data, isLoading, isError } = useGetPostsData(categoryName, nowPage);

  return (
    <LayoutContainer>
      <CategoryInner>
        <CategoryMenu
          type={categoryName}
          onClick={handleCategoryMenuNavigation}
        />
        <BlogCardGridLayout
          PostData={data?.body.data.content}
          isLoading={isLoading}
          isError={isError}
        />
        <PageBarWrapper>
          <PageBar
            page={nowPage}
            totalPage={data?.body.data.totalPages || 0}
            onClick={handlePageNavigation}
          />
        </PageBarWrapper>
      </CategoryInner>
    </LayoutContainer>
  );
};

export default Category;
