import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LayoutContainer } from '../../styles/layouts';
import { detailPostDataType } from '../../types/postData';
import BlogCardGridLayout from '../../components/common/BlogCardGridLayout';
import CategoryMenu from '../../components/common/CategoryMenu';
import PageBar from '../../components/common/PageBar';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useGetPostListData } from '../../api/hooks/useGetPostListData';

const Category = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data, error } = useGetPostListData(
    params.categoryName === undefined ? 'all' : params.categoryName,
    0,
  );
  const handlePostData = () => {
    return data?.body.data.content === undefined ? [] : data?.body.data.content;
  };
  const handleCategoryMenu = (categoryName: string) => {
    navigate(`/category/${categoryName}`);
  };

  return (
    <LayoutContainer>
      <h3>카테고리 페이지</h3>
      <CategoryMenu
        type={params.categoryName === undefined ? 'all' : params.categoryName}
        onClick={handleCategoryMenu}
      />
      <BlogCardGridLayout PostData={handlePostData()} />
      {/* <PageBar/> */}
    </LayoutContainer>
  );
};

export default Category;
