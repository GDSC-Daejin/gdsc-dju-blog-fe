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
  checkNicknameState,
  setCheckNickname,
}: IFormStructure) => {
  const handleNicknameCheck = async () => {
    if (checkNicknameState) {
      alert('중복검사가 완료된 닉네임입니다');
      return;
    } else if (watch(refName) === '') {
      alert('닉네임을 입력하세요');
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
    } catch (err) {
      console.log('ERROR', err);
    }
  };
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCheckNickname && setCheckNickname(false);
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
        onChange={nickNameCheck ? handleChange : undefined}
      />
      {nickNameCheck && (
        <NickNameCheck onClick={handleNicknameCheck} type="button">
          중복확인 {checkNicknameState ? 1 : 0}
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
