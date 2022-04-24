import styled, { css } from 'styled-components';

export const HashTageWrapper = styled.div<{ light: boolean }>`
  padding: 1px 10px;
  border: 1px solid ${({ theme }) => theme.color.grey600};
  border-radius: 50px;
  margin-right: 6px;
  opacity: 0.6;
  box-sizing: border-box;
  font-family: 'Google Sans', sans-serif;
  display: flex;
  align-items: center;
  white-space: nowrap;
  ${({ light }) =>
    light &&
    css`
      border: 1px solid ${({ theme }) => theme.color.white};
      color: ${({ theme }) => theme.color.white};
      opacity: 1;
    `};
`;

export const HashTageWrapperS = styled.div<{ light: boolean }>`
  height: 17px;
  padding: 1px 10px;
  border: 1px solid ${(props) => props.theme.color.grey600};
  border-radius: 50px;
  margin-right: 6px;
  opacity: 0.6;
  font-family: 'Google Sans', sans-serif;
  display: flex;
  align-items: center;
  ${(props) =>
    props.light &&
    css`
      border: 1px solid #fff;
    `};
`;
