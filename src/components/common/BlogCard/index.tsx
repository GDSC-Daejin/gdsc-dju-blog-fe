import React, { useState } from 'react';
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
      delay: 0.1,
      duration: 0.2,
    },
  },
};

export interface IBlogCardProps {
  CardData: {
    memberInfo: {
      nickname: string;
    };
    category: {
      categoryName: string; //타입에 대한 수정 필요
      modifiedAt: string;
      uploadDate: string;
    };
    title: string;
    tmpStore: boolean;
    postHashTags: string;
    postId: number;
    likes: [];
    modifiedAt: string;
    uploadDate: string;
    content: string;
  };
}

// props: ICardData
const BlogCard = (props: IBlogCardProps) => {
  const mockdata = {
    memberInfo: {
      nickname: 'Roccccolliiiii',
    },
    category: {
      categoryName: 'Backend',
      modifiedAt: '2022-03-27T15:09:30.366',
      uploadDate: '2022-03-27T15:09:30.444',
    },
    title: '제목33',
    tmpStore: false,
    postHashTags: 'hi,h,h,h,h',
    postId: 51,
    likes: [],
    modifiedAt: '2022-03-27T07:58:13.501+00:00',
    uploadDate: '2022-03-27T07:58:13.501+00:00',
    content: '내용',
  };

  const { CardData } = props;

  const [IsHovered, setIsHovered] = useState(false);
  const nowLogin = false;
  const Navigate = useNavigate();
  const [marked, setMarked] = useState(false);
  const CardTag: string[] = CardData.postHashTags.split(',');
  const handleUploadDate = (data: string) =>
    data.substring(2, 10).replaceAll('-', '.');

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
                {CardData.memberInfo.nickname}
              </BlogCardSubText>
            </BlogCardAuthorWrapper>
            <BlogCardSubText subText={true}>
              {handleUploadDate(CardData.uploadDate)}
            </BlogCardSubText>
          </BlogCardSubTextWrapper>
        </BlogCardBottomBox>
      </BlogCardInner>
    </AnimateSharedLayout>
  );
};

export default React.memo(BlogCard);
