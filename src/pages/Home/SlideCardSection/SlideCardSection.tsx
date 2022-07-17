import React, { memo } from 'react';
import BlogCard from '../../../components/common/BlogCard';
import { DetailPostDataType } from '../../../types/postData';
import { BlogCardWrapper, CardSection } from './styled';

interface ISlideCardSectionProps {
  PostData: DetailPostDataType[];
}

const SlideCardSection = (props: ISlideCardSectionProps) => {
  const { PostData } = props;

  return (
    <CardSection>
      {PostData.map((postData) => (
        <BlogCardWrapper key={postData.postId}>
          <BlogCard postData={postData} />
        </BlogCardWrapper>
      ))}
    </CardSection>
  );
};

export default memo(SlideCardSection);
