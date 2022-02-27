import React from 'react';
import RightArrow from '../../../Images/RightArrow';
import LeftArrow from '../../../Images/LeftArrow';
import {
  ArrowWrapper,
  Number,
  NumberSection,
  NumberWrapper,
  PageBarWrapper,
} from './styled';
import { postListData } from '../../../api/Mocks/postListData';

const PageBar = (props: {
  page: number;
  onClick: (page: number, limit?: number) => void;
}) => {
  const { page, onClick } = props;
  const pageNumber = Math.ceil(postListData.length / 10);
  const array = Array(pageNumber).fill(0);
  return (
    <PageBarWrapper>
      <ArrowWrapper onClick={() => onClick(page - 1)}>
        <LeftArrow />
      </ArrowWrapper>
      <NumberSection>
        {array.map((num, id) => (
          <NumberWrapper
            key={id}
            onClick={() => onClick(id)}
            active={page === id}
          >
            <Number>{id + 1}</Number>
          </NumberWrapper>
        ))}
      </NumberSection>
      <ArrowWrapper onClick={() => onClick(page + 1, pageNumber)}>
        <RightArrow />
      </ArrowWrapper>
    </PageBarWrapper>
  );
};

export default PageBar;
