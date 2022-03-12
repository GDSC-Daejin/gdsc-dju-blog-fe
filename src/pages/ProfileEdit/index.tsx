import React from 'react';
import { FormikProvider, useFormik } from 'formik';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import {
  FormButtonWrapper,
  FormElementWrapper,
  FormInner,
  FormLabel,
  FormTitle,
  FormTitleWrapper,
  FormWrapper,
} from './styled';
import TextInput from '../../components/common/input/TextInput';
import ProfileEditImage from '../../components/common/ProfileEditImage';
import { GDSCButton } from '../../components/common/Button';
import { profileEditSchema } from '../../components/Validation/profileEdit';

const ProfileEdit = () => {
  const image = '';
  const userEditFormik = useFormik({
    initialValues: {
      name: '',
      nickname: '',
      introduce: '',
      hashTag: '',
      phoneNumber: '',
      email: '',
      major: '',
      studentID: '',
      position: '',
      gitEmail: '',
      memberPortfolioUrls: [''],
    },
    onSubmit: () => {
      return;
    },
    //validation setting
    validationSchema: profileEditSchema,
  });
  console.log(userEditFormik.touched.introduce);
  return (
    <LayoutContainer>
      <ContainerInner>
        <FormWrapper>
          <FormInner>
            <FormikProvider value={userEditFormik}>
              <FormTitleWrapper>
                <FormTitle>개인정보수정</FormTitle>
              </FormTitleWrapper>
              <ProfileEditImage image={image} />
              <FormElementWrapper>
                <FormLabel essential={true}>이름(실명)</FormLabel>
                <TextInput
                  disabled={true}
                  placeholder={'김구글'}
                  value={userEditFormik.values.name}
                />
              </FormElementWrapper>
              <FormElementWrapper>
                <FormLabel>닉네임</FormLabel>
                <TextInput
                  disabled={true}
                  placeholder={'정제슨'}
                  value={userEditFormik.values.nickname}
                />
              </FormElementWrapper>
              <FormElementWrapper>
                <FormLabel essential={true}>한줄소개</FormLabel>
                <TextInput
                  placeholder={'70자 제한'}
                  name={'introduce'}
                  value={userEditFormik.values.introduce}
                  onChange={userEditFormik.handleChange}
                  error={userEditFormik.errors.introduce}
                  touched={userEditFormik.touched.introduce}
                />
              </FormElementWrapper>
              <FormElementWrapper>
                <FormLabel essential={true}>해시태그</FormLabel>
                <TextInput
                  placeholder={',로 구분(해시태그 당 15글자, 10개 제한)'}
                  name={'hashTag'}
                  value={userEditFormik.values.hashTag}
                  onChange={userEditFormik.handleChange}
                  error={userEditFormik.errors.hashTag}
                  touched={userEditFormik.touched.hashTag}
                />
              </FormElementWrapper>
              <FormElementWrapper>
                <FormLabel essential={true}>전화번호</FormLabel>
                <TextInput
                  placeholder={'010-0000-0000'}
                  name={'phoneNumber'}
                  value={userEditFormik.values.phoneNumber}
                  onChange={userEditFormik.handleChange}
                  error={userEditFormik.errors.phoneNumber}
                  touched={userEditFormik.touched.phoneNumber}
                />
              </FormElementWrapper>
              <FormElementWrapper>
                <FormLabel essential={true}>gmail</FormLabel>
                <TextInput
                  name={'email'}
                  value={userEditFormik.values.email}
                  placeholder={'gdsc@gmail.com'}
                  onChange={userEditFormik.handleChange}
                  error={userEditFormik.errors.email}
                  touched={userEditFormik.touched.email}
                />
              </FormElementWrapper>
              <FormElementWrapper>
                <FormLabel essential={true}>학과</FormLabel>
                <TextInput
                  name={'major'}
                  value={userEditFormik.values.major}
                  placeholder={'소속한 학과를 입력하세요'}
                  onChange={userEditFormik.handleChange}
                  error={userEditFormik.errors.major}
                  touched={userEditFormik.touched.major}
                />
              </FormElementWrapper>
              <FormElementWrapper>
                <FormLabel essential={true}>학번</FormLabel>
                <TextInput
                  name={'studentID'}
                  placeholder={'20221234'}
                  value={userEditFormik.values.studentID}
                  onChange={userEditFormik.handleChange}
                  error={userEditFormik.errors.studentID}
                  touched={userEditFormik.touched.studentID}
                />
              </FormElementWrapper>
              <FormElementWrapper>
                <FormLabel essential={true}>포지션</FormLabel>
                <TextInput
                  disabled={true}
                  placeholder={'Frontend'}
                  name={'studentID'}
                  value={userEditFormik.values.position}
                />
              </FormElementWrapper>
              <FormElementWrapper>
                <FormLabel essential={true}>깃허브 주소</FormLabel>
                <TextInput
                  placeholder={'https://'}
                  name={'gitEmail'}
                  value={userEditFormik.values.gitEmail}
                  onChange={userEditFormik.handleChange}
                  error={userEditFormik.errors.gitEmail}
                  touched={userEditFormik.touched.gitEmail}
                />
              </FormElementWrapper>
              <FormElementWrapper>
                <FormLabel essential={true}>블로그 주소</FormLabel>
                <TextInput
                  placeholder={'https://'}
                  name={'memberPortfolioUrls'}
                  value={userEditFormik.values.memberPortfolioUrls[0]}
                  onChange={userEditFormik.handleChange}
                  // error={userEditFormik.errors.memberPortfolioUrls}
                />
              </FormElementWrapper>
              <FormElementWrapper>
                <FormLabel essential={true}>포트폴리오/이력서 주소</FormLabel>
                <TextInput placeholder={'https://'} />
              </FormElementWrapper>
              <FormButtonWrapper>
                <GDSCButton text={'저장하기'} color={'GDSC blue'} />
              </FormButtonWrapper>
            </FormikProvider>
          </FormInner>
        </FormWrapper>
      </ContainerInner>
    </LayoutContainer>
  );
};

export default ProfileEdit;
