import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Link,
  useParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

import { LayoutContainer } from '../../styles/layouts';
import { CategoryInner } from './styled';
import { detailPostDataType } from '../../types/postData';
import BlogCardGridLayout from '../../components/common/BlogCardGridLayout';
import CategoryMenu from '../../components/common/CategoryMenu';
import PageBar from '../../components/common/PageBar';
import { useGetPostListData } from '../../api/hooks/useGetPostListData';

const Category = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentParamsPageNumber = searchParams.get('page');
  const { data, error } = useGetPostListData(
    params.categoryName === undefined ? 'all' : params.categoryName,
    currentParamsPageNumber === null ? 0 : parseInt(currentParamsPageNumber),
  );
  const handlePostData = () => {
    return data?.body.data.content === undefined ? [] : data?.body.data.content;
  };
  const handleCategoryMenu = (categoryName: string) => {
    navigate(`/category/${categoryName}`);
  };

  console.log(data);

  return (
    <LayoutContainer>
      <CategoryInner>
        <CategoryMenu
          type={params.categoryName === undefined ? 'all' : params.categoryName}
          onClick={handleCategoryMenu}
        />
        <BlogCardGridLayout PostData={handlePostData()} error={error} />
        {/* <PageBar page={0} totalPage={10} /> */}
      </CategoryInner>
    </LayoutContainer>
  );
};

export default Category;
