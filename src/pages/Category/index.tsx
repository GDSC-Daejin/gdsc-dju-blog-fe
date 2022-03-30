import React, { useEffect, useState } from 'react';
import { IBlogCardDataProps } from '../../types/postDataType';
import { LayoutContainer } from '../../styles/layouts';
import BlogCard from '../../components/common/BlogCard';
import { BlogCardWrapper, BlogCardGridLayout } from './styled';
import CategoryMenu from '../../components/common/CategoryMenu';
import axios from 'axios';

const Category = () => {
  const arr = Array(100)
    .fill(null)
    .map((v, i) => i + 1);
  const [PostData, setPostData] = useState<IBlogCardDataProps[]>();

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        'https://gdsc-dju.com/api/v1/post/list?page=0&size=16',
      );
      setPostData(result.data.body.data.content);
    }
    fetchData();
  }, []);

  return (
    <LayoutContainer>
      <h3>카테고리 페이지</h3>
      <CategoryMenu type="frontend" />
      <BlogCardGridLayout>
        {PostData?.map((data, index) => (
          <BlogCardWrapper key={data.postId}>
            <BlogCard CardData={data} />
          </BlogCardWrapper>
        ))}
      </BlogCardGridLayout>
    </LayoutContainer>
  );
};

export default Category;
