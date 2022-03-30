import styled from 'styled-components';

export const BlogCardGridLayout = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 248px);
  justify-content: center;
  align-items: center;
  grid-row-gap: 80px;
  grid-column-gap: 30px;
  margin: 35px 0px 140px;
`;

export const BlogCardWrapper = styled.article`
  width: 248px;
  height: 294px;
`;
