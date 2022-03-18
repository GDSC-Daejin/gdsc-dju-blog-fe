import { Field } from 'formik';
import styled, { css } from 'styled-components';

export const StyledInput = styled(Field)<{ disabled?: boolean }>`
  padding: 0 18px;
  margin: 2px 0;
  border: 0;
  border-radius: 10px;
  height: 48px;
  font-size: ${(props) => props.theme.fontSize.body1};
  outline: none;
  flex-grow: 1;
  background: none;
  font-weight: 400;
  color: ${(props) => props.theme.color.grey700};
  &::placeholder {
    color: ${(props) => props.theme.color.grey400};
    font-weight: 300;
  }
  ${(props) =>
    props.disabled &&
    css`
      background: ${(props) => props.theme.color.grey100};
      color: ${(props) => props.theme.color.grey400};
    `}
`;
export const StyledFileInput = styled.form`
  color: ${(props) => props.theme.color.grey500};
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  flex-grow: 1;
  font-weight: 300;
  font-size: ${(props) => props.theme.fontSize.h7};
  padding: 0 18px;
`;

export const StyledInputWrapper = styled.div<{
  color?: string;
  disabled?: boolean;
  error?: boolean;
}>`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px auto 0;
  height: 48px;
  background: #fff;
  border: solid 0;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: inset 0 0 0 1px ${(props) => props.theme.color.grey300};

  ${(props) =>
    props.error &&
    css`
      box-shadow: inset 0 0 0 2px ${props.theme.color.tossRed};
    `}
  transition: 0.3s;
  &:hover {
    box-shadow: inset 0 0 0 2px ${(props) => props.theme.color.tossBlue200};
    ${(props) =>
      props.error &&
      css`
        box-shadow: inset 0 0 0 2px ${props.theme.color.tossRed};
      `}
  }
  .formInput:focus {
    box-sizing: border-box;
    box-shadow: inset 0 0 0 2px ${(props) => props.theme.color.tossBlue500};
    ${(props) =>
      props.error &&
      css`
        box-shadow: inset 0 0 0 2px ${props.theme.color.tossRed};
      `}
  }
  ${(props) =>
    !props.disabled &&
    css`
      &:hover {
        box-shadow: none;
      }
    `}
`;
export const InputImageWrapper = styled.div`
  height: 20px;
  width: 20px;
  margin: 0 -8px 0 18px;
  display: flex;
  align-items: center;
`;
export const ErrorBox = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.tossRed};
  font-size: ${(props) => props.theme.fontSize.body2};
  padding-left: 5px;
`;
