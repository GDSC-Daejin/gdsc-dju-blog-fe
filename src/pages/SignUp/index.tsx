import React from 'react';
import { useForm } from 'react-hook-form';
import { LayoutContainer } from '../../styles/layouts';
import {
  SignUpContentWrapper,
  SignUpFormTitle,
  SignUpForm,
  SignUpInputWrapper,
  SignUpInputLabel,
  SignUpInputBox,
  SignUpErrorMessage,
  SignUpInputLabelCircle,
  SignUpInputLabelText,
  SignUpSelecttBox,
  SignUpButton,
} from './styled';
import { GDSCButton } from '../../components/common/Button';
import InputWarning from '../../Images/InputWarning';

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });
  const onSubmit = (values: any) => console.log(values);
  const errorCheck = (error: string | undefined) => {
    return error !== undefined ? true : false;
  };

  return (
    <LayoutContainer>
      <SignUpContentWrapper>
        <SignUpFormTitle>회원가입</SignUpFormTitle>
        <SignUpForm onSubmit={handleSubmit(onSubmit)}>
          <SignUpInputWrapper>
            <SignUpInputLabel>
              <SignUpInputLabelText htmlFor="name">
                이름(실명)
              </SignUpInputLabelText>
              <SignUpInputLabelCircle />
            </SignUpInputLabel>
            <SignUpInputBox
              type="text"
              placeholder="김구글"
              errorCheck={errorCheck(errors.name?.type)}
              {...register('name', {
                required: '필수 입력란입니다',
              })}
            />
            {errors.name && (
              <SignUpErrorMessage>
                <InputWarning />
                <span>{errors.name.message}</span>
              </SignUpErrorMessage>
            )}
          </SignUpInputWrapper>

          <SignUpInputWrapper>
            <SignUpInputLabel>
              <SignUpInputLabelText htmlFor="nickname">
                닉네임
              </SignUpInputLabelText>
              <SignUpInputLabelCircle />
            </SignUpInputLabel>
            <SignUpInputBox
              type="text"
              placeholder="GDSC DJU 닉네임을 입력하세요."
              errorCheck={errorCheck(errors.nickname?.type)}
              {...register('nickname', {
                required: '필수 입력란입니다',
              })}
            />
            {errors.nickname && (
              <SignUpErrorMessage>
                <InputWarning />
                <span>{errors.nickname.message}</span>
              </SignUpErrorMessage>
            )}
          </SignUpInputWrapper>

          <SignUpInputWrapper>
            <SignUpInputLabel>
              <SignUpInputLabelText htmlFor="phone">
                전화번호
              </SignUpInputLabelText>
              <SignUpInputLabelCircle />
            </SignUpInputLabel>
            <SignUpInputBox
              type="tel"
              placeholder="01012345678"
              errorCheck={errorCheck(errors.phone?.type)}
              {...register('phone', {
                required: '필수 입력란입니다',
                maxLength: {
                  value: 11,
                  message: '전화번호형식이 아닙니다',
                },
              })}
            />
            {errors.phone && (
              <SignUpErrorMessage>
                <InputWarning />
                <span>{errors.phone.message}</span>
              </SignUpErrorMessage>
            )}
          </SignUpInputWrapper>

          <SignUpInputWrapper>
            <SignUpInputLabel>
              <SignUpInputLabelText htmlFor="email">gamil</SignUpInputLabelText>
              <SignUpInputLabelCircle />
            </SignUpInputLabel>
            <SignUpInputBox
              type="email"
              placeholder="GDSC@gmail.com"
              errorCheck={errorCheck(errors.email?.type)}
              {...register('email', {
                required: '필수 입력란입니다',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i,
                  message: '잘못된 이메일 형식입니다.',
                },
              })}
            />
            {errors.email && (
              <SignUpErrorMessage>
                <InputWarning />
                <span>{errors.email.message}</span>
              </SignUpErrorMessage>
            )}
          </SignUpInputWrapper>

          <SignUpInputWrapper>
            <SignUpInputLabel>
              <SignUpInputLabelText htmlFor="department">
                학과
              </SignUpInputLabelText>
              <SignUpInputLabelCircle />
            </SignUpInputLabel>
            <SignUpInputBox
              type="text"
              placeholder="소속 되어있는 학과를 입력하세요."
              errorCheck={errorCheck(errors.department?.type)}
              {...register('department', {
                required: '필수 입력란입니다',
              })}
            />
            {errors.department && (
              <SignUpErrorMessage>
                <InputWarning />
                <span>{errors.department.message}</span>
              </SignUpErrorMessage>
            )}
          </SignUpInputWrapper>

          <SignUpInputWrapper>
            <SignUpInputLabel>
              <SignUpInputLabelText htmlFor="studentNum">
                학번
              </SignUpInputLabelText>
              <SignUpInputLabelCircle />
            </SignUpInputLabel>
            <SignUpInputBox
              type="text"
              placeholder="20XXXXXX"
              errorCheck={errorCheck(errors.studentNum?.type)}
              {...register('studentNum', {
                required: '필수 입력란입니다',
                minLength: {
                  value: 8,
                  message: '학번은 8자리 입니다',
                },
                maxLength: {
                  value: 8,
                  message: '학번은 8자리 입니다',
                },
              })}
            />
            {errors.studentNum && (
              <SignUpErrorMessage>
                <InputWarning />
                <span>{errors.studentNum.message}</span>
              </SignUpErrorMessage>
            )}
          </SignUpInputWrapper>

          <SignUpInputWrapper>
            <SignUpInputLabel>
              <SignUpInputLabelText htmlFor="position">
                포지션
              </SignUpInputLabelText>
              <SignUpInputLabelCircle />
            </SignUpInputLabel>
            <SignUpSelecttBox
              defaultValue={''}
              {...(register('position'),
              {
                required: true,
              })}
            >
              <option value="">선택</option>
              <option value="A">Option A</option>
              <option value="B">Option B</option>
            </SignUpSelecttBox>
            <SignUpErrorMessage>
              {errors.position && errors.position.message}
            </SignUpErrorMessage>
          </SignUpInputWrapper>

          <SignUpInputWrapper>
            <SignUpInputLabel>
              <SignUpInputLabelText htmlFor="github">
                깃허브
              </SignUpInputLabelText>
            </SignUpInputLabel>
            <SignUpInputBox
              type="url"
              placeholder="깃허브 주소를 입력하세요"
              errorCheck={errorCheck(errors.github?.type)}
              {...register('github')}
            />
            <SignUpErrorMessage>
              {errors.github && errors.github.message}
            </SignUpErrorMessage>
          </SignUpInputWrapper>

          <SignUpInputWrapper>
            <SignUpInputLabel>
              <SignUpInputLabelText htmlFor="intro">
                소개글
              </SignUpInputLabelText>
            </SignUpInputLabel>
            <SignUpInputBox
              type="text"
              placeholder="자신을 소개하는 글을 작성하세요."
              errorCheck={errorCheck(errors.intro?.type)}
              {...register('intro')}
            />
            <SignUpErrorMessage>
              {errors.intro && errors.intro.message}
            </SignUpErrorMessage>
          </SignUpInputWrapper>

          <SignUpButton isValid={isValid} type="submit">
            가입하기
          </SignUpButton>
          {/* <GDSCButton type="submit" text="가입하기" color="toss blue 200" /> */}
        </SignUpForm>
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
