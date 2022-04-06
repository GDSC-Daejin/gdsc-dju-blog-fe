import React, { useState } from 'react';
import { BlogCardButton } from './styled';

interface IBlogCardButton {
  ScrollX: number;
  scrollRef: React.RefObject<HTMLDivElement>;
}

export const BlogCardScrollButton = ({
  ScrollX,
  scrollRef,
}: IBlogCardButton) => {
  const [buttonDisabled, setButtonDisabled] = useState(-1);
  const ButtonNumber: number[] = [0, 1, 2];
  const SectionScrollWidth = 1490;
  const scrollMove = (buttonNumber: number) => {
    setButtonDisabled(buttonNumber);
    scrollRef.current?.scrollTo({
      top: 0,
      left: SectionScrollWidth * (buttonNumber / 2),
      behavior: 'smooth',
    });
    setTimeout(() => {
      setButtonDisabled(-1);
    }, 1000);
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
          disabled={buttonDisabled === BtnNumber && true}
        />
      ))}
    </>
  );
};

export default BlogCardScrollButton;
