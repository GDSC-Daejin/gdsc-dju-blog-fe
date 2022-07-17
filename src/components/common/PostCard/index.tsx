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
import MockPostImage from '../../../assets/mocks/MockPostImage.jpg';
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
  imagePath,
}) => {
  const [hover, setHover] = useState(false);
  const [marked, setMarked] = useState(false);
  const removeMarkdownInContent = content
    .replace(/!\[.*\]/gi, '') // ![] 제거
    .replace(/\(.*\)/gi, '') // ( ) 제거
    .replace(/\|/gi, '') // | 제거
    .replace(/#/gi, '') // # 제거
    .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g, ' ') // # 제거
    .replace(/-/gi, ''); // @ 제거
  return (
    <PostCardWrapper
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <BookmarkWrapper
        onClick={() => {
          setMarked(!marked);
        }}
      >
        <Bookmark marked={marked} />
      </BookmarkWrapper>
      <PostCardImageWrapper>
        <PostCardImage src={imagePath ?? MockPostImage} />
      </PostCardImageWrapper>
      <PostCardContentWrapper hover={hover}>
        <PostDate>{dateFilter(category.uploadDate)}</PostDate>
        <PostTitle>{title}</PostTitle>
        {postHashTags && (
          <PostHashTageSection>
            {hashTageSpreader(postHashTags).map((data, id) => (
              <HashTageDark text={data} key={id} />
            ))}
          </PostHashTageSection>
        )}
        <PostContent>{removeMarkdownInContent}</PostContent>
      </PostCardContentWrapper>
    </PostCardWrapper>
  );
};

export default memo(PostCard);
