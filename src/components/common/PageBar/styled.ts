import styled, { css } from 'styled-components';

export const PageBarWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const Number = styled.p`
  font-size: ${(props) => props.theme.fontSize.body1};
`;
export const NumberWrapper = styled.div<{ active: boolean }>`
  cursor: pointer;
  display: flex;
  height: 20px;
  margin-right: 22px;
  width: 16px;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color.grey400};
  transition: all 0.3s ease-in-out;
  ${(props) =>
    props.active &&
    css`
      border-bottom: 1px solid ${(props) => props.theme.color.grey900};
      color: ${(props) => props.theme.color.grey900};
    `}
  &:last-child {
    margin-right: 0;
  }
`;
export const NumberSection = styled.section`
  display: flex;
  flex-direction: row;
  margin: 0 40px;
`;
export const ArrowWrapper = styled.div`
  cursor: pointer;
  display: flex;
  height: 20px;
  width: 20px;
  align-items: center;
  justify-content: center;
`;
