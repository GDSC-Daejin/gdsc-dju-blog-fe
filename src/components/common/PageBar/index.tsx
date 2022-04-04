import React from 'react';
import RightArrow from '../../../Images/RightArrow';
import LeftArrow from '../../../Images/LeftArrow';
import {
  ArrowWrapper,
  Number,
  NumberCircle,
  NumberSection,
  NumberWrapper,
  PageBarWrapper,
} from './styled';

const circleMotion = {
  isActive: {
    opacity: 1,
    y: 0,
  },
  isUnActive: {
    y: -10,
    opacity: 0,
  },
};
const PageBar = (props: {
  page: number;
  totalPage: number;
  onClick: (page: number, limit?: number) => void;
}) => {
  const { page, onClick, totalPage } = props;
  const array = Array(totalPage).fill(0);
  return (
    <PageBarWrapper>
      <ArrowWrapper onClick={() => onClick(page < 1 ? 0 : page - 1)}>
        <LeftArrow />
      </ArrowWrapper>
      <NumberSection>
        {array.map((num, id) => (
          <NumberWrapper
            key={id}
            onClick={() => onClick(id)}
            active={page === id}
          >
            <NumberCircle
              variants={circleMotion}
              animate={page === id ? 'isActive' : 'isUnActive'}
            />
            <Number>{id + 1}</Number>
          </NumberWrapper>
        ))}
      </NumberSection>
      <ArrowWrapper onClick={() => onClick(page + 1, totalPage)}>
        <RightArrow />
      </ArrowWrapper>
    </PageBarWrapper>
  );
};

export default PageBar;
