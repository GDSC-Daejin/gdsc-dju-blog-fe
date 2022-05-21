import React from 'react';
import styled from 'styled-components';

interface IBlogCardButton {
  ScrollX: number;
  scrollRef: React.RefObject<HTMLDivElement>;
}

export const BlogCardButton = styled.button<{ ButtonActive: boolean }>`
  width: 40px;
  height: 4px;
  background-color: ${(props) =>
    props.ButtonActive ? props.theme.color.grey500 : props.theme.color.grey300};
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
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
