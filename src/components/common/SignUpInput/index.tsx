import React from 'react';
import { useForm } from 'react-hook-form';
import { IFormStructure } from '../SignUpForm/FormInterface';
import {
  SignUpInputWrapper,
  SignUpInputLabel,
  SignUpInputBox,
  SignUpErrorMessage,
  SignUpInputLabelCircle,
  SignUpInputLabelText,
  SignUpSelecttBox,
} from './styled';
import InputWarning from '../../../Images/InputWarning';

const SignUpInput = ({
  refName,
  type,
  title,
  register,
  placeholder,
  condition,
  errors,
}: IFormStructure) => {
  const errorCheck = (error: string | undefined) => {
    return error !== undefined ? true : false;
  };
  console.log(errors + title);
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
