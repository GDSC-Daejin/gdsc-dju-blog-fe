import React from 'react';
import { BlogCardButton } from './styled';

interface IBlogCardButton {
  ScrollX: number;
  scrollRef: React.RefObject<HTMLDivElement>;
  buttonNumber: number;
}

export const BlogCardScrollButton = ({
  ScrollX,
  scrollRef,
  buttonNumber,
}: IBlogCardButton) => {
  const SectionScrollWidth = 2450;
  const scrollMove = (buttonNumber: number) => {
    scrollRef.current?.scrollTo({
      top: 0,
      left: SectionScrollWidth * (buttonNumber / 2),
      behavior: 'smooth',
    });
  };

  return (
    <BlogCardButton
      ButtonActive={
        ScrollX >= (SectionScrollWidth * buttonNumber) / 2 &&
        ScrollX < (SectionScrollWidth * (buttonNumber + 1)) / 2
          ? true
          : false
      }
      onClick={() => scrollMove(buttonNumber)}
    ></BlogCardButton>
  );
};

export default BlogCardScrollButton;
