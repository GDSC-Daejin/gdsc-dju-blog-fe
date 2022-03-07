import React, { useState } from 'react';
import { useHover } from 'react-use';
import {
  BlogCardAuthorImage,
  BlogCardAuthorWrapper,
  BlogCardBottomBox,
  BlogCardInner,
  BlogCardPostText,
  BlogCardSubText,
  BlogCardSubTextWrapper,
  BlogCardTitle,
} from './styled';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

const PostTextVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  visiable: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      delay: 0.2,
      duration: 0.5,
    },
  },
};

const BlogCard = () => {
  // const [isHovered, setIsHovered] = useState(false);
  const [BlogCardBottomText, IsHovered] = useHover(BottomText);
  return (
    <AnimateSharedLayout>
      <BlogCardInner>
        <img src="logo512.png" />
        {BlogCardBottomText}
      </BlogCardInner>
    </AnimateSharedLayout>
  );
};

const BottomText = (hovered: boolean) => {
  return (
    <BlogCardBottomBox>
      <BlogCardTitle isHovered={hovered}>제목입니다아아아아아</BlogCardTitle>
      <AnimatePresence>
        {hovered ? (
          <BlogCardPostText
            variants={PostTextVariants}
            initial={'initial'}
            animate={'visiable'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsum,libero? Vel eius deleniti earum architecto magnam non! Eos
            ipsamperferendis esse rerum unde dolor necessitatibus exercitationem
            nostrum facilis sit? Eum.
          </BlogCardPostText>
        ) : null}
      </AnimatePresence>
      <BlogCardSubTextWrapper>
        <BlogCardAuthorWrapper>
          <BlogCardAuthorImage />
          <BlogCardSubText subText={true}>by</BlogCardSubText>
          <BlogCardSubText bold={true}>Jason</BlogCardSubText>
        </BlogCardAuthorWrapper>
        <BlogCardSubText subText={true}>22.02.02</BlogCardSubText>
      </BlogCardSubTextWrapper>
    </BlogCardBottomBox>
  );
};

export default React.memo(BlogCard);
