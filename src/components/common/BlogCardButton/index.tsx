import React from 'react';
import { BlogCardButton } from './styled';

interface IBlogCardButton {
  ScrollX: number;
  scrollRef: React.RefObject<HTMLDivElement>;
}

export const BlogCardScrollButton = ({
  ScrollX,
  scrollRef,
}: IBlogCardButton) => {
  const ButtonNumber: number[] = [0, 1, 2];
  const SectionScrollWidth = 2450;
  const scrollMove = (buttonNumber: number) => {
    scrollRef.current?.scrollTo({
      top: 0,
      left: SectionScrollWidth * (buttonNumber / 2),
      behavior: 'smooth',
    });
  };
  const CalcScrollBtnActive = (BtnActiveNumber: number) => {
    return ScrollX >= (SectionScrollWidth * BtnActiveNumber) / 2 &&
      ScrollX < (SectionScrollWidth * (BtnActiveNumber + 1)) / 2
      ? true
      : false;
  };

  return (
    <>
      {ButtonNumber.map((BtnNumber: number, index: number) => (
        <BlogCardButton
          key={index}
          ButtonActive={CalcScrollBtnActive(BtnNumber)}
          onClick={() => scrollMove(BtnNumber)}
        />
      ))}
    </>
  );
};

export default BlogCardScrollButton;
