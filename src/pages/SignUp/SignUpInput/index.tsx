import React, { useCallback } from 'react';
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
        {/* {nickNameCheck && (
          <NickNameCheckButton type="button">중복확인</NickNameCheckButton>
        )} */}
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

// const handleNicknameCheck = useCallback(async () => {
//   if (handleInputValue('nickname') === '') {
//     alert('닉네임을 입력하세요');
//     return;
//   }
//   try {
//     const response = await axios.post(
//       'https://gdsc-dju.com/api/guest/v1/validation/nickname',
//       {
//         nickname: handleInputValue('nickname'),
//       },
//     );
//     console.log(response.data.body.data);
//     if (response.data.body.data) {
//       setCheckNickname &&
//         setCheckNickname((prev) => {
//           return true;
//         });
//       trigger && trigger(refName, { shouldFocus: true });
//       alert('사용가능한 닉네임입니다!');
//     } else alert('이미 존재하는 닉네임입니다.');
//   } catch (err) {
//     alert('ERROR');
//   }
// }, [checkNicknameState]);
