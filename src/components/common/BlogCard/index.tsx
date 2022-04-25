import React, { memo, useState } from 'react';
import BlogCardImage from '../../../assets/unknown.png';
import { useNavigate } from 'react-router';
import {
  BlogCardAuthorImage,
  BlogCardAuthorWrapper,
  BlogCardBottomBox,
  BlogCardInner,
  BlogCardPostText,
  BlogCardSubText,
  BlogCardSubTextWrapper,
  BlogCardTagWrapper,
  BlogCardThumbnail,
  BlogCardTitle,
  BookMarkWrapper,
} from './styled';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { detailPostDataType } from '../../../types/postData';
import Bookmark from '../../../assets/Bookmark';
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
      delay: 0.1,
      duration: 0.2,
    },
  },
};

interface BlogCardProps {
  postData: detailPostDataType;
}
const BlogCard: React.FC<BlogCardProps> = ({ postData }) => {
  const [IsHovered, setIsHovered] = useState(false);
  const [marked, setMarked] = useState(false);

  const nowLogin = false;
  const Navigate = useNavigate();
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
        {/* 북마크 */}
        <BookMarkWrapper onClick={setBookmarkClip}>
          <Bookmark marked={marked} />
        </BookMarkWrapper>
        {/* 이미지 */}
        <BlogCardThumbnail src={BlogCardImage} alt="BlogCardThumbnail" />
        {/* 태그 */}
        <BlogCardTagWrapper IsHovered={IsHovered}>
          {hashTageSpreader(postData.postHashTags)
            .filter((data, index) => index < 2)
            .map((data: string, index: number) => (
              <HashTageLight key={index} text={data} />
            ))}
        </BlogCardTagWrapper>
        {/* 하단 Content */}
        <BlogCardBottomBox
          isHovered={IsHovered}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        >
          <BlogCardTitle>{postData.title}</BlogCardTitle>
          <AnimatePresence>
            {IsHovered && (
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
              <BlogCardAuthorImage alt="AuthorImage" />
              <BlogCardSubText subText={true}>by</BlogCardSubText>
              <BlogCardSubText bold={true}>
                {postData.memberInfo.nickname}
              </BlogCardSubText>
            </BlogCardAuthorWrapper>
            <BlogCardSubText subText={true}>
              {dateFilter(postData.category.uploadDate)}
            </BlogCardSubText>
          </BlogCardSubTextWrapper>
        </BlogCardBottomBox>
      </BlogCardInner>
    </AnimateSharedLayout>
  );
};

export default memo(BlogCard);
