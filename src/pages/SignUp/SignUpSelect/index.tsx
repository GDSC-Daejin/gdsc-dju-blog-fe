import React, { useState } from 'react';
import BottomArrow from '../../../assets/BottomArrow';
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
  const PositionOption = [
    'Frontend',
    'Backend',
    'Designer',
    'Android',
    'Beginner',
  ];
  const OptionOnClick = (data: string) => {
    setSelectOpen((prev) => {
      return !prev;
    });
    setValue &&
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
            {watch && watch('position', '') === ''
              ? '선택'
              : watch && watch('position')}
            <ArrowWrapper BoxOpen={selectOpen}>
              <BottomArrow />
            </ArrowWrapper>
          </SignUpSelectOption>
          {PositionOption.map((data, index) => (
            <SignUpSelectOption
              key={index}
              onClick={() => OptionOnClick(data)}
              selected={watch && watch('position') === data ? true : false}
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
