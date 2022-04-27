import React from 'react';
import { BlogCardWrapper, BlogCardGridLayoutStyle } from './styled';
import BlogCard from '../BlogCard/index';
import { DetailPostDataType } from '../../../types/postData';

interface IBlogCardGridLayout {
  PostData: DetailPostDataType[];
}

const BlogCardGridLayout = (props: IBlogCardGridLayout) => {
  const { PostData } = props;
  return (
    <BlogCardGridLayoutStyle>
      {PostData.map((data) => (
        <BlogCardWrapper key={data.postId}>
          <BlogCard postData={data} />
        </BlogCardWrapper>
      ))}
    </BlogCardGridLayoutStyle>
  );
};

export default BlogCardGridLayout;
