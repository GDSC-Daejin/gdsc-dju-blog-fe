import React from 'react';
import { BlogCardWrapper, BlogCardGridLayoutStyle } from './styled';
import BlogCard from '../BlogCard/index';
import { detailPostDataType } from '../../../types/postData';

interface IBlogCardGridLayout {
  PostData: detailPostDataType[] | undefined;
  error?: any;
}

const BlogCardGridLayout = (props: IBlogCardGridLayout) => {
  const { PostData, error } = props;
  return (
    <BlogCardGridLayoutStyle>
      {error || PostData?.length === 0 || PostData === undefined ? (
        <h3>해당 페이지에 문제가 발생했습니다</h3>
      ) : (
        PostData.map((data) => (
          <BlogCardWrapper key={data.postId}>
            <BlogCard CardData={data} />
          </BlogCardWrapper>
        ))
      )}
    </BlogCardGridLayoutStyle>
  );
};

export default BlogCardGridLayout;
