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

/*type Iprops = {
  onClick?: (url: string) => void;
  type: string;
};
const [animate, setAnimate] = useState('');
*/
const PostCategoryMenu: React.FC<{
  onClick: (category: string) => void;
  category: string;
}> = ({ onClick, category }) => {
  return (
    <>
      <PostCategoryMenuWrapper>
        {PostCategoryMenuData.map((data, id) => (
          <PostCategoryTextWrapper
            key={id}
            variants={PostCategoryAnimation}
            whileHover={'isActive'}
            onClick={() => onClick(data.title)}
            animate={data.title === category ? 'isActive' : 'unActive'}
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
