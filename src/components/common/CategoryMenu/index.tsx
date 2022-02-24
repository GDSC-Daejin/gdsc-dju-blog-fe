import { useCycle } from 'framer-motion';
import React, { useState } from 'react';
import {
  CategoryCircle,
  CategoryCircleWrapper,
  CategoryMenuWrapper,
  CategoryText,
  CategoryTextWrapper,
} from './styled';
import { positionColor } from '../../../store/positionColor';

type Iprops = {
  onClick?: (url: string) => void;
  type: string;
};
const CategoryMenu = (props: Iprops) => {
  const { onClick, type } = props;
  const [hovered, setHovered] = useState('');

  const categoryName = [
    'all',
    'frontend',
    'backend',
    'android',
    'design',
    'beginner',
  ];
  const category = [
    'ALL',
    'Frontend',
    'Backend',
    'Android',
    'Design',
    'Common',
  ];
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
  return (
    <>
      <CategoryMenuWrapper>
        {category.map((item, id) => (
          <CategoryTextWrapper
            onMouseOver={() => setHovered(categoryName[id])}
            onClick={() => {
              {
                onClick && onClick(categoryName[id]);
              }
            }}
            variants={hoverMotion}
            whileHover={'isActive'}
            animate={type == categoryName[id] ? 'isActive' : 'isUnActive'}
            key={id}
          >
            <CategoryCircleWrapper
              variants={circleMotion}
              animate={type == categoryName[id] ? 'isActive' : 'isUnActive'}
            >
              <CategoryCircle color={positionColor(categoryName[id])} />
            </CategoryCircleWrapper>
            <CategoryText>{item}</CategoryText>
          </CategoryTextWrapper>
        ))}
      </CategoryMenuWrapper>
    </>
  );
};

export default CategoryMenu;
