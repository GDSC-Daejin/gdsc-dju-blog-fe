import { watch } from 'fs';
import React, { useState } from 'react';
import BottomArrow from '../../../Images/BottomArrow';
import { IFormStructure, errorCheck } from '../SignUpForm/FormStructureInfo';
import {
  SelectBoxWrapper,
  SignUpSelectBoxInner,
  SignUpDefaultSelectBox,
  SignUpSelectBox,
  SignUpSelectOption,
  ArrowWrapper,
  SignUpColorCircle,
  SignUpInputLabel,
  SignUpInputLabelText,
  SignUpInputLabelCircle,
} from './styled';

const SignUpSelect = ({
  refName,
  type,
  title,
  condition,
  register,
  setValue,
  watch,
  errors,
}: IFormStructure) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const PositionOption = ['FE', 'BE', 'DE', 'Android', 'Common'];
  const OptionOnClick = (data: string) => {
    setSelectOpen((prev) => {
      return !prev;
    });
    setValue('position', data, {
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  return (
    <SelectBoxWrapper>
      <SignUpInputLabel>
        <SignUpInputLabelText htmlFor={refName}>{title}</SignUpInputLabelText>
        <SignUpInputLabelCircle />
      </SignUpInputLabel>
      <SignUpSelectBoxInner>
        <SignUpDefaultSelectBox type={type} {...register(refName, condition)} />
        <SignUpSelectBox
          errorCheck={errorCheck(errors?.message)}
          BoxOpen={selectOpen}
        >
          <SignUpSelectOption
            onClick={() => setSelectOpen(!selectOpen)}
            selected={false}
          >
            {watch('position', '') === '' ? '선택' : watch('position')}
            <ArrowWrapper BoxOpen={selectOpen}>
              <BottomArrow />
            </ArrowWrapper>
          </SignUpSelectOption>
          {PositionOption.map((data, index) => (
            <SignUpSelectOption
              key={index}
              onClick={() => OptionOnClick(data)}
              selected={watch('position') === data ? true : false}
            >
              <SignUpColorCircle color={data} />
              {data}
            </SignUpSelectOption>
          ))}
        </SignUpSelectBox>
      </SignUpSelectBoxInner>
    </SelectBoxWrapper>
  );
};

export default SignUpSelect;
