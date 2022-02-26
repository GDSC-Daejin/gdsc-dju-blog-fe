import React, { useState } from 'react';
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
import YellowBanner from '../../../Images/YellowBanner.svg';
import {
  animate,
  AnimatePresence,
  AnimateSharedLayout,
  motion,
} from 'framer-motion';

interface IisHoverdHook {
  isHovered: boolean;
}

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
      delay: 0.3,
      duration: 1,
    },
  },
};

const BottomText = ({ isHovered }: IisHoverdHook) => {
  return (
    <>
      <BlogCardTitle isHover={isHovered}>제목입니다아아아아아</BlogCardTitle>
      <AnimatePresence>
        {isHovered ? (
          <BlogCardPostText
            variants={PostTextVariants}
            initial={'initial'}
            animate={'visiable'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            libero? Vel eius deleniti earum architecto magnam non! Eos ipsam
            perferendis esse rerum unde dolor necessitatibus exercitationem
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
