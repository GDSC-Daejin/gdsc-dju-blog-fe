import React, { useState } from 'react';
import { useHover } from 'react-use';
import BlogCardImage from '../../../Images/unknown.png';
import { useNavigate } from 'react-router';
import {
  BlogCardAuthorImage,
  BlogCardAuthorWrapper,
  BlogCardBottomBox,
  BlogCardInner,
  BookMarkWrapper,
  BlogCardPostText,
  BlogCardSubText,
  BlogCardSubTextWrapper,
  BlogCardTitle,
  BlogCardThumbnail,
  BlogCardTag,
  BlogCardTagWrapper,
} from './styled';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Bookmark from '../../../Images/Bookmark';

const PostTextVariants = {
  initial: {
    opacity: 0,
  },
  visiable: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.3,
    },
  },
};

const BlogCard = () => {
  const [BlogCardBottomText, IsHovered] = useHover(BottomText);
  const nowLogin = false;
  const Navigate = useNavigate();
  const [marked, setMarked] = useState(false);
  const CardTag: string[] = [
    'darkmodeeeeeeeeeeeeeeeeeeee',
    'darkmodeeeeeeeeeeeeeeeeeeeeee',
  ];
  const setBookmarkClip = () => {
    if (nowLogin)
      setMarked((prev) => {
        return !prev;
      });
    else {
      alert('로그인 후 이용가능합니다');
      Navigate('/', { replace: false });
    }
  };

  return (
    <AnimateSharedLayout>
      <BlogCardInner>
        <BookMarkWrapper onClick={setBookmarkClip}>
          <Bookmark marked={marked} />
        </BookMarkWrapper>
        <BlogCardThumbnail src={BlogCardImage} />
        <BlogCardTagWrapper IsHovered={IsHovered}>
          {CardTag.map((data: string, index: number) => (
            <BlogCardTag key={index}>
              <span>
                #{data.length > 12 ? data.substring(0, 12).concat('...') : data}
              </span>
            </BlogCardTag>
          ))}
        </BlogCardTagWrapper>
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
        {hovered && (
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
        )}
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
