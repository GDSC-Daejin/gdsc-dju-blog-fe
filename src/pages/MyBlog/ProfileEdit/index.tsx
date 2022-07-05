import { FormikProvider, useFormik } from 'formik';
import React, { memo, useLayoutEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useRecoilState } from 'recoil';
import { useGetUserData } from '../../../api/hooks/useGetUserData';
import { GDSCButton } from '../../../components/common/Button';
import TextInput from '../../../components/common/input/TextInput';
import ProfileEditImage from '../../../components/common/ProfileEditImage';
import { profileEditSchema } from '../../../components/Validation/profileEdit';
import { userState } from '../../../store/user';
import { ContainerInner, LayoutContainer } from '../../../styles/layouts';
import { IUserDataType } from '../../../types/userDataType';
import { IUserInfoDataType } from '../../../types/userInfoData';
import {
  FormButtonWrapper,
  FormElementWrapper,
  FormInner,
  FormLabel,
  FormTitle,
  FormTitleWrapper,
  FormWrapper,
} from './styled';

const ProfileEdit = () => {
  const [user, setUser] = useRecoilState(userState);
  const [tokenCookies, setTokenCookies] = useCookies(['token']);
  const token = tokenCookies.token;
  const { userData } = useGetUserData(token);

  useLayoutEffect(() => {
    if (userData) {
      setUser({
        ...user,
        ...userData.memberInfo,
        name: userData.username,
        email: userData.email,
      });
    }
  }, [userData]);

  return (
    <LayoutContainer>
      <ContainerInner>
        {userData && <ProfileEditForm userData={userData} />}
      </ContainerInner>
    </LayoutContainer>
  );
};
const ProfileEditForm = ({ userData }: { userData: IUserDataType }) => {
  const userEditFormik = useFormik({
    initialValues: {
      generation: 0,
      name: userData.memberInfo.name,
      nickname: userData.memberInfo.nickname,
      gitEmail: userData.memberInfo.gitEmail,
      birthday: userData.memberInfo.birthday,
      introduce: userData.memberInfo.introduce,
      hashTag: userData.memberInfo.hashTag,
      memberInfoId: userData.memberInfo.memberInfoId,
      phoneNumber: userData.memberInfo.phoneNumber,
      major: userData.memberInfo.major,
      positionType: userData.memberInfo.positionType,
      githubUrl: userData.memberInfo.githubUrl,
      blogUrl: userData.memberInfo.blogUrl,
      etcUrl: userData.memberInfo.etcUrl,
    } as IUserInfoDataType,
    onSubmit: async (values) => {
      const a = 1;
    },
    //validation setting
    validationSchema: profileEditSchema,
  });
  return (
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
              placeholder={'깃허브 아이디로 사용 중인 이메일을 적어주세요.'}
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
            <FormLabel>블로그 주소</FormLabel>
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
              value={userEditFormik.values.etcUrl}
              onChange={userEditFormik.handleChange}
              error={userEditFormik.errors.etcUrl}
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
  );
};

export default memo(ProfileEdit);
