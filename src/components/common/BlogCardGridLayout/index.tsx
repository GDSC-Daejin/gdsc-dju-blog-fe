import React from 'react';
import { BlogCardWrapper, BlogCardGridLayoutStyle } from './styled';
import BlogCard from '../BlogCard/index';
import { detailPostDataType } from '../../../types/postData';

interface IBlogCardGridLayout {
  PostData: detailPostDataType[] | undefined;
  isError?: any;
  isLoading?: boolean;
}

const BlogCardGridLayout = (props: IBlogCardGridLayout) => {
  const { PostData, isError, isLoading } = props;
  return (
    <BlogCardGridLayoutStyle>
      {isLoading ? (
        <h3>Loading..</h3>
      ) : (
        PostData?.map((data) => (
          <BlogCardWrapper key={data.postId}>
            <BlogCard CardData={data} />
          </BlogCardWrapper>
        ))
      )}
    </BlogCardGridLayoutStyle>
  );
};

export default BlogCardGridLayout;
