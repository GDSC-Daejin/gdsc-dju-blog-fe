import React from 'react';
import { BlogCardWrapper, BlogCardGridLayoutStyle } from './styled';
import { IBlogCardDataProps } from '../../../types/postDataType';
import BlogCard from '../BlogCard/index';

interface IBlogCardGridLayout {
  PostData?: IBlogCardDataProps[];
}

const BlogCardGridLayout = (props: IBlogCardGridLayout) => {
  const { PostData } = props;
  return (
    <BlogCardGridLayoutStyle>
      {PostData?.map((data, index) => (
        <BlogCardWrapper key={data.postId}>
          <BlogCard CardData={data} />
        </BlogCardWrapper>
      ))}
    </BlogCardGridLayoutStyle>
  );
};

export default BlogCardGridLayout;
