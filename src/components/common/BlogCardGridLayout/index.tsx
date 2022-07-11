import React from 'react';
import { BlogCardGridLayoutStyle, BlogCardWrapper } from './styled';
import BlogCard from '../BlogCard/index';
import { DetailPostDataType } from '../../../types/postData';

interface IBlogCardGridLayout {
  PostData: DetailPostDataType[];
}

const BlogCardGridLayout: React.FC<IBlogCardGridLayout> = (props) => {
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
