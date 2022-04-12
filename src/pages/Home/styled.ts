import styled from 'styled-components';

export const MainContentWrapper = styled.section<{ isDrag: boolean }>`
  width: 100vw;
  position: relative;
  cursor: ${(props) => (props.isDrag ? 'grabbing' : 'grab')};
  display: flex;
  align-self: center;
  flex-direction: column;
  overflow-x: scroll;
  box-sizing: border-box;
  @media (min-width: 1700px) {
    padding: 0px 50px 0px 330px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  &::-moz-scrollbar {
    display: none;
  }
  &::-ms-scrollbar {
    display: none;
  }
  &::-o-scrollbar {
    display: none;
  }
`;

export const CategoryMenuWrapper = styled.div`
  margin-top: 60px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
