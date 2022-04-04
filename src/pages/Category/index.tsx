import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';

import { LayoutContainer } from '../../styles/layouts';
import { CategoryInner, PageBarWrapper } from './styled';
import BlogCardGridLayout from '../../components/common/BlogCardGridLayout';
import CategoryMenu from '../../components/common/CategoryMenu';
import PageBar from '../../components/common/PageBar';
import { useGetPostListData } from '../../api/hooks/useGetPostListData';

const Category = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentParamsPageNumber = searchParams.get('page');
  const nowParamsPageNumber = () => {
    return currentParamsPageNumber === null
      ? 0
      : parseInt(currentParamsPageNumber);
  };
  const { data, error } = useGetPostListData(
    params.categoryName === undefined ? 'all' : params.categoryName,
    nowParamsPageNumber(),
  );
  const handlePostData = () => {
    return data?.body.data.content === undefined ? [] : data?.body.data.content;
  };
  const handleCategoryMenuNavigation = (categoryName: string) => {
    navigate(`/category/${categoryName}`);
  };
  const handlePageNavigation = (nowPage: number) => {
    nowPage === nowParamsPageNumber()
      ? null
      : navigate(`/category/${params.categoryName}?page=${nowPage}`);
  };

  return (
    <LayoutContainer>
      <CategoryInner>
        <CategoryMenu
          type={params.categoryName === undefined ? 'all' : params.categoryName}
          onClick={handleCategoryMenuNavigation}
        />
        <BlogCardGridLayout PostData={handlePostData()} error={error} />
        <PageBarWrapper>
          <PageBar
            page={nowParamsPageNumber()}
            totalPage={10}
            onClick={handlePageNavigation}
          />
        </PageBarWrapper>
      </CategoryInner>
    </LayoutContainer>
  );
};

export default Category;
