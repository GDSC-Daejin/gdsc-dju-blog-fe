import React from 'react';
import { BlogCardWrapper, BlogCardGridLayoutStyle } from './styled';
import BlogCard from '../BlogCard/index';
import { detailPostDataType } from '../../../types/postData';

interface IBlogCardGridLayout {
  PostData: detailPostDataType[];
}

const BlogCardGridLayout = (props: IBlogCardGridLayout) => {
  const { PostData } = props;
  return (
    <BlogCardGridLayoutStyle>
      {PostData.length ? (
        PostData.map((data) => (
          <BlogCardWrapper key={data.postId}>
            <BlogCard CardData={data} />
          </BlogCardWrapper>
        ))
      ) : (
        <h6>페이지가없습니다</h6>
      )}
    </BlogCardGridLayoutStyle>
  );
};

export default BlogCardGridLayout;
