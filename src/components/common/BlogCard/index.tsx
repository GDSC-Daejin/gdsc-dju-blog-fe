import React, { useState } from 'react';
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
} from './styled';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { detailPostDataType } from '../../../types/postData';
import Bookmark from '../../../assets/Bookmark';

const PostTextVariants = {
  initial: {
    opacity: 0,
  },
  visiable: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.2,
    },
  },
};

interface IBlogCardProps {
  CardData: detailPostDataType;
}
const BlogCard = (props: IBlogCardProps) => {
  const { CardData } = props;
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

  const CardTag: string[] = CardData.postHashTags.split(',');
  const handleUploadDate = (data: string) =>
    data.substring(2, 10).replaceAll('-', '.');

  return (
    <AnimateSharedLayout>
      <BlogCardInner>
        {/* 북마크 */}
        <BookMarkWrapper onClick={setBookmarkClip}>
          <Bookmark marked={marked} />
        </BookMarkWrapper>
        {/* 이미지 */}
        <BlogCardThumbnail src={BlogCardImage} />
        {/* 태그 */}
        <BlogCardTagWrapper IsHovered={IsHovered}>
          {CardTag.filter((data, index) => index < 2).map(
            (data: string, index: number) => (
              <BlogCardTag key={index}>
                <span>
                  #
                  {data.length > 12
                    ? data.substring(0, 12).concat('...')
                    : data}
                </span>
              </BlogCardTag>
            ),
          )}
        </BlogCardTagWrapper>
        {/* 하단 Content */}
        <BlogCardBottomBox
          isHovered={IsHovered}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        >
          <BlogCardTitle>{CardData.title}</BlogCardTitle>
          <AnimatePresence>
            {IsHovered && (
              <BlogCardPostText
                variants={PostTextVariants}
                initial={'initial'}
                animate={'visiable'}
              >
                {CardData.content}
              </BlogCardPostText>
            )}
          </AnimatePresence>
          <BlogCardSubTextWrapper>
            <BlogCardAuthorWrapper>
              <BlogCardAuthorImage />
              <BlogCardSubText subText={true}>by</BlogCardSubText>
              <BlogCardSubText bold={true}>
                {CardData.memberInfo.nickname === null
                  ? 'Guest'
                  : CardData.memberInfo.nickname}
              </BlogCardSubText>
            </BlogCardAuthorWrapper>
            <BlogCardSubText subText={true}>
              {handleUploadDate(CardData.category.uploadDate)}
            </BlogCardSubText>
          </BlogCardSubTextWrapper>
        </BlogCardBottomBox>
      </BlogCardInner>
    </AnimateSharedLayout>
  );
};

export default React.memo(BlogCard);
