import React, { useEffect, useState } from 'react';
import { IBlogCardDataProps } from '../../types/postDataType.interface';
import { LayoutContainer } from '../../styles/layouts';
import BlogCardGridLayout from '../../components/common/BlogCardGridLayout';
import CategoryMenu from '../../components/common/CategoryMenu';
import axios from 'axios';
import PageBar from '../../components/common/PageBar';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Category = () => {
  const [PostData, setPostData] = useState<IBlogCardDataProps[]>([]);
  const params = useParams();
  const navigate = useNavigate();
  const instance = axios.create({
    baseURL: 'https://gdsc-dju.com',
    timeout: 15000,
  });
  console.log(params);
  // useEffect(() => {
  //   instance.get('/api/v1/post/list?page=0&size=5').then(function (response) {
  //     console.log(`check1 : ${response}`);
  //   });
  //   instance
  //     .get(`/api/v1/post/list/${params.categoryName}?page=0&size=16`)
  //     .then(function (response) {
  //       console.log(`check2 : ${response}`);
  //     });
  // }, []);
  const handleCategoryMenu = (categoryName: string) => {
    navigate(`/category/${categoryName}`);
  };

  return (
    <LayoutContainer>
      <h3>카테고리 페이지</h3>
      <CategoryMenu type={params.categoryName!} onClick={handleCategoryMenu} />
      {/* <BlogCardGridLayout PostData={PostData} /> */}
      {/* <PageBar page={10} totalPage={123} /> */}
    </LayoutContainer>
  );
};

export default Category;
