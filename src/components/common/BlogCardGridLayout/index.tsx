import React from 'react';
import { BlogCardGridLayoutStyle, BlogCardWrapper } from './styled';
import BlogCard from '../BlogCard/index';
import { DetailPostDataType } from '../../../types/postData';
import { useGetMyScrapData } from '../../../api/hooks/useGetMyScrapData';

interface IBlogCardGridLayout {
  PostData: DetailPostDataType[];
}

const BlogCardGridLayout: React.FC<IBlogCardGridLayout> = (props) => {
  const { PostData } = props;
  const { scrapData } = useGetMyScrapData();
  const scrapList =
    scrapData?.data.content.map((v) => {
      return v.post[0].postId;
    }) ?? [];

  return (
    <BlogCardGridLayoutStyle>
      {PostData.map((data) => (
        <BlogCardWrapper key={data.postId}>
          <BlogCard postData={data} isScrap={scrapList.includes(data.postId)} />
        </BlogCardWrapper>
      ))}
    </BlogCardGridLayoutStyle>
  );
};

export default BlogCardGridLayout;
