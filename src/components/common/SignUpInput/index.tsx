import React from 'react';
import axios from 'axios';

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
import { check } from 'prettier';

const SignUpInput = ({
  refName,
  type,
  title,
  register,
  nickNameCheck,
  placeholder,
  condition,
  errors,
  trigger,
  watch,
  checkNickname,
  setCheckNickname,
}: IFormStructure) => {
  const handleNicknameCheck = async () => {
    if (checkNickname) {
      alert('중복검사가 완료된 아이디입니다');
      return;
    }
    try {
      const response = await axios.post(
        'https://gdsc-dju.com/api/guest/v1/validation/nickname',
        {
          categoryName: watch(refName),
        },
      );
      setCheckNickname &&
        setCheckNickname((prev) => {
          return response.data.body.data;
        });
      trigger && trigger(refName);
      console.log(checkNickname + ' 123');
    } catch (err) {
      console.log('ERROR', err);
    }
  };
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
      {nickNameCheck && (
        <NickNameCheck onClick={handleNicknameCheck} type="button">
          중복확인 {checkNickname ? 1 : 0}
        </NickNameCheck>
      )}
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
