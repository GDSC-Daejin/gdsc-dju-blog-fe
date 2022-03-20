import styled from 'styled-components';

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

export const SelectBoxWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const SignUpSelectBoxWrapper = styled.div`
  position: relative;
  width: 512px;
  height: 288px;
  border: 1px solid ${(props) => props.theme.color.grey400};
  box-sizing: border-box;
  border-radius: 10px;
`;

export const SignUpDefaultSelectBox = styled.input`
  display: none;
`;

export const SignUpSelectBox = styled.ul`
  width: 100%;
  height: 100%;
  list-style-type: none;
`;

export const SignUpSelectOption = styled.li`
  width: 100%;
  box-sizing: border-box;
  padding: 11px 32px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
`;

export const LeftArrowWrapper = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 19px;
  right: 22px;
  transition: all 0.3s ease;
  svg {
    transform: rotate(180deg);
  }
`;
