import React from 'react';
import { IFormStructure, errorCheck } from '../SignUpForm/FormStructureInfo';
import {
  SignUpInputWrapper,
  SignUpInputLabel,
  SignUpInputBox,
  NickNameCheck,
  SignUpErrorMessage,
  SignUpInputLabelCircle,
  SignUpInputLabelText,
} from './styled';
import InputWarning from '../../../assets/InputWarning';

const SignUpInput = ({
  refName,
  type,
  title,
  register,
  nickNameCheck,
  placeholder,
  condition,
  errors,
}: IFormStructure) => {
  return (
    <SignUpInputWrapper>
      <SignUpInputLabel>
        <SignUpInputLabelText htmlFor={refName}>{title}</SignUpInputLabelText>
        {condition?.required && <SignUpInputLabelCircle />}
      </SignUpInputLabel>
      <SignUpInputBox
        type={type}
        placeholder={placeholder}
        errorCheck={errorCheck(errors?.message)}
        {...register(refName, condition)}
      />
      {nickNameCheck && <NickNameCheck>중복확인</NickNameCheck>}
      {errors && (
        <SignUpErrorMessage>
          <InputWarning />
          <span>{errors?.message}</span>
        </SignUpErrorMessage>
      )}
    </SignUpInputWrapper>
  );
};

export default SignUpInput;
