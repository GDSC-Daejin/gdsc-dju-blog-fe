import React from 'react';
import { LayoutContainer } from '../../styles/layouts';
import BlogCard from '../../components/common/BlogCard';
import { BlogCardWrapper } from './styled';

const Category = () => {
  return (
    <LayoutContainer>
      <BlogCardWrapper>
        <BlogCard Home={false} />
      </BlogCardWrapper>
    </LayoutContainer>
  );
};

export default Category;
