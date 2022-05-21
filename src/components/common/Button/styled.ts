import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

export const StyledButton = styled.button<{
  color?: keyof typeof theme.color;
  background?: keyof typeof theme.color;
  size?: string;
  disable?: boolean;
  border?: string;
}>`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.grey300};
  font-size: ${(props) => props.theme.fontSize.body2};
  padding: 8px 30px;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(25, 31, 40, 0.08);
  border-radius: 50px;
  ${({ border }) =>
    border &&
    css`
      border: 1px solid ${border};
    `}
  ${({ disable }) =>
    disable &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
  ${({ size }) =>
    size === 'large' &&
    css`
      padding: 8px 86px;
    `}
  ${({ background }) =>
    background &&
    css`
      background: ${({ theme }) => theme.color[background]};
    `}
  ${({ color }) =>
    color &&
    css`
      color: ${({ theme }) => theme.color[color]};
    `}
`;
