import styled from 'styled-components';

export const SignUpForm = styled.form`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;

export const SignUpInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  border: 1px solid #b0b8c1;
  box-sizing: border-box;
  border-radius: 10px;
  ::placeholder {
    color: ${(props) => props.theme.color.grey400};
  }
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.color.grey400};
  }
`;

export const SignUpInputBoxErrorMessage = styled.span`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.03em;
`;
