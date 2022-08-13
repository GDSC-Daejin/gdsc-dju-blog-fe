import React from 'react';
import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import UserService from '../../../api/UserService';
import { GDSCButton } from '../../../components/common/Button';
import { IFormStructure } from '../../../types/SignUpFormType';

import SignUpInput from '../SignUpInput';
import SignUpSelect from '../SignUpSelect';

import { SignUpFormStyle } from './styled';

const SignUpForm = () => {
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    trigger,
    formState: { errors, isValid },
  } = useForm({ mode: 'onTouched' });
  // { mode: 'onChange' }
  const navigate = useNavigate();
  const onSubmit = async (values: any) => {
    const response = await UserService.updateMyData({ ...values });
    if (response.data.body.message === 'SUCCESS') {
      alert('회원가입이 완료되었습니다');
      navigate('/', { replace: true });
    } else alert('에러가 발생했습니다');
  };

  const formData: IFormStructure[] = [
    {
      refName: 'nickname',
      type: 'text',
      placeholder: 'GDSC DJU 닉네임을 입력하세요.',
      title: '닉네임',
      nickNameCheck: true,
      condition: {
        required: '필수 입력란입니다',
      },
      register: register,
      errors: errors.nickname,
    },
    {
      refName: 'phoneNumber',
      type: 'tel',
      placeholder: '01012345678',
      title: '전화번호',
      condition: {
        required: '필수 입력란입니다',
        pattern: {
          value: /^[0-9]{11}$/,
          message: '잘못된 전화번호 형식입니다.',
        },
      },
      register: register,
      errors: errors.phoneNumber,
    },
    {
      refName: 'gmail',
      type: 'email',
      placeholder: 'GDSC@gmail.com',
      title: 'gmail',
      condition: {
        required: '필수 입력란입니다',
        pattern: {
          value: /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/i,
          message: '잘못된 이메일 형식입니다.',
        },
      },
      register: register,
      errors: errors.gmail,
    },
    {
      refName: 'major',
      type: 'text',
      title: '학과',
      placeholder: '소속 되어있는 학과를 입력하세요.',
      condition: {
        required: '필수 입력란입니다',
      },
      register: register,
      errors: errors.major,
    },
    {
      refName: 'studentNum',
      type: 'text',
      title: '학번',
      placeholder: '20XXXXXXX',
      condition: {
        required: '필수 입력란입니다',
        pattern: {
          value: /^[0-9]{8}$/,
          message: '학번 형식에 맞춰 입력해주세요',
        },
      },
      register: register,
      errors: errors.studentNum,
    },
    {
      refName: 'positionType',
      type: 'text',
      title: '포지션',
      select: true,
      setValue,
      watch,
      condition: {
        required: '필수 입력란입니다',
      },
      register: register,
      errors: errors.positionType,
    },
    {
      refName: 'gitHubUrl',
      type: 'text',
      title: '깃허브',
      placeholder: '깃허브 주소를 입력하세요',
      condition: {
        pattern: {
          value: /(http(s)?:\/\/)+(github)+\.+(com\/)+[A-Z,a-z]/,
          message: 'github.com 형식으로 작성해주세요',
        },
      },
      register: register,
      errors: errors.github,
    },
    {
      refName: 'introduce',
      type: 'text',
      title: '소개글',
      placeholder: '자신을 소개하는 글을 작성하세요',
      register: register,
      errors: errors.intro,
    },
  ];

  return (
    <SignUpFormStyle onSubmit={handleSubmit(onSubmit)}>
      {formData.map((formData) =>
        formData.select ? (
          <SignUpSelect {...formData} key={formData.refName} />
        ) : (
          <SignUpInput {...formData} key={formData.refName} />
        ),
      )}
      <GDSCButton
        color={isValid ? 'googleBlue' : 'tossBlue200'}
        text="가입하기"
        disable={!isValid}
        type="submit"
      />
    </SignUpFormStyle>
  );
};

export default SignUpForm;
