import React from 'react';
import { useForm } from 'react-hook-form';
import { SignUpFormStyle, SignUpButton } from './styled';
import SignUpInput from '../SignUpInput';
import { IFormStructure } from './FormInterface';

const SignUpForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({ mode: 'onTouched' });
  // { mode: 'onChange' }
  const onSubmit = (values: any) => console.log(values);

  const formData: IFormStructure[] = [
    {
      refName: 'name',
      type: 'text',
      placeholder: '김구글',
      title: '이름(실명)',
      condition: {
        required: '필수 입력란입니다',
      },
      register: register,
      errors: errors.name,
    },
    {
      refName: 'nickname',
      type: 'text',
      placeholder: 'GDSC DJU 닉네임을 입력하세요.',
      title: '닉네임',
      condition: {
        required: '필수 입력란입니다',
      },
      register: register,
      errors: errors.nickname,
    },
    {
      refName: 'phone',
      type: 'tel',
      placeholder: '01012345678',
      title: '전화번호',
      condition: {
        required: '필수 입력란입니다',
        minLength: {
          value: 10,
          message: '잘못된 전화번호 형식입니다.',
        },
      },
      register: register,
      errors: errors.phone,
    },
    {
      refName: 'email',
      type: 'email',
      placeholder: 'GDSC@gmail.com',
      title: 'gmail',
      condition: {
        required: '필수 입력란입니다',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[gmail]+\.[A-Z]{3}$/i,
          message: '잘못된 이메일 형식입니다.',
        },
      },
      register: register,
      errors: errors.email,
    },
    {
      refName: 'department',
      type: 'text',
      title: '학과',
      placeholder: '소속 되어있는 학과를 입력하세요.',
      condition: {
        required: '필수 입력란입니다',
      },
      register: register,
      errors: errors.department,
    },
    {
      refName: 'studentNum',
      type: 'text',
      title: '학번',
      placeholder: '20XXXXXXX',
      condition: {
        required: '필수 입력란입니다',
        minLength: {
          value: 8,
          message: '학번은 8자리 입니다',
        },
        maxLength: {
          value: 8,
          message: '학번은 8자리 입니다',
        },
        pattern: {
          value: /^[0-9]{8}$/,
          message: '학번 형식에 맞춰 입력해주세요',
        },
      },
      register: register,
      errors: errors.studentNum,
    },
    {
      refName: 'github',
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
      refName: 'intro',
      type: 'text',
      title: '소개글',
      placeholder: '자신을 소개하는 글을 작성하세요',
      register: register,
      errors: errors.intro,
    },
  ];

  return (
    <SignUpFormStyle onSubmit={handleSubmit(onSubmit)}>
      {formData.map((data, index) => (
        <SignUpInput
          key={index}
          refName={data.refName}
          placeholder={data.placeholder}
          type={data.type}
          title={data.title}
          register={register}
          condition={data.condition}
          errors={data.errors}
        />
      ))}

      <SignUpButton isValid={isValid} type="submit">
        가입하기
      </SignUpButton>
      {/* <GDSCButton type="submit" text="가입하기" color="toss blue 200" /> */}
    </SignUpFormStyle>
  );
};

export default SignUpForm;
