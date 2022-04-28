import React, { memo } from 'react';
import { CardSection, BlogCardWrapper } from './styled';
import BlogCard from '../../../components/common/BlogCard';
import { DetailPostDataType } from '../../../types/postData';

interface ISlideCardSectionProps {
  PostData: DetailPostDataType[];
}

const SlideCardSection = (props: ISlideCardSectionProps) => {
  const { PostData } = props;

  return (
    <CardSection>
      {PostData.map((postData, index) => (
        <BlogCardWrapper key={postData.postId}>
          <BlogCard postData={postData} />
        </BlogCardWrapper>
      ))}
    </CardSection>
  );
};

export default memo(SlideCardSection);
