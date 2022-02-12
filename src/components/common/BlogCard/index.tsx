import React from 'react';
import {
  BlogCardBottomBox,
  BlogCardInner,
  BlogCardTitle,
  BlogCardWrapper,
  StyledImage,
} from './styled';
import YellowBanner from '../../../Images/YellowBanner.svg';

const BlogCard = () => {
  return (
    <BlogCardWrapper>
      <BlogCardInner route={YellowBanner}>
        <BlogCardBottomBox>
          <BlogCardTitle>제목이 들어갈거에요</BlogCardTitle>
        </BlogCardBottomBox>
      </BlogCardInner>
    </BlogCardWrapper>
  );
};

export default BlogCard;
