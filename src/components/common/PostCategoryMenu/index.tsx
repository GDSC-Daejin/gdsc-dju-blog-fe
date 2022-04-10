import React, { useState } from 'react';
import {
  PostCategoryCircle,
  PostCategoryCircleWrapper,
  PostCategoryMenuWrapper,
  PostCategoryText,
  PostCategoryTextWrapper,
} from './styled';
import { PostCategoryMenuData } from '../../../pages/PostWrite';
import { PostCategoryAnimation, PostcircleAnimation } from '../Animation';
import { positionColor } from '../../../store/positionColor';

const PostCategoryMenu = () => {
  return (
    <>
      <PostCategoryMenuWrapper>
        {PostCategoryMenuData.map((data, id) => (
          <PostCategoryTextWrapper
            key={id}
            variants={PostCategoryAnimation}
            whileHover={'isActive'}
          >
            <PostCategoryCircleWrapper variants={PostcircleAnimation}>
              <PostCategoryCircle color={positionColor(data.subtitle)} />
            </PostCategoryCircleWrapper>
            <PostCategoryText>{data.title}</PostCategoryText>
          </PostCategoryTextWrapper>
        ))}
      </PostCategoryMenuWrapper>
    </>
  );
};
export default PostCategoryMenu;
