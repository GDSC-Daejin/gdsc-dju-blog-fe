import React, { useState } from 'react';
import {
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

const PostCard = () => {
  const hashTage = [
    'React',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'SWR',
    'Recoil',
    'Next.js',
    'Gatsby',
    'React Hooks',
    'Redux',
  ];
  const [hover, setHover] = useState(false);
  return (
    <PostCardWrapper
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
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
        <PostDate>22.02.10</PostDate>
        <PostTitle>Привет, мир!</PostTitle>
        <PostHashTageSection>
          {hashTage.map((data, id) => (
            <HashTageDark text={data} key={id} />
          ))}
        </PostHashTageSection>
        <PostContent hover={hover}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          euismod, ipsum eget sagittis consectetur, nisl urna aliquet nunc.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          euismod, ipsum eget sagittis consectetur, nisl urna aliquet nunc.
        </PostContent>
      </PostCardContentWrapper>
    </PostCardWrapper>
  );
};

export default PostCard;
