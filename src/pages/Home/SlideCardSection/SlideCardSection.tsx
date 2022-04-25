import React from 'react';
import { CardSection, BlogCardWrapper } from './styled';
import BlogCard from '../../../components/common/BlogCard';
import { detailPostDataType } from '../../../types/postData';

interface ISlideCardSectionProps {
  PostData: detailPostDataType[];
}

const SlideCardSection = (props: ISlideCardSectionProps) => {
  const { PostData } = props;

  return (
    <CardSection>
      {PostData.map((CardData, index) => (
        <BlogCardWrapper key={CardData.postId}>
          <BlogCard CardData={CardData} />
        </BlogCardWrapper>
      ))}
    </CardSection>
  );
};

export default SlideCardSection;
