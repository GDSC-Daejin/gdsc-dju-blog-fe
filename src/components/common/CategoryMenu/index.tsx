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

const CategoryMenu = () => {
  const [selected, setSelected] = useState(100);

  const categoryName = ['frontend', 'backend', 'android', 'design', 'beginner'];
  const category = ['Frontend', 'Backend', 'Android', 'Design', 'Common'];
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
  return (
    <>
      <CategoryMenuWrapper>
        {category.map((item, id) => (
          <CategoryTextWrapper
            onMouseOver={() => setSelected(id)}
            // onMouseLeave={() => setSelected(100)}
            onClick={() => setSelected(id)}
            variants={hoverMotion}
            whileHover={'isActive'}
            animate={selected === id ? 'isActive' : 'isUnActive'}
            key={id}
          >
            <CategoryCircleWrapper
              animate={selected === id ? { opacity: 1 } : { opacity: 0 }}
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
