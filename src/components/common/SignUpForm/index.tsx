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
  } = useForm({ mode: 'onChange' });
  const onSubmit = (values: any) => console.log(values);

  const formData: IFormStructure[] = [
    {
      refName: 'name',
      type: 'text',
      title: '이름(실명)',
      register: register,
      condition: {
        required: '필수 입력란입니다',
      },
      errors: errors,
    },
    {
      refName: 'nickname',
      type: 'text',
      title: '닉네임',
      register: register,
      condition: {
        required: '필수 입력란입니다',
      },
      errors: errors,
    },
    {
      refName: 'phone',
      type: 'tel',
      title: '전화번호',
      register: register,
      condition: {
        required: '필수 입력란입니다',
        minLength: {
          value: 10,
          message: '잘못된 전화번호 형식입니다.',
        },
      },
      errors: errors,
    },
    {
      refName: 'email',
      type: 'email',
      title: 'gmail',
      register: register,
      condition: {
        required: '필수 입력란입니다',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i,
          message: '잘못된 이메일 형식입니다.',
        },
      },
      errors: errors,
    },
    {
      refName: 'department',
      type: 'text',
      title: '학과',
      register: register,
      condition: {
        required: '필수 입력란입니다',
      },
      errors: errors,
    },
    {
      refName: 'studentNum',
      type: 'text',
      title: '학번',
      register: register,
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
      },
      errors: errors,
    },
    {
      refName: 'github',
      type: 'text',
      title: '깃허브',
      register: register,
      errors: errors,
    },
    {
      refName: 'intro',
      type: 'text',
      title: '소개글',
      register: register,
      errors: errors,
    },
  ];

  return (
    <SignUpFormStyle onSubmit={handleSubmit(onSubmit)}>
      {formData.map((data, index) => (
        <SignUpInput
          key={index}
          refName={data.refName}
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
