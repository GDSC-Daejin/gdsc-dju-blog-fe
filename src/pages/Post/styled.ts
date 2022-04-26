import styled from 'styled-components';

export const PostHead = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 110px;
  margin-bottom: 15px;
`;
export const PostTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h3};
  color: ${({ theme }) => theme.color.grey900};
  margin-bottom: 23px;
`;

export const PostAuthorWrapper = styled.h1`
  margin-bottom: 23px;
`;
