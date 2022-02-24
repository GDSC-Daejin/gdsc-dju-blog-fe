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

interface IisHoverdHook {
  isHovered: boolean;
}

const BottomText = ({ isHovered }: IisHoverdHook) => {
  return (
    <>
      <BlogCardTitle>제목입니다아아아아아</BlogCardTitle>
      <BlogCardPostTextWrapper>
        <AnimatePresence>
          {isHovered ? (
            <BlogCardPostText>
              본문 어쩌고 어쩌고 어쩌고 본문 어쩌고 어쩌고 어쩌고 본문 어쩌고
              어쩌고 어쩌고 본문 어쩌고 어쩌고 어쩌고 본문 어쩌고 어쩌고 어쩌고
              본문 어쩌고 어쩌고 본문 어쩌고 어쩌고 어쩌고 본문 어쩌고 어쩌고
              어쩌고 본문 어쩌고
            </BlogCardPostText>
          ) : null}
        </AnimatePresence>
      </BlogCardPostTextWrapper>
      <BlogCardSubTextWrapper>
        <BlogCardAuthorWrapper>
          <BlogCardAuthorImage />
          <BlogCardSubText subText={true}>by</BlogCardSubText>
          <BlogCardSubText bold={true}>Jason</BlogCardSubText>
        </BlogCardAuthorWrapper>
        <BlogCardSubText subText={true}>22.02.02</BlogCardSubText>
      </BlogCardSubTextWrapper>
    </>
  );
};
const BlogCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <AnimateSharedLayout>
      <BlogCardInner>
        <img src="logo512.png" />
        <BlogCardBottomBox
          initial={{ borderRadius: 0 }}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        >
          <BottomText isHovered={isHovered} />
        </BlogCardBottomBox>
      </BlogCardInner>
    </AnimateSharedLayout>
  );
};

export default BlogCard;
