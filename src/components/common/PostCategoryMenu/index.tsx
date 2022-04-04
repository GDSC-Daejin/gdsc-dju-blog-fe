import React from 'react';
import { useNavigate } from 'react-router';
import {
  PostCategoryCircle,
  PostCategoryCircleWrapper,
  PostCategoryMenuWrapper,
  PostCategoryText,
  PostCategoryTextWrapper,
} from './styled';
import { PostMenuData } from './PostMenuData';
import { SideBarCategoryAnimation, SideBarCircleAnimation } from '../Animation';
import { positionColor } from '../../../store/positionColor';

const PostCategoryMenu = () => {
  const navigate = useNavigate();

  return (
    <>
      <PostCategoryMenuWrapper>
        {PostMenuData.map((data, id) => (
          <PostCategoryTextWrapper
            key={id}
            variants={SideBarCategoryAnimation}
            whileHover={'isActive'}
          >
            <PostCategoryCircleWrapper variants={SideBarCircleAnimation}>
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
