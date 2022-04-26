import React, { memo, useCallback, useState } from 'react';
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
  PostText,
} from './styled';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Bookmark from '../../../assets/Bookmark';
import { hashTageSpreader } from '../../../Utils/hashTageSpreader';
import { dateFilter } from '../../../Utils/dateFilter';
import { HashTageLight } from '../HashTage';
import ReactMarkdown from 'react-markdown';
import { detailPostDataType } from '../../../types/postData';

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
  const navigate = useNavigate();

  const linkToPost = useCallback(() => {
    navigate(`/${postData.memberInfo.nickname}/${postData.postId}`);
  }, [postData]);

  const setBookmarkClip = () => {
    if (nowLogin)
      setMarked((prev) => {
        return !prev;
      });
    else {
      alert('로그인 후 이용가능합니다');
      navigate('/', { replace: false });
    }
  };
  const sliceTitle = useCallback(() => {
    const korean = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
    if (korean.test(postData.title)) {
      if (postData.title.length > 12) {
        return postData.title.slice(0, 12) + '...';
      } else {
        return postData.title;
      }
    } else {
      if (postData.title.length > 15) {
        return postData.title.slice(0, 15) + '...';
      } else {
        return postData.title;
      }
    }
  }, []);
  const removeImageInContent = postData.content
    .replace(/!\[.*\]/gi, '') // ![] 제거
    .replace(/\(.*\)/gi, ''); // ( ) 제거
  console.log(removeImageInContent);

  return (
    <AnimateSharedLayout>
      <BlogCardInner onClick={linkToPost}>
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
          <BlogCardTitle>{sliceTitle()}</BlogCardTitle>
          <AnimatePresence>
            {IsHovered && (
              <BlogCardPostText
                variants={PostTextVariants}
                initial={'initial'}
                animate={'visible'}
              >
                <PostText children={removeImageInContent} />
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
