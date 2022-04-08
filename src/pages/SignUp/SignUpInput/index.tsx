import React, { useEffect } from 'react';
import axios from 'axios';

import { IFormStructure, errorCheck } from '../SignUpForm/FormStructureInfo';
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
import { check } from 'prettier';
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
  trigger,
  watch,
  setFocus,
  checkNicknameState,
  setCheckNickname,
}: IFormStructure) => {
  const handleNicknameCheck = async () => {
    if (watch(refName) === '') {
      alert('닉네임을 입력하세요');
      return;
    }
    try {
      const response = await axios.post(
        'https://gdsc-dju.com/api/guest/v1/validation/nickname',
        {
          categoryName: watch('position'),
        },
      );
      if (response.data.body.data) {
        setCheckNickname &&
          setCheckNickname((prev) => {
            return true;
          });
        trigger && trigger(refName, { shouldFocus: true });
      } else alert('이미 존재하는 닉네임입니다.');
    } catch (err) {
      console.log('ERROR', err);
    }
  };

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
        {nickNameCheck && (
          <NickNameCheckButton onClick={handleNicknameCheck} type="button">
            중복확인
          </NickNameCheckButton>
        )}
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
