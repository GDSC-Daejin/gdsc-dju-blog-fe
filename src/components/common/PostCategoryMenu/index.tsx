import React from 'react';
import {
  PostCategoryCircle,
  PostCategoryCircleWrapper,
  PostCategoryMenuWrapper,
  PostCategoryText,
  PostCategoryTextWrapper,
} from './styled';
import { PostCategoryMenuData } from '../../../pages/PostWrite';
import { PostCategoryAnimation, PostCircleAnimation } from '../Animation';
import { positionColor } from '../../../store/positionColor';

const PostCategoryMenu: React.FC<{
  onClick: (category: string) => void;
  category: string;
}> = ({ onClick, category }) => {
  return (
    <>
      <PostCategoryMenuWrapper variants={PostCategoryAnimation}>
        {PostCategoryMenuData.map((data, id) => (
          <PostCategoryTextWrapper
            key={id}
            whileHover={'isActive'}
            variants={PostCategoryAnimation}
            onClick={() => onClick(data.title)}
            animate={data.title === category ? 'isActive' : 'unActive'}
          >
            <PostCategoryCircleWrapper variants={PostCircleAnimation}>
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
