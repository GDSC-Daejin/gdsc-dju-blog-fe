import styled from 'styled-components';

export const SignUpForm = styled.form`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  margin-bottom: 250px;
`;

export const SignUpInputWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 38px;
`;

export const SignUpErrorMessage = styled.span`
  position: absolute;
  color: ${(props) => props.theme.color.tossRed};
  bottom: -20px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.03em;
`;

export const SignUpInputLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;
`;

export const SignUpInputLabelText = styled.label`
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  color: ${(props) => props.theme.color.grey900};
`;

export const SignUpInputLabelCircle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: red;
`;

export const SignUpInputBox = styled.input`
  width: 512px;
  height: 48px;
  padding: 8px 20px;
  border: 1px solid ${(props) => props.theme.color.grey400};
  box-sizing: border-box;
  border-radius: 10px;
  ::placeholder {
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

export const SignUpSelecttBox = styled.select`
  width: 512px;
  height: 48px;
  border: 1px solid ${(props) => props.theme.color.grey400};
  box-sizing: border-box;
  border-radius: 10px;
  &:hover {
    filter: drop-shadow(0px 0px 2px #90c2ff);
  }
  &:focus {
    filter: drop-shadow(0px 0px 2px #3182f6);
  }
`;

export const SignUpButton = styled.button<{ isValid: boolean }>`
  align-content: flex-end;
  width: 111px;
  height: 36px;
  background-color: ${(props) =>
    props.isValid ? '#4385F3' : props.theme.color.tossBlue200};
  color: #fff;
  border: 1px solid ${(props) => props.theme.color.grey200};
  box-sizing: border-box;
  box-shadow: 0px 2px 12px rgba(25, 31, 40, 0.08);
  border-radius: 18px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.03em;
  align-self: flex-end;
  cursor: ${(props) => (props.isValid ? 'pointer' : 'not-allowed')};
`;
