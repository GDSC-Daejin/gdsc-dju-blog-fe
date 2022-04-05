import React from 'react';
import {
  PostCategoryCircle,
  PostCategoryCircleWrapper,
  PostCategoryMenuWrapper,
  PostCategoryText,
  PostCategoryTextWrapper,
} from './styled';
import { PostMenuData } from './PostMenuData';
import { PostCategoryAnimation, PostcircleAnimation } from '../Animation';
import { positionColor } from '../../../store/positionColor';

const PostCategoryMenu = () => {
  return (
    <>
      <PostCategoryMenuWrapper>
        {PostMenuData.map((data, id) => (
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
