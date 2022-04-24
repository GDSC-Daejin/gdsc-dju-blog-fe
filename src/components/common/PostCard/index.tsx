import React, { memo, useCallback, useState } from 'react';
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
import MockPostImage from '../../../assets/MockPostImage.png';
import { HashTageDark } from '../HashTage';
import Bookmark from '../../../assets/Bookmark';

import { detailPostDataType } from '../../../types/postData';
import { hashTageSpreader } from '../../../Utils/hashTageSpreader';
import { dateFilter } from '../../../Utils/dateFilter';

const PostCard: React.FC<detailPostDataType> = ({
  title,
  category,
  content,
  postId,
  postHashTags,
}) => {
  const [hover, setHover] = useState(false);
  const [marked, setMarked] = useState(false);
  const contentFilter = useCallback(() => {
    let result;
    hover
      ? (result = `${content.slice(0, 260)}...`)
      : (result = `${content.slice(0, 170)}...`);
    return result;
  }, []);
  return (
    <PostCardWrapper
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <PostCardImageWrapper>
        <PostCardImage src={MockPostImage} />
      </PostCardImageWrapper>
      <PostCardContentWrapper>
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

export default memo(PostCard);
