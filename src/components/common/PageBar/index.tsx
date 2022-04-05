import React from 'react';
import RightArrow from '../../../assets/RightArrow';
import LeftArrow from '../../../assets/LeftArrow';
import {
  ArrowWrapper,
  Number,
  NumberCircle,
  NumberSection,
  NumberWrapper,
  PageBarWrapper,
} from './styled';
import { useNavigate } from 'react-router';

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
  nickname?: string;
  type?: string;
  onClick?: (page: number) => void;
}) => {
  const { page, nickname, totalPage, type, onClick } = props;
  const array = Array(totalPage).fill(0);
  const navigate = useNavigate();
  const pageHandler = (page: number, limit?: number) => {
    if (page < 0) {
      return;
    }
    if (page === limit) {
      return;
    } else {
      onClick === undefined
        ? navigate(`/${nickname}?type=${type}&page=${page}`)
        : onClick(page);
    }
  };

  return (
    <PageBarWrapper>
      <ArrowWrapper onClick={() => pageHandler(page - 1)}>
        <LeftArrow />
      </ArrowWrapper>
      <NumberSection>
        {array.map((num, id) => (
          <NumberWrapper
            key={id}
            onClick={() => pageHandler(id)}
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
      <ArrowWrapper onClick={() => pageHandler(page + 1, totalPage)}>
        <RightArrow />
      </ArrowWrapper>
    </PageBarWrapper>
  );
};

export default PageBar;
