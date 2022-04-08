import React from 'react';
import { LayoutContainer } from '../../styles/layouts';
import { SignUpContentWrapper, SignUpFormTitle } from './styled';
import { GDSCButton } from '../../components/common/Button';
import InputWarning from '../../assets/InputWarning';
import SignUpForm from './SignUpForm';

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
