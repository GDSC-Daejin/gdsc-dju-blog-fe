import React from 'react';
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
const SideCategoryMenu = (props: Iprops) => {
  const { onClick, type } = props;

  const categoryName = ['frontend', 'backend', 'android', 'design', 'beginner'];
  const category = ['Frontend', 'Backend', 'Android', 'Design', 'Common'];
  const hoverMotion = {
    isActive: {
      translateX: 10,
      color: '#191F28',
      transition: {
        delay: 0.1,
        duration: 0.3,
      },
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
      x: 0,
    },
    isUnActive: {
      x: -20,
      opacity: 0,
    },
  };
  const hoverTextMotion = {
    isActive: {
      transition: {
        delay: 0.1,
        duration: 0.3,
      },
      borderBottom: '1px solid #000',
    },
    isUnActive: {
      transition: {
        delay: 0.1,
        duration: 0.3,
      },
      borderBottom: '1px solid #fff',
    },
  };
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
            variants={hoverMotion}
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
              variants={hoverTextMotion}
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
