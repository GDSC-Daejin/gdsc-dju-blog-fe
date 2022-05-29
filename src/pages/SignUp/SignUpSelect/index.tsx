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
      setValue('positionType', data, {
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
            {watch && watch('positionType', '') === ''
              ? '선택'
              : watch && watch('positionType')}
            <ArrowWrapper BoxOpen={selectOpen}>
              <BottomArrow />
            </ArrowWrapper>
          </SignUpSelectOption>
          {PositionOption.map((data, index) => (
            <SignUpSelectOption
              key={index}
              onClick={() => OptionOnClick(data)}
              selected={watch && watch('positionType') === data ? true : false}
            >
              <SignUpColorCircle position={data} />
              {data}
            </SignUpSelectOption>
          ))}
        </SignUpSelectBox>
      </SignUpSelectBoxInner>
    </SelectBoxWrapper>
  );
};

export default SignUpSelect;
