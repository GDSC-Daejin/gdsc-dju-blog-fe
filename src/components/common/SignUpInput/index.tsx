import React from 'react';
import { IFormStructure, errorCheck } from '../SignUpForm/FormStructureInfo';
import {
  SignUpInputWrapper,
  SignUpInputLabel,
  SignUpInputBox,
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
