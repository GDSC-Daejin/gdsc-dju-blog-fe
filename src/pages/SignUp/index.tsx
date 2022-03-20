import React from 'react';
import { LayoutContainer } from '../../styles/layouts';
import { SignUpContentWrapper, SignUpFormTitle } from './styled';
import { GDSCButton } from '../../components/common/Button';
import InputWarning from '../../Images/InputWarning';
import SignUpForm from '../../components/common/SignUpForm';

const SignUp = () => {
  return (
    <LayoutContainer>
      <SignUpContentWrapper>
        <SignUpFormTitle>회원가입</SignUpFormTitle>
        <SignUpForm />
      </SignUpContentWrapper>
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
