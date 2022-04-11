import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { LayoutContainer } from '../../styles/layouts';
import { CategoryInner, PageBarWrapper } from './styled';
import BlogCardGridLayout from '../../components/common/BlogCardGridLayout';
import CategoryMenu from '../../components/common/CategoryMenu';
import PageBar from '../../components/common/PageBar';
import { useGetPostsData } from '../../api/hooks/useGetPostListData';

const Category = () => {
  //router hook
  const location = useLocation();
  const navigate = useNavigate();

  // 데이터 가공 처리
  const handleCategoryMenuNavigation = (categoryName: string) => {
    navigate(`/category/${categoryName}`);
  };
  const handlePageNavigation = (nowPage: number) => {
    navigate(`/category/${handleSelectCategory()}?page=${nowPage}`);
  };
  const handleSelectPage = () => {
    return location.search.split('=').slice(-1)[0] === ''
      ? 0
      : parseInt(location.search.split('=').slice(-1)[0]);
  };
  const handleSelectCategory = () => {
    return location.pathname.split('/').slice(-1)[0];
  };

  // API 요청
  const { data, isLoading, isError } = useGetPostsData(
    handleSelectCategory(),
    handleSelectPage(),
  );

  return (
    <LayoutContainer>
      <CategoryInner>
        <CategoryMenu
          type={handleSelectCategory()}
          onClick={handleCategoryMenuNavigation}
        />
        <BlogCardGridLayout
          PostData={data?.body.data.content}
          isLoading={isLoading}
          isError={isError}
        />
        <PageBarWrapper>
          <PageBar
            page={handleSelectPage()}
            totalPage={data?.body.data.totalPages || 0}
            onClick={handlePageNavigation}
          />
        </PageBarWrapper>
      </CategoryInner>
    </LayoutContainer>
  );
};

export default Category;
