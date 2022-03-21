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
  width: 512px;
`;

export const SignUpSelectBoxInner = styled.div`
  position: relative;
  width: 512px;
  height: 48px;
  background-color: #fff;
`;

export const SignUpDefaultSelectBox = styled.input`
  display: none;
`;

export const SignUpSelectBox = styled.ul<{
  errorCheck: boolean;
  BoxOpen: boolean;
}>`
  position: relative;
  width: 512px;
  /* height: 48px; 288px; */
  height: ${(props) => (props.BoxOpen ? '288px' : '48px')};
  z-index: 30;
  background-color: #fff;
  list-style-type: none;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.color.grey400};
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid
    ${(props) =>
      props.errorCheck ? props.theme.color.tossRed : props.theme.color.grey400};
  li:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
      background-color: rgba(0, 0, 0, 0);
    }
  }
`;
export const SignUpSelectOption = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  box-sizing: border-box;
  cursor: pointer;
  padding: 11px 20px;
  color: ${(props) => props.theme.color.grey400};
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  &:hover {
    background-color: ${(props) => props.theme.color.grey100};
  }
`;

const handleColorType = (color: string) => {
  switch (color) {
    case 'FE':
      return assetColors.GDSC_Red;
    case 'BE':
      return assetColors.GDSC_Blue;
    case 'DE':
      return assetColors.GDSC_Yellow;
    case 'Android':
      return assetColors.GDSC_Green;
    case 'Common':
      return assetColors.Common;
  }
};

export const SignUpColorCircle = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  background-color: ${(props) => handleColorType(props.color)};
  border-radius: 50%;
`;

export const ArrowWrapper = styled.div<{ BoxOpen: boolean }>`
  transition: all 0.3s ease;
  svg {
    transform: ${(props) => props.BoxOpen && 'rotate(180deg)'};
  }
`;
