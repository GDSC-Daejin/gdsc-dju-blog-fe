import React from 'react';
import CheckCircle from '../../../assets/CheckCircle';
import InputWarning from '../../../assets/InputWarning';

import { IFormStructure, errorCheck } from '../../../types/SignUpFormType';
import {
  CheckCircleWrapper,
  SignUpErrorMessage,
  SignUpInputBox,
  SignUpInputBoxWrapper,
  SignUpInputLabel,
  SignUpInputLabelCircle,
  SignUpInputLabelText,
  SignUpInputWrapper,
} from './styled';

const SignUpInput = ({
  refName,
  type,
  title,
  register,
  nickNameCheck,
  placeholder,
  condition,
  errors,
  watch,
  checkNicknameState,
}: IFormStructure) => {
  return (
    <SignUpInputWrapper>
      <SignUpInputLabel>
        <SignUpInputLabelText htmlFor={refName}>{title}</SignUpInputLabelText>
        {condition?.required && <SignUpInputLabelCircle />}
        {nickNameCheck && (
          <CheckCircleWrapper
            checkState={checkNicknameState && checkNicknameState}
          >
            <CheckCircle />
          </CheckCircleWrapper>
        )}
      </SignUpInputLabel>
      <SignUpInputBoxWrapper>
        <SignUpInputBox
          type={type}
          placeholder={placeholder}
          errorCheck={errorCheck(errors?.message)}
          {...register(refName, condition)}
        />
      </SignUpInputBoxWrapper>
      {errors && (
        <SignUpErrorMessage>
          <InputWarning />
          <span>{errors?.message}</span>
        </SignUpErrorMessage>
      )}
    </SignUpInputWrapper>
  );
};

export default React.memo(SignUpInput);
