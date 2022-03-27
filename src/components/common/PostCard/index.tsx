import React, { useState } from 'react';
import {
  BookmarkWrapper,
  PostCardContentWrapper,
  PostCardImage,
  PostCardImageWrapper,
  PostCardWrapper,
  PostContent,
  PostDate,
  PostHashTageSection,
  PostTitle,
} from './styled';
import MockPostImage from '../../../Images/MockPostImage.png';
import { HashTageDark } from '../HashTage';
import Bookmark from '../../../Images/Bookmark';
import { hashTageSpreader } from '../../../pages/MyBlog/BlogHome';
import { detailPostDataType } from '../../../types/postData';

const PostCard = (props: detailPostDataType) => {
  const { title, category, content, postId, postHashTags } = props;

  const [hover, setHover] = useState(false);
  const [marked, setMarked] = useState(false);
  const contentFilter = () => {
    let result;
    hover
      ? (result = `${content.slice(0, 260)}...`)
      : (result = `${content.slice(0, 170)}...`);
    return result;
  };
  const hashTageFilter = (hashTage: { tage: string }[]) => {
    let result;
    hover ? (result = hashTage.slice(0, 10)) : (result = hashTage.slice(0, 3));
    return result;
  };
  const dateFilter = (date: string) => {
    const dateArray = date.slice(0, 10).split('-');
    return `${dateArray[0].slice(2, 4)}.${dateArray[1]}.${dateArray[2]}`;
  };
  return (
    <PostCardWrapper
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <PostCardImageWrapper>
        <PostCardImage src={MockPostImage} />
      </PostCardImageWrapper>
      <PostCardContentWrapper
        whileHover={{
          transition: {
            duration: 0.3,
            delay: 0.2,
          },
        }}
      >
        <BookmarkWrapper
          onClick={() => {
            setMarked(!marked);
          }}
        >
          <Bookmark marked={marked} />
        </BookmarkWrapper>
        <PostDate>{dateFilter(category.uploadDate)}</PostDate>
        <PostTitle>{title}</PostTitle>
        <PostHashTageSection>
          {hashTageSpreader(postHashTags).map((data, id) => (
            <HashTageDark text={data} key={id} />
          ))}
        </PostHashTageSection>
        <PostContent hover={hover}>{contentFilter()}</PostContent>
      </PostCardContentWrapper>
    </PostCardWrapper>
  );
};

export default PostCard;
