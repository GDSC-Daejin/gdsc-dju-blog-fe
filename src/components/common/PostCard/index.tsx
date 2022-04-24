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

const PostCard = (props: detailPostDataType) => {
  const { title, category, content, postHashTags } = props;

  const [hover, setHover] = useState(false);
  const [marked, setMarked] = useState(false);
  const contentFilter = useCallback(() => {
    let result;
    hover
      ? (result = `${content.slice(0, 260)}...`)
      : (result = `${content.slice(0, 170)}...`);
    return result;
  }, []);

  const dateFilter = useCallback((date: string) => {
    const dateArray = date.slice(0, 10).split('-');
    return `${dateArray[0].slice(2, 4)}.${dateArray[1]}.${dateArray[2]}`;
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
