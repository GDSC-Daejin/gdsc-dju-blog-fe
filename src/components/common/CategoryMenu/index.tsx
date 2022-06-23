import React, { memo, useCallback } from 'react';
import {
  CategoryCircle,
  CategoryCircleWrapper,
  CategoryMenuWrapper,
  CategoryText,
  CategoryTextWrapper,
  GDSCLogoWrapper,
} from './styled';
import { positionColor } from '../../../store/positionColor';
import GdscLogo from '../../../assets/GdscLogo';

type Iprops = {
  onClick?: (url: string) => void;
  type: string;
};

const categoryName = [
  'all',
  'frontend',
  'backend',
  'android',
  'design',
  'common',
];
const category = ['ALL', 'Frontend', 'Backend', 'Android', 'Design', 'Common'];
const hoverMotion = {
  isActive: {
    translateY: -10,
    color: '#191F28',
    transition: {
      delay: 0.1,
      duration: 0.3,
    },
    borderBottom: '1px solid #000',
  },
  isUnActive: {
    translateY: 0,
    color: '#D1D6DB',
    borderBottom: '1px solid #fff',
  },
};
const circleMotion = {
  isActive: {
    opacity: 1,
    y: 0,
  },
  isUnActive: {
    y: -20,
    opacity: 0,
  },
};
const CategoryMenu = (props: Iprops) => {
  const { onClick, type } = props;

  const animate = (value: string, categoryValue: string) => {
    return value === categoryValue ? 'isActive' : 'isUnActive';
  };

  return (
    <CategoryMenuWrapper>
      {category.map((item, id) => (
        <CategoryTextWrapper
          onClick={() => {
            {
              onClick && onClick(categoryName[id]);
            }
          }}
          variants={hoverMotion}
          whileHover={'isActive'}
          animate={animate(type, categoryName[id])}
          key={id}
        >
          <CategoryCircleWrapper
            variants={circleMotion}
            animate={animate(type, categoryName[id])}
          >
            {categoryName[id] === 'all' ? (
              <GDSCLogoWrapper>
                <GdscLogo />
              </GDSCLogoWrapper>
            ) : (
              <CategoryCircle color={positionColor(categoryName[id])} />
            )}
          </CategoryCircleWrapper>
          <CategoryText>{item}</CategoryText>
        </CategoryTextWrapper>
      ))}
    </CategoryMenuWrapper>
  );
};
export default CategoryMenu;
