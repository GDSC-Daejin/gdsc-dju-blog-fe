import React from 'react';
import { useForm } from 'react-hook-form';
import { LayoutContainer } from '../../styles/layouts';
import {
  SignUpForm,
  SignUpInputWrapper,
  SignUpInputLabel,
  SignUpInputBox,
  SignUpInputLabelCircle,
  SignUpInputLabelText,
} from './styled';

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });
  const onSubmit = (values: any) => console.log(values);
  console.log(isValid);

  return (
    <LayoutContainer>
      <SignUpForm onSubmit={handleSubmit(onSubmit)}>
        <SignUpInputWrapper>
          <SignUpInputLabel>
            <SignUpInputLabelText htmlFor="email">
              이름(실명)
            </SignUpInputLabelText>
            <SignUpInputLabelCircle />
          </SignUpInputLabel>
          <SignUpInputBox
            type="email"
            placeholder="Email"
            {...register('email', {
              required: '필수 입력란입니다.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i,
                message: 'invalid email address',
              },
            })}
          />
          <span>{errors.email && errors.email.message}</span>
        </SignUpInputWrapper>
        <button type="submit">가입하기</button>
      </SignUpForm>
    </LayoutContainer>
  );
};

export default SignUp;

{
  /* <SignUpInputBox
{...register('username', {
  validate: (value) => value !== 'admin' || 'Nice try!',
})}
/>
{errors.username && errors.username.message} */
}
