import { FormikProvider, useFormik } from 'formik';
import React, { memo, useLayoutEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useGetMyData } from '../../../api/hooks/useGetMyData';
import UserService from '../../../api/UserService';
import { GDSCButton } from '../../../components/common/Button';
import TextInput from '../../../components/common/input/TextInput';
import ProfileEditImage from '../../../components/common/ProfileEditImage';
import { profileEditSchema } from '../../../components/Validation/profileEdit';
import { userState } from '../../../store/user';
import { ContainerInner, LayoutContainer } from '../../../styles/layouts';
import { ILoginUserData } from '../../../types/userData';
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
  const [user, setUser] = useState<IUserDataType>();

  const { userData } = useGetMyData();

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
      await UserService.updateMyData(values);
    },
    //validation setting
    validationSchema: profileEditSchema,
  });
  const onSubmit = async (values: IUserInfoDataType) => {
    await UserService.updateMyData(values);
  };
  return (
    <FormikProvider value={userEditFormik}>
      <FormWrapper>
        <FormInner onSubmit={userEditFormik.handleSubmit}>
          <FormTitleWrapper>
            <FormTitle>??????????????????</FormTitle>
          </FormTitleWrapper>
          <ProfileEditImage image={userData?.profileImageUrl} />
          {userData && (
            <FormElementWrapper>
              <FormLabel essential={true}>??????(??????)</FormLabel>
              <TextInput
                name={'name'}
                // disabled={true}
                placeholder={'??????(??????)'}
                value={userEditFormik.values.name}
                onChange={userEditFormik.handleChange}
              />
            </FormElementWrapper>
          )}
          <FormElementWrapper>
            <FormLabel essential={true}>?????????</FormLabel>
            <TextInput
              // disabled={true}
              name={'nickname'}
              value={userEditFormik.values.nickname}
              onChange={userEditFormik.handleChange}
              placeholder={userData?.memberInfo.nickname}
            />
          </FormElementWrapper>
          <FormElementWrapper>
            <FormLabel essential={true}>????????????</FormLabel>
            <TextInput
              placeholder={'70??? ??????'}
              name={'introduce'}
              value={userEditFormik.values.introduce}
              onChange={userEditFormik.handleChange}
              error={userEditFormik.errors.introduce}
              touched={userEditFormik.touched.introduce}
            />
          </FormElementWrapper>
          <FormElementWrapper>
            <FormLabel essential={true}>????????????</FormLabel>
            <TextInput
              placeholder={',??? ??????(???????????? ??? 15??????, 10??? ??????)'}
              name={'hashTag'}
              value={userEditFormik.values.hashTag}
              onChange={userEditFormik.handleChange}
              error={userEditFormik.errors.hashTag}
              touched={userEditFormik.touched.hashTag}
            />
          </FormElementWrapper>
          <FormElementWrapper>
            <FormLabel essential={true}>????????????</FormLabel>
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
            <FormLabel essential={true}>??????</FormLabel>
            <TextInput
              name={'major'}
              value={userEditFormik.values.major}
              placeholder={'????????? ????????? ???????????????'}
              onChange={userEditFormik.handleChange}
              error={userEditFormik.errors.major}
              touched={userEditFormik.touched.major}
            />
          </FormElementWrapper>
          <FormElementWrapper>
            <FormLabel essential={true}>??????</FormLabel>
            <TextInput
              name={'studentID'}
              placeholder={userData?.memberInfo.studentID}
              disabled={true}
            />
          </FormElementWrapper>
          <FormElementWrapper>
            <FormLabel essential={true}>?????????</FormLabel>
            <TextInput
              // disabled={true}
              name={'positionType'}
              placeholder={userData?.memberInfo.positionType}
              value={userEditFormik.values.positionType}
              onChange={userEditFormik.handleChange}
            />
          </FormElementWrapper>
          <FormElementWrapper>
            <FormLabel>????????? ?????????</FormLabel>
            <TextInput
              placeholder={'????????? ???????????? ?????? ?????? ???????????? ???????????????.'}
              name={'gitEmail'}
              value={userEditFormik.values.gitEmail}
              onChange={userEditFormik.handleChange}
              error={userEditFormik.errors.gitEmail}
              touched={userEditFormik.touched.gitEmail}
            />
          </FormElementWrapper>
          <FormElementWrapper>
            <FormLabel>????????? ??????</FormLabel>
            <TextInput
              placeholder={' https:// ????????? ????????? ??????????????? '}
              name={'githubUrl'}
              value={userEditFormik.values.githubUrl}
              onChange={userEditFormik.handleChange}
              error={userEditFormik.errors.githubUrl}
            />
          </FormElementWrapper>
          <FormElementWrapper>
            <FormLabel>????????? ??????</FormLabel>
            <TextInput
              placeholder={'https://'}
              name={'blogUrl'}
              value={userEditFormik.values.blogUrl}
              onChange={userEditFormik.handleChange}
              error={userEditFormik.errors.blogUrl}
            />
          </FormElementWrapper>
          <FormElementWrapper>
            <FormLabel>???????????????/????????? ??????</FormLabel>
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
              text={'????????????'}
              color={'googleBlue'}
              onClick={() => onSubmit(userEditFormik.values)}
            />
          </FormButtonWrapper>
        </FormInner>
      </FormWrapper>
    </FormikProvider>
  );
};

export default memo(ProfileEdit);
