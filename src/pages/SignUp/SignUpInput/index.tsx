import React from 'react';

import { IFormStructure, errorCheck } from '../../../types/SignUpFormType';
import {
  SignUpInputWrapper,
  SignUpInputLabel,
  SignUpInputLabelCircle,
  SignUpInputLabelText,
  CheckCircleWrapper,
  SignUpInputBoxWrapper,
  SignUpInputBox,
  NickNameCheckButton,
  SignUpErrorMessage,
} from './styled';
import InputWarning from '../../../assets/InputWarning';
import CheckCircle from '../../../assets/CheckCircle';

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
