import React from 'react';
import { useForm } from 'react-hook-form';
import { LayoutContainer } from '../../styles/layouts';
import { SignUpForm, SignUpInputBox } from './styled';

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values: any) => console.log(values);
  return (
    <LayoutContainer>
      <SignUpForm onSubmit={handleSubmit(onSubmit)}>
        <SignUpInputBox
          type="email"
          placeholder="Email"
          {...register('email', {
            required: 'Required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },
          })}
        />
        {errors.email && errors.email.message}
        <SignUpInputBox
          {...register('username', {
            validate: (value) => value !== 'admin' || 'Nice try!',
          })}
        />
        {errors.username && errors.username.message}
        <button type="submit">가입하기</button>
      </SignUpForm>
    </LayoutContainer>
  );
};

export default SignUp;
