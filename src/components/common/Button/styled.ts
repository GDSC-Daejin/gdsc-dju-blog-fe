import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{
  color?: string;
  background?: string;
  size?: string;
  disable?: boolean;
  border?: string;
}>`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.grey300};
  ${(props) =>
    props.border &&
    css`
      border: 1px solid ${props.border};
    `}
  padding: 8px 30px;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.body2};
  color: ${(props) => props.color};
  ${(props) =>
    props.disable &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
  ${(props) =>
    props.size === 'large' &&
    css`
      padding: 8px 86px;
    `}
  box-shadow: 0 2px 12px rgba(25, 31, 40, 0.08);
  border-radius: 50px;
  background: ${(props) => props.background};
`;
