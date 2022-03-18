import React from 'react';
import { useForm } from 'react-hook-form';
import { LayoutContainer } from '../../styles/layouts';
import {
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

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });
  const onSubmit = (values: any) => console.log(values);

  return (
    <LayoutContainer>
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
            {...register('name', {
              required: '필수 입력사항입니다',
            })}
          />
          <SignUpErrorMessage>
            {errors.name && errors.name.message}&nbsp;
          </SignUpErrorMessage>
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
            {...register('nickname', {
              required: '필수 입력사항입니다',
            })}
          />
          <SignUpErrorMessage>
            {errors.nickname && errors.nickname.message}&nbsp;
          </SignUpErrorMessage>
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
            placeholder="010-0000-0000"
            {...register('phone', {
              required: '필수 입력사항입니다',
              pattern: {
                value: /^\d{3}-\d{3,4}-\d{4}$/,
                message: '010-0000-0000 형식을 맞춰주세요',
              },
            })}
          />
          <SignUpErrorMessage>
            {errors.phone && errors.phone.message}&nbsp;
          </SignUpErrorMessage>
        </SignUpInputWrapper>

        <SignUpInputWrapper>
          <SignUpInputLabel>
            <SignUpInputLabelText htmlFor="email">gamil</SignUpInputLabelText>
            <SignUpInputLabelCircle />
          </SignUpInputLabel>
          <SignUpInputBox
            type="email"
            placeholder="GDSC@gmail.com"
            {...register('email', {
              required: '필수 입력사항입니다',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i,
                message: 'invalid email address',
              },
            })}
          />
          <SignUpErrorMessage>
            {errors.email && errors.email.message}&nbsp;
          </SignUpErrorMessage>
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
            {...register('department', {
              required: '필수 입력사항입니다',
            })}
          />
          <SignUpErrorMessage>
            {errors.department && errors.department.message}&nbsp;
          </SignUpErrorMessage>
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
            {...register('studentNum', {
              required: '필수 입력사항입니다',
            })}
          />
          <SignUpErrorMessage>
            {errors.studentNum && errors.studentNum.message}&nbsp;
          </SignUpErrorMessage>
        </SignUpInputWrapper>

        <SignUpInputWrapper>
          <SignUpInputLabel>
            <SignUpInputLabelText htmlFor="position">
              포지션
            </SignUpInputLabelText>
            <SignUpInputLabelCircle />
          </SignUpInputLabel>
          <SignUpSelecttBox
            {...(register('position'),
            {
              required: true,
            })}
          >
            <option value="" disabled selected>
              선택
            </option>
            <option value="A">Option A</option>
            <option value="B">Option B</option>
          </SignUpSelecttBox>
          <SignUpErrorMessage>
            {errors.position && errors.position.message}&nbsp;
          </SignUpErrorMessage>
        </SignUpInputWrapper>

        <SignUpInputWrapper>
          <SignUpInputLabel>
            <SignUpInputLabelText htmlFor="github">깃허브</SignUpInputLabelText>
          </SignUpInputLabel>
          <SignUpInputBox
            type="url"
            placeholder="깃허브 주소를 입력하세요"
            {...register('github', {
              required: '필수 입력사항입니다',
            })}
          />
          <SignUpErrorMessage>
            {errors.github && errors.github.message}&nbsp;
          </SignUpErrorMessage>
        </SignUpInputWrapper>

        <SignUpInputWrapper>
          <SignUpInputLabel>
            <SignUpInputLabelText htmlFor="intro">소개글</SignUpInputLabelText>
          </SignUpInputLabel>
          <SignUpInputBox
            type="text"
            placeholder="자신을 소개하는 글을 작성하세요."
            {...register('intro', {
              required: '필수 입력사항입니다',
            })}
          />
          <SignUpErrorMessage>
            {errors.intro && errors.intro.message}&nbsp;
          </SignUpErrorMessage>
        </SignUpInputWrapper>

        <SignUpButton type="submit">가입하기</SignUpButton>
        {/* <GDSCButton type="submit" text="가입하기" color="toss blue 200" /> */}
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
