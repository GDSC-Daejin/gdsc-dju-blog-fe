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
            type="text"
            placeholder="김구글"
            {...register('name', {
              required: true,
            })}
          />
          <span>{errors.email && errors.email.message}</span>
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
              required: true,
            })}
          />
          <span>{errors.nickname && errors.nickname.message}</span>
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
              required: true,
            })}
          />
          <span>{errors.phone && errors.phone.message}</span>
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
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i,
                message: 'invalid email address',
              },
            })}
          />
          <span>{errors.email && errors.email.message}</span>
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
              required: true,
            })}
          />
          <span>{errors.email && errors.email.message}</span>
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
              required: true,
            })}
          />
          <span>{errors.email && errors.email.message}</span>
        </SignUpInputWrapper>
        <SignUpInputWrapper>
          <SignUpInputLabel>
            <SignUpInputLabelText htmlFor="position">
              포지션
            </SignUpInputLabelText>
            <SignUpInputLabelCircle />
          </SignUpInputLabel>
          <select {...register('position')}>
            <option value="" disabled>
              Select...
            </option>
            <option value="A">Option A</option>
            <option value="B">Option B</option>
          </select>
          <span>{errors.email && errors.email.message}</span>
        </SignUpInputWrapper>

        <SignUpInputWrapper>
          <SignUpInputLabel>
            <SignUpInputLabelText htmlFor="github">깃허브</SignUpInputLabelText>
          </SignUpInputLabel>
          <SignUpInputBox
            type="url"
            placeholder="깃허브 주소를 입력하세요"
            {...register('github', {
              required: true,
            })}
          />
          <span>{errors.email && errors.email.message}</span>
        </SignUpInputWrapper>

        <SignUpInputWrapper>
          <SignUpInputLabel>
            <SignUpInputLabelText htmlFor="intro">소개글</SignUpInputLabelText>
          </SignUpInputLabel>
          <SignUpInputBox
            type="text"
            placeholder="자신을 소개하는 글을 작성하세요."
            {...register('intro', {
              required: true,
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
