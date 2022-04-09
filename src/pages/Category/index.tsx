import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';

import { detailPostDataType } from '../../types/postData';
import { LayoutContainer } from '../../styles/layouts';
import { CategoryInner, PageBarWrapper } from './styled';
import BlogCardGridLayout from '../../components/common/BlogCardGridLayout';
import CategoryMenu from '../../components/common/CategoryMenu';
import PageBar from '../../components/common/PageBar';
import { useGetPostListData } from '../../api/hooks/useGetPostListData';

const Category = () => {
  // const params = useParams();
  // const navigate = useNavigate();
  // const [searchParams] = useSearchParams();
  // const currentParamsPageNumber = searchParams.get('page');
  // const nowParamsPageNumber = () => {
  //   return currentParamsPageNumber === null
  //     ? 0
  //     : parseInt(currentParamsPageNumber);
  // };
  // const { data } = useGetPostListData(
  //   params.categoryName === undefined ? 'all' : params.categoryName,
  //   nowParamsPageNumber(),
  // );
  // const handlePostData = () => {
  //   return data?.body.data.content === undefined ? [] : data?.body.data.content;
  // };
  // const handleCategoryMenuNavigation = (categoryName: string) => {
  //   navigate(`/category/${categoryName}`); //수정사항
  // };

  // const handlePageNavigation = (nowPage: number) => {
  //   nowPage === nowParamsPageNumber()
  //     ? null
  //     : navigate(`/category/${params.categoryName}?page=${nowPage}`); //수정사항
  // };
  // const handleTotalPageData = () => {
  //   return data?.body.data.totalPages ? data.body.data.totalPages : 0;
  // };
  const [PostData, setPostData] = useState<detailPostDataType[]>([]);
  const [categoryName, setCategoryName] = useState('all');
  const instance = axios.create({
    baseURL: 'https://gdsc-dju.com',
    timeout: 15000,
  });
  const handleCategoryMenuNavigation = (categoryName: string) => {
    const pageTitle = '페이지제목';
    window.history.pushState('', pageTitle, `/category/${categoryName}`);
    setCategoryName(categoryName);
  };
  useEffect(() => {
    if (categoryName === 'all')
      instance.get('/api/v1/post/list?page=0').then(function (response) {
        setPostData(response.data.body.data.content);
      });
    else
      instance
        .get(`/api/v1/post/list/${categoryName}`)
        .then(function (response) {
          setPostData(response.data.body.data.content);
        });
    console.log('리렌더링 되었음!');
  }, [categoryName]);

  return (
    <LayoutContainer>
      <CategoryInner>
        <CategoryMenu
          type={categoryName}
          onClick={handleCategoryMenuNavigation}
        />
        <BlogCardGridLayout PostData={PostData} />
        {/* <PageBarWrapper>
          {handleTotalPageData() && (
            <PageBar
              page={nowParamsPageNumber()}
              totalPage={10}
              onClick={handlePageNavigation}
            />
          )}
        </PageBarWrapper> */}
      </CategoryInner>
    </LayoutContainer>
  );
};

export default Category;
