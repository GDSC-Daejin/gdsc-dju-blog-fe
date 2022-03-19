import React, { memo, useEffect, useLayoutEffect } from 'react';
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
  memberPortfolioUrlsType,
  userEditDataType,
} from '../../../types/userInfoData';
import { useGetUserData } from '../../../api/hooks/useGetUserData';
import { memberDataInfoType } from '../../../types/userDataType';

const ProfileEdit = () => {
  const image = '';
  const { userData } = useGetUserData();
  const [user, setUser] = useRecoilState(userState);

  useLayoutEffect(() => {
    if (userData) {
      setUser({
        ...user,
        ...userData.memberInfo,
        name: userData.username,
        email: userData.email,
      });
    }
  }, []);

  const userEditFormik = useFormik({
    initialValues: {
      generation: 0,
      name: user.name,
      nickname: user.nickname,
      gitEmail: user.gitEmail,
      birthday: user.birthday,
      introduce: user.introduce,
      hashTag: user.hashTag,
      memberInfoId: user.memberInfoId,
      phoneNumber: user.phoneNumber,
      major: user.major,
      positionType: user.positionType,
      // memberPortfolioUrls: user.memberPortfolioUrls,
      githubUrl: user.memberPortfolioUrls[0]?.webUrl,
      blogUrl: user.memberPortfolioUrls[1]?.webUrl,
      resumeUrl: user.memberPortfolioUrls[2]?.webUrl,
    } as userEditDataType,
    onSubmit: () => {
      return;
    },
    //validation setting
    validationSchema: profileEditSchema,
  });
  const onSubmit = async (values: userEditDataType) => {
    const { githubUrl, blogUrl, resumeUrl } = values;

    const memberPortfolioUrls: memberPortfolioUrlsType[] = [
      {
        id: 1,
        webUrl: githubUrl,
      },
      {
        id: 2,
        webUrl: blogUrl,
      },
      {
        id: 3,
        webUrl: resumeUrl,
      },
    ];
    delete values.githubUrl;
    delete values.blogUrl;
    delete values.resumeUrl;

    const memberData = {
      ...values,
      memberPortfolioUrls: memberPortfolioUrls,
    };
    await API.updateUserData(memberData as memberDataInfoType).then((res) => {
      setUser({
        ...user,
        ...values,
      });
    });
  };
  console.log(userEditFormik.errors);
  console.log(userEditFormik.values);
  console.log(profileEditSchema);
  return (
    <LayoutContainer>
      <ContainerInner>
        {user && (
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
                    name={'name'}
                    // disabled={true}
                    placeholder={userData?.username}
                    value={userEditFormik.values.name}
                    onChange={userEditFormik.handleChange}
                  />
                </FormElementWrapper>
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
                    value={userEditFormik.values.resumeUrl}
                    onChange={userEditFormik.handleChange}
                    error={userEditFormik.errors.resumeUrl}
                  />
                </FormElementWrapper>
                <FormButtonWrapper
                  onClick={() => onSubmit(userEditFormik.values)}
                >
                  <GDSCButton
                    text={'저장하기'}
                    color={'GDSC blue'}
                    type={'submit'}
                  />
                </FormButtonWrapper>
              </FormikProvider>
            </FormInner>
          </FormWrapper>
        )}
      </ContainerInner>
    </LayoutContainer>
  );
};

export default memo(ProfileEdit);
