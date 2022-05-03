import React, { memo, useLayoutEffect } from 'react';
import { FormikProvider, useFormik } from 'formik';
import { ContainerInner, LayoutContainer } from '../../../styles/layouts';
import {
  FormButtonWrapper,
  FormElementWrapper,
  FormInner,
  FormLabel,
  FormTitle,
  FormTitleWrapper,
  FormWrapper,
} from './styled';
import TextInput from '../../../components/common/input/TextInput';
import ProfileEditImage from '../../../components/common/ProfileEditImage';
import { GDSCButton } from '../../../components/common/Button';
import { profileEditSchema } from '../../../components/Validation/profileEdit';
import { useRecoilState } from 'recoil';
import { userState } from '../../../store/user';

import API from '../../../api';
import {
  IUserEditDataType,
  IUserInfoDataType,
  IUserUrlsType,
} from '../../../types/userData';
import { useGetUserData } from '../../../api/hooks/useGetUserData';
import { useNavigate } from 'react-router';

const ProfileEdit = () => {
  const token = localStorage.getItem('token') ?? '';

  const { userData } = useGetUserData(token);
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (userData) {
      setUser({
        ...user,
        ...userData,
      });
    }
  }, [userData]);

  const userEditFormik = useFormik({
    initialValues: {
      name: user.username,
      email: user.email,
      generation: user.memberInfo.generation,
      studentID: user.memberInfo.studentID,
      userID: user.memberInfo.userID,
      nickname: user.memberInfo.nickname,
      gitEmail: user.memberInfo.gitEmail,
      birthday: user.memberInfo.birthday,
      introduce: user.memberInfo.introduce,
      hashTag: user.memberInfo.hashTag,
      memberInfoId: user.memberInfo.memberInfoId,
      phoneNumber: user.memberInfo.phoneNumber,
      major: user.memberInfo.major,
      positionType: user.memberInfo.positionType,
      githubUrl: user.memberInfo.memberPortfolioUrls[0].webUrl,
      blogUrl: user.memberInfo.memberPortfolioUrls[1].webUrl,
      resumeUrl: user.memberInfo.memberPortfolioUrls[2].webUrl,
    },

    onSubmit: async (values: IUserEditDataType) => {
      const { githubUrl, blogUrl, resumeUrl } = values;
      const memberPortfolioUrls: IUserUrlsType[] = [
        { id: 0, webUrl: githubUrl },
        { id: 1, webUrl: blogUrl },
        { id: 2, webUrl: resumeUrl },
      ];
      const memberData: IUserInfoDataType = {
        generation: values.generation,
        gitEmail: values.gitEmail,
        hashTag: values.hashTag,
        introduce: values.introduce,
        major: values.major,
        memberInfoId: values.memberInfoId,
        birthday: values.birthday,
        phoneNumber: values.phoneNumber,
        nickname: values.nickname,
        studentID: values.studentID,
        positionType: values.positionType,
        userID: values.userID,
        name: values.name,
        email: values.email,
        memberPortfolioUrls: memberPortfolioUrls,
      };
      try {
        await API.updateUserData(memberData).then(() => {
          setUser({
            ...user,
            ...values,
          });
        });
        // await navigate(-1);
        // await openModal
      } catch (err) {
        console.log(err);
      }
    },
    //validation setting
    validationSchema: profileEditSchema,
  });

  return (
    <LayoutContainer>
      <ContainerInner>
        {user && (
          <FormikProvider value={userEditFormik}>
            <FormWrapper>
              <FormInner onSubmit={userEditFormik.handleSubmit}>
                <FormTitleWrapper>
                  <FormTitle>개인정보수정</FormTitle>
                </FormTitleWrapper>
                <ProfileEditImage image={userData?.profileImageUrl} />
                {userData && (
                  <FormElementWrapper>
                    <FormLabel essential={true}>이름(실명)</FormLabel>
                    <TextInput
                      name={'name'}
                      // disabled={true}
                      placeholder={userData.username}
                      value={userEditFormik.values.name}
                      onChange={userEditFormik.handleChange}
                    />
                  </FormElementWrapper>
                )}
                <FormElementWrapper>
                  <FormLabel essential={true}>닉네임</FormLabel>
                  <TextInput
                    // disabled={true}
                    name={'nickname'}
                    value={userEditFormik.values.nickname}
                    onChange={userEditFormik.handleChange}
                    placeholder={userData?.memberInfo.nickname}
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
                    disabled={true}
                    placeholder={userData?.email}
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
                    placeholder={userData?.memberInfo.studentID}
                    disabled={true}
                  />
                </FormElementWrapper>
                <FormElementWrapper>
                  <FormLabel essential={true}>포지션</FormLabel>
                  <TextInput
                    // disabled={true}
                    name={'positionType'}
                    placeholder={userData?.memberInfo.positionType}
                    value={userEditFormik.values.positionType}
                    onChange={userEditFormik.handleChange}
                  />
                </FormElementWrapper>
                <FormElementWrapper>
                  <FormLabel>깃허브 이메일</FormLabel>
                  <TextInput
                    placeholder={
                      '깃허브 아이디로 사용 중인 이메일을 적어주세요.'
                    }
                    name={'gitEmail'}
                    value={userEditFormik.values.gitEmail}
                    onChange={userEditFormik.handleChange}
                    error={userEditFormik.errors.gitEmail}
                    touched={userEditFormik.touched.gitEmail}
                  />
                </FormElementWrapper>
                <FormElementWrapper>
                  <FormLabel>깃허브 주소</FormLabel>
                  <TextInput
                    placeholder={' https:// 깃허브 주소를 적어주세요 '}
                    name={'githubUrl'}
                    value={userEditFormik.values.githubUrl}
                    onChange={userEditFormik.handleChange}
                    error={userEditFormik.errors.githubUrl}
                  />
                </FormElementWrapper>
                <FormElementWrapper>
                  <FormLabel>블로그 주소</FormLabel>:Qw
                  <TextInput
                    placeholder={'https://'}
                    name={'blogUrl'}
                    value={userEditFormik.values.blogUrl}
                    onChange={userEditFormik.handleChange}
                    error={userEditFormik.errors.blogUrl}
                  />
                </FormElementWrapper>
                <FormElementWrapper>
                  <FormLabel>포트폴리오/이력서 주소</FormLabel>
                  <TextInput
                    placeholder={'https://'}
                    name={'resumeUrl'}
                    value={userEditFormik.values.resumeUrl}
                    onChange={userEditFormik.handleChange}
                    error={userEditFormik.errors.resumeUrl}
                  />
                </FormElementWrapper>
                <FormButtonWrapper>
                  <GDSCButton
                    text={'저장하기'}
                    color={'googleBlue'}
                    type={'submit'}
                  />
                </FormButtonWrapper>
              </FormInner>
            </FormWrapper>
          </FormikProvider>
        )}
      </ContainerInner>
    </LayoutContainer>
  );
};

export default memo(ProfileEdit);
