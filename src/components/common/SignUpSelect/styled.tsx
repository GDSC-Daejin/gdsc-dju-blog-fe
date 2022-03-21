import styled from 'styled-components';
import { assetColors } from '../../../styles/assetColors';

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
export const SignUpSelectOption = styled.li<{ selected: boolean }>`
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
  font-size: 16px;
  line-height: 26px;
  background-color: ${(props) => props.selected && props.theme.color.grey100};
  &:hover {
    background-color: ${(props) => props.theme.color.grey100};
  }
`;

const handleColorType = (color: string) => {
  switch (color) {
    case 'Frontend':
      return assetColors.GDSC_Red;
    case 'Backend':
      return assetColors.GDSC_Blue;
    case 'Designer':
      return assetColors.GDSC_Yellow;
    case 'Android':
      return assetColors.GDSC_Green;
    case 'Beginner':
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
  display: flex;
  align-items: center;
  svg {
    transform: ${(props) => props.BoxOpen && 'rotate(180deg)'};
  }
`;

export const SignUpInputLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;
`;

export const SignUpInputLabelText = styled.label`
  font-family: Noto Sans KR;
  font-size: 16px;
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
