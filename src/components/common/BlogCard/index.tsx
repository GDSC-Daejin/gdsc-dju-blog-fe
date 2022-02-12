import React, { useState } from 'react';
import {
  BlogCardAuthorImage,
  BlogCardAuthorWrapper,
  BlogCardBottomBox,
  BlogCardInner,
  BlogCardPostText,
  BlogCardPostTextWrapper,
  BlogCardSubText,
  BlogCardSubTextWrapper,
  BlogCardTitle,
  BlogCardWrapper,
  StyledImage,
} from './styled';
import YellowBanner from '../../../Images/YellowBanner.svg';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
const PostText = () => {
  return (
    <BlogCardPostTextWrapper
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BlogCardPostText>본문 어쩌고 어쩌고 어쩌고</BlogCardPostText>
    </BlogCardPostTextWrapper>
  );
};
const BottomText = () => {
  return (
    <BlogCardSubTextWrapper>
      <BlogCardAuthorWrapper>
        <BlogCardAuthorImage />
        <BlogCardSubText color={'#8B8B8B'}>by</BlogCardSubText>
        <BlogCardSubText bold={true}>Jason</BlogCardSubText>
      </BlogCardAuthorWrapper>
      <BlogCardSubText color={'#8B8B8B'}>22.02.02</BlogCardSubText>
    </BlogCardSubTextWrapper>
  );
};
const BlogCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);
  return (
    <AnimateSharedLayout>
      <BlogCardWrapper
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <BlogCardInner route={YellowBanner}>
          <BlogCardBottomBox layout initial={{ borderRadius: 10 }}>
            <BlogCardTitle layout>제목입니다아아아아아</BlogCardTitle>
            <AnimatePresence>{isHovered && <PostText />}</AnimatePresence>
            <motion.div layout>
              <BottomText />
            </motion.div>
          </BlogCardBottomBox>
        </BlogCardInner>
      </BlogCardWrapper>
    </AnimateSharedLayout>
  );
};

export default BlogCard;
