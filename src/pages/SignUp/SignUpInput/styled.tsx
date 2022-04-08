import styled from 'styled-components';

export const SignUpInputWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
`;

export const SignUpInputLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
`;

export const SignUpInputLabelText = styled.label`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0em;
  color: ${(props) => props.theme.color.grey900};
`;

export const CheckCircleWrapper = styled.div<{
  checkState: boolean | undefined;
}>`
  display: flex;
  align-items: center;
  path {
    fill: ${(props) =>
      props.checkState
        ? props.theme.color.googleGreen
        : props.theme.color.grey300};
  }
`;

export const SignUpInputLabelCircle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: red;
`;

export const SignUpInputBoxWrapper = styled.div`
  position: relative;
`;

export const SignUpInputBox = styled.input<{ errorCheck: boolean }>`
  width: 512px;
  height: 48px;
  padding: 8px 20px;
  font-size: ${(props) => props.theme.fontSize.body1};
  border: 1px solid
    ${(props) =>
      props.errorCheck ? props.theme.color.tossRed : props.theme.color.grey400};
  box-sizing: border-box;
  border-radius: 10px;
  ::placeholder {
    font-family: Noto Sans KR;
    font-weight: normal;
    font-size: ${(props) => props.theme.fontSize.body1};
    color: ${(props) => props.theme.color.grey400};
  }
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.color.grey400};
  }
  &:hover {
    filter: drop-shadow(0px 0px 2px #90c2ff);
  }
  &:focus {
    filter: drop-shadow(0px 0px 2px #3182f6);
  }
`;

export const NickNameCheckButton = styled.button`
  position: absolute;
  right: 20px;
  top: 7px;
  width: 90px;
  height: 34px;
  font-size: 16px;
  background-color: ${(props) => props.theme.color.grey500};
  border-radius: 17px;
  color: ${(props) => props.theme.color.grey50};
  border: 0px;
`;

export const SignUpErrorMessage = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${(props) => props.theme.color.tossRed};
  bottom: -20px;
  span {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: -0.03em;
  }
`;
