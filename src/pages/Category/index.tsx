import React from 'react';
import { LayoutContainer } from '../../styles/layouts';
import BlogCard from '../../components/common/BlogCard';
import { BlogCardWrapper, BlogCardGridLayout } from './styled';
import CategoryMenu from '../../components/common/CategoryMenu';

const Category = () => {
  const arr = Array(100)
    .fill(null)
    .map((v, i) => i + 1);

  return (
    <LayoutContainer>
      <h3>카테고ㅓ리 페이지</h3>
      <CategoryMenu type="frontend" />
      <BlogCardGridLayout>
        {arr.map((data, index) => (
          <BlogCardWrapper key={data}>
            <BlogCard Home={false} />
          </BlogCardWrapper>
        ))}
      </BlogCardGridLayout>
    </LayoutContainer>
  );
};

export default Category;
