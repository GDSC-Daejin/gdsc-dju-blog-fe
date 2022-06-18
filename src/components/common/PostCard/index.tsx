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

import { hashTageSpreader } from '../../../Utils/hashTageSpreader';
import { dateFilter } from '../../../Utils/dateFilter';
import { DetailPostDataType } from '../../../types/postData';

const PostCard: React.FC<DetailPostDataType> = ({
  title,
  category,
  content,
  postId,
  postHashTags,
  memberInfo,
}) => {
  const [hover, setHover] = useState(false);
  const [marked, setMarked] = useState(false);
  return (
    <PostCardWrapper
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <PostCardImageWrapper>
        <PostCardImage backgroundImage={MockPostImage} />
      </PostCardImageWrapper>
      <PostCardContentWrapper hover={hover}>
        <BookmarkWrapper
          onClick={() => {
            setMarked(!marked);
          }}
        >
          <Bookmark marked={marked} />
        </BookmarkWrapper>
        <PostDate>{dateFilter(category.uploadDate)}</PostDate>
        <PostTitle>{title}</PostTitle>
        {postHashTags && (
          <PostHashTageSection>
            {hashTageSpreader(postHashTags).map((data, id) => (
              <HashTageDark text={data} key={id} />
            ))}
          </PostHashTageSection>
        )}
        <PostContent>{content}</PostContent>
      </PostCardContentWrapper>
    </PostCardWrapper>
  );
};

export default memo(PostCard);
