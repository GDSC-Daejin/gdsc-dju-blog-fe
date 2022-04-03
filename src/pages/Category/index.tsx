import React, { useEffect, useState } from 'react';
import { LayoutContainer } from '../../styles/layouts';
import { detailPostDataType } from '../../types/postData';
import BlogCardGridLayout from '../../components/common/BlogCardGridLayout';
import CategoryMenu from '../../components/common/CategoryMenu';
import axios from 'axios';
import PageBar from '../../components/common/PageBar';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useGetPostListData } from '../../api/hooks/useGetPostListData';

const Category = () => {
  const params = useParams();
  const navigate = useNavigate();
  // const { data, error } = useGetPostListData(
  //   params.categoryName === undefined ? 'all' : params.categoryName,
  //   0,
  // );
  // const handlePostData = () => {
  //   return data?.body.data.content === undefined ? [] : data?.body.data.content;
  // };
  const handleCategoryMenu = (categoryName: string) => {
    navigate(`/category/${categoryName}`);
  };
  useEffect(() => {
    const instance = axios.create({
      baseURL: 'https://gdsc-dju.com',
      timeout: 15000,
    });
    instance
      .get(`/api/v1/post/list/${params.categoryName}?page=0&size=16`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [params]);

  return (
    <LayoutContainer>
      <h3>카테고리 페이지</h3>
      <CategoryMenu
        type={params.categoryName === undefined ? 'all' : params.categoryName}
        onClick={handleCategoryMenu}
      />
      {/* <BlogCardGridLayout PostData={handlePostData()} /> */}
      {/* <PageBar/> */}
    </LayoutContainer>
  );
};

export default Category;
