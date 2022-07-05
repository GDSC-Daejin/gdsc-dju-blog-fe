import React, { memo, useCallback, useState } from 'react';
import BlogCardImage from '../../../assets/mocks/unknown.png';
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
  PostText,
} from './styled';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { hashTageSpreader } from '../../../Utils/hashTageSpreader';
import { dateFilter } from '../../../Utils/dateFilter';
import { HashTageLight } from '../HashTage';
import { DetailPostDataType } from '../../../types/postData';
import Bookmark from '../../../assets/Bookmark';

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
}

const BlogCard: React.FC<BlogCardProps> = ({ postData }) => {
  const [IsHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const linkToPost = useCallback(() => {
    navigate(`/${postData.memberInfo.nickname}/${postData.postId}`);
  }, [postData]);

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
        {/*<BookMarkWrapper onClick={setBookmarkClip}>*/}
        {/*  <Bookmark marked={marked} />*/}
        {/*</BookMarkWrapper>*/}
        {/* 이미지 */}
        <BlogCardThumbnail src={BlogCardImage} alt="BlogCardThumbnail" />
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
                <PostText children={removeMarkdownInContent} />
              </BlogCardPostText>
            )}
          </AnimatePresence>
          <BlogCardSubTextWrapper>
            <BlogCardAuthorWrapper>
              <BlogCardAuthorImage
                alt="AuthorImage"
                src={postData.memberInfo.member.profileImageUrl}
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
