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
      <BlogCardPostText>
        본문 어쩌고 어쩌고 어쩌고 본문 어쩌고 어쩌고 어쩌고 본문 어쩌고 어쩌고
        어쩌고 본문 어쩌고 어쩌고 어쩌고 본문 어쩌고 어쩌고 어쩌고 본문 어쩌고
        어쩌고 본문 어쩌고 어쩌고 어쩌고 본문 어쩌고 어쩌고 어쩌고 본문 어쩌고
      </BlogCardPostText>
    </BlogCardPostTextWrapper>
  );
};
const BottomText = () => {
  return (
    <BlogCardSubTextWrapper>
      <BlogCardAuthorWrapper>
        <BlogCardAuthorImage />
        <BlogCardSubText subText={true}>by</BlogCardSubText>
        <BlogCardSubText bold={true}>Jason</BlogCardSubText>
      </BlogCardAuthorWrapper>
      <BlogCardSubText subText={true}>22.02.02</BlogCardSubText>
    </BlogCardSubTextWrapper>
  );
};
const BlogCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <AnimateSharedLayout>
      <BlogCardInner
        route={YellowBanner}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <BlogCardBottomBox layout initial={{ borderRadius: 0 }}>
          <BlogCardTitle layout>제목입니다아아아아아</BlogCardTitle>
          <AnimatePresence>{isHovered && <PostText />}</AnimatePresence>
          <motion.div layout>
            <BottomText />
          </motion.div>
        </BlogCardBottomBox>
      </BlogCardInner>
    </AnimateSharedLayout>
  );
};

export default BlogCard;
