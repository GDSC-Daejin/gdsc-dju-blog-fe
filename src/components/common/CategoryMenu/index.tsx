import React, { useState } from 'react';
import {
  CategoryMenuWrapper,
  CategoryText,
  CategoryTextWrapper,
} from './styled';

const CategoryMenu = () => {
  const [active, setActive] = useState(false);
  const category = ['Frontend', 'Backend', 'Android', 'Design', 'Common'];
  return (
    <>
      <CategoryMenuWrapper>
        {category.map((item, id) => (
          <CategoryTextWrapper
            whileHover={{
              translateY: -20,
              color: '#191F28',
              transition: {
                delay: 0.1,
                duration: 0.3,
              },
            }}
            key={id}
          >
            <CategoryText active={active}>{item}</CategoryText>
          </CategoryTextWrapper>
        ))}
      </CategoryMenuWrapper>
    </>
  );
};

export default CategoryMenu;
