import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import React, { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';

import { DetailPostDataType } from '../../../types/postData';
import { dateFilter } from '../../../Utils/dateFilter';
import { hashTageSpreader } from '../../../Utils/hashTageSpreader';
import Bookmark from '../../../assets/Bookmark';
import { HashTageLight } from '../HashTage';
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
  BlogCardThumbnailWrapper,
  BlogCardTitle,
  BookMarkWrapper,
  PostText,
} from './styled';
import { setBookMarkPostAPI } from '../../../api/hooks/setBookMark';

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
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

interface BlogCardProps {
  postData: DetailPostDataType;
  isScrap: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ postData, isScrap }) => {
  const [IsHovered, setIsHovered] = useState(false);
  const [isMarked, setIsMarked] = useState(isScrap);
  const [cookie] = useCookies(['token']);
  const navigate = useNavigate();

  const linkToPost = useCallback(() => {
    navigate(`/${postData.memberInfo.nickname}/${postData.postId}`);
  }, [postData]);

  const setBookMarkScrap = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (cookie.token) {
      const result = await setBookMarkPostAPI(postData.postId);
      if (result.body.message === 'SUCCESS') setIsMarked(!isMarked);
    } else {
      alert('로그인이 필요한 서비스입니다.');
    }
  };

  const removeMarkdownInContent = postData.content
    .replace(/!\[.*\]/gi, '') // ![] 제거
    .replace(/\(.*\)/gi, '') // ( ) 제거
    .replace(/\|/gi, '') // | 제거
    .replace(/#/gi, '') // # 제거
    .replace(/-/gi, ''); // @ 제거

  return (
    <AnimateSharedLayout>
      <BlogCardInner onClick={linkToPost}>
        {/* 북마크 */}
        <BookMarkWrapper onClick={setBookMarkScrap}>
          <Bookmark marked={isMarked} />
        </BookMarkWrapper>
        {/* 이미지 */}
        <BlogCardThumbnailWrapper>
          <BlogCardThumbnail
            src={postData.imagePath ?? '../../../assets/mocks/unknown.png'}
            alt="BlogCardThumbnail"
          />
        </BlogCardThumbnailWrapper>
        {/* 태그 */}
        {postData.postHashTags && (
          <BlogCardTagWrapper IsHovered={IsHovered}>
            {hashTageSpreader(postData.postHashTags)
              .filter((data, index) => index < 2)
              .map((data: string, index: number) => (
                <HashTageLight key={index} text={data} />
              ))}
          </BlogCardTagWrapper>
        )}
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
                key="BlogCardPostText"
                variants={PostTextVariants}
                initial={'initial'}
                animate={'visible'}
                exit={'exit'}
              >
                <PostText>{removeMarkdownInContent}</PostText>
              </BlogCardPostText>
            )}
          </AnimatePresence>
          <BlogCardSubTextWrapper>
            <BlogCardAuthorWrapper>
              <BlogCardAuthorImage
                alt="AuthorImage"
                // src={postData.memberInfo.member.profileImageUrl}
              />
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
