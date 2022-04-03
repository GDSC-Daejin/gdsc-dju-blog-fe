import React from 'react';
import SideBarCategory from '../SideBar/SideBarCategory';
import { useNavigate } from 'react-router';
import {
  PostCategoryCircle,
  PostCategoryCircleWrapper,
  PostCategoryMenuWrapper,
  PostCategoryText,
  PostCategoryTextWrapper,
  PostGDSCLogoWrapper,
} from './styled';
import { PostMenuData } from './PostMenuData';
import { hoverMotion, circleMotion } from '../Animation';
import GdscLogo from '../../../Images/GdscLogo';
import { positionColor } from '../../../store/positionColor';

const PostCategoryMenu = () => {
  const navigate = useNavigate();

  return (
    <>
      <PostCategoryMenuWrapper>
        {PostMenuData.map((data, id) => (
          <PostCategoryTextWrapper
            key={id}
            variants={hoverMotion}
            whileHover={'isActive'}
          >
            <PostCategoryCircleWrapper variants={circleMotion}>
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
