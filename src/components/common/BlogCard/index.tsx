import React, { useState } from 'react';
import { useHover } from 'react-use';
import BlogCardImage from '../../../assets/unknown.png';
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
  BlogCardBottom,
} from './styled';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Bookmark from '../../../assets/Bookmark';
import { detailPostDataType } from '../../../types/postData';
import { hashTageSpreader } from '../../../Utils/hashTageSpreader';
import { dateFilter } from '../../../Utils/dateFilter';
import { HashTageLight } from '../HashTage';

const PostTextVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.3,
    },
  },
};
interface BlogCardProps {
  postData: detailPostDataType;
}

const BlogCard: React.FC<BlogCardProps> = ({ postData }) => {
  const nowLogin = false;
  const Navigate = useNavigate();
  const [marked, setMarked] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const setBookmarkClip = (isLogin: boolean) => {
    if (isLogin)
      setMarked((prev) => {
        return !prev;
      });
    else {
      alert('로그인 후 이용가능합니다');
      Navigate('/123', { replace: false });
    }
  };
  return (
    <AnimateSharedLayout>
      <BlogCardInner>
        <BookMarkWrapper onClick={() => setBookmarkClip(nowLogin)}>
          <Bookmark marked={marked} />
        </BookMarkWrapper>
        <BlogCardThumbnail src={BlogCardImage} />
        <BlogCardBottom
          isHovered={isHovered}
          onMouseOver={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <BlogCardTagWrapper>
            {hashTageSpreader(postData.postHashTags).map((data, id) => (
              <HashTageLight text={data} key={id} />
            ))}
          </BlogCardTagWrapper>
          <BottomText isHovered={isHovered} postData={postData} />
        </BlogCardBottom>
      </BlogCardInner>
    </AnimateSharedLayout>
  );
};
const BottomText: React.FC<{
  isHovered: boolean;
  postData: detailPostDataType;
}> = ({ isHovered, postData }) => {
  return (
    <BlogCardBottomBox>
      <BlogCardTitle isHovered={isHovered}>{postData.title}</BlogCardTitle>
      <AnimatePresence>
        {isHovered && (
          <BlogCardPostText
            variants={PostTextVariants}
            initial={'initial'}
            animate={'visible'}
          >
            {postData.content}
          </BlogCardPostText>
        )}
      </AnimatePresence>
      <BlogCardSubTextWrapper>
        <BlogCardAuthorWrapper>
          <BlogCardAuthorImage />
          <BlogCardSubText subText={true}>by</BlogCardSubText>
          <BlogCardSubText bold={true}>
            {postData.memberInfo.nickname}
          </BlogCardSubText>
        </BlogCardAuthorWrapper>
        <BlogCardSubText subText={true}>
          {dateFilter(postData.uploadDate)}
        </BlogCardSubText>
      </BlogCardSubTextWrapper>
    </BlogCardBottomBox>
  );
};
export default React.memo(BlogCard);
