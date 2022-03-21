import React from 'react';
import {
  CategoryCircle,
  CategoryCircleWrapper,
  CategoryMenuWrapper,
  CategoryText,
  CategoryTextWrapper,
} from './styled';
import { positionColor } from '../../../store/positionColor';
import { sideBarMotion, circleMotion, sideBarTextMotion } from '../Animation';

type Iprops = {
  onClick?: (url: string) => void;
  type: string;
};
const SideCategoryMenu = (props: Iprops) => {
  const { onClick, type } = props;

  const categoryName = [
    'All',
    'frontend',
    'backend',
    'android',
    'design',
    'beginner',
  ];
  const category = [
    'All',
    'Frontend',
    'Backend',
    'Android',
    'Design',
    'Common',
  ];

  return (
    <>
      <CategoryMenuWrapper>
        {category.map((item, id) => (
          <CategoryTextWrapper
            onClick={() => {
              {
                onClick && onClick(categoryName[id]);
              }
            }}
            variants={sideBarMotion}
            whileHover={'isActive'}
            animate={type == categoryName[id] ? 'isActive' : 'isUnActive'}
            key={id}
          >
            <CategoryCircleWrapper
              variants={circleMotion}
              animate={type === categoryName[id] ? 'isActive' : 'isUnActive'}
            >
              <CategoryCircle color={positionColor(categoryName[id])} />
            </CategoryCircleWrapper>
            <CategoryText
              variants={sideBarTextMotion}
              animate={type === categoryName[id] ? 'isActive' : 'isUnActive'}
            >
              {item}
            </CategoryText>
          </CategoryTextWrapper>
        ))}
      </CategoryMenuWrapper>
    </>
  );
};

export default SideCategoryMenu;
