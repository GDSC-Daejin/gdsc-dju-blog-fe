import React, { useEffect, useState } from 'react';
import { LayoutContainer } from '../../styles/layouts';
import { detailPostDataType } from '../../types/postData';
import BlogCardGridLayout from '../../components/common/BlogCardGridLayout';
import CategoryMenu from '../../components/common/CategoryMenu';
import axios from 'axios';
import PageBar from '../../components/common/PageBar';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Category = () => {
  const [PostData, setPostData] = useState<detailPostDataType[]>([]);
  const params = useParams();
  const navigate = useNavigate();
  const checkCategoryType = () => {
    if (params.categoryName === undefined) return 'all';
    return params.categoryName;
  };
  const instance = axios.create({
    baseURL: 'https://gdsc-dju.com',
    timeout: 15000,
  });
  useEffect(() => {
    instance
      .get(`/api/v1/post/list/${params.categoryName}?page=0&size=16`)
      .then(function (response) {
        setPostData(response.data.body.data.content);
      });
  }, [params]);

  const handleCategoryMenu = (categoryName: string) => {
    navigate(`/category/${categoryName}`);
  };

  return (
    <LayoutContainer>
      <h3>카테고리 페이지</h3>
      <CategoryMenu type={checkCategoryType()} onClick={handleCategoryMenu} />
      <BlogCardGridLayout PostData={PostData} />
      {/* <PageBar/> */}
    </LayoutContainer>
  );
};

export default Category;
