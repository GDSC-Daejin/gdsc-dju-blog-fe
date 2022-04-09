import styled from 'styled-components';
import { assetColors } from '../../../styles/assetColors';

export const SignUpFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 38px;
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
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.03em;
  align-self: flex-end;
  cursor: ${(props) => (props.isValid ? 'pointer' : 'not-allowed')};
`;
