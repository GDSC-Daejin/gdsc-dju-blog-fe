import React, { memo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useGetMyData } from '../../../api/hooks/useGetMyData';
import UserService from '../../../api/UserService';
import { GDSCButton } from '../../../components/common/Button';
import TextInput from '../../../components/common/input/TextInput';
import ProfileEditImage from '../../../components/common/ProfileEditImage';
import { formValidation } from '../../../components/Validation/profileEdit';
import { ContainerInner, LayoutContainer } from '../../../styles/layouts';
import { IUserDataType, MemberInfo } from '../../../types/userDataType';

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
  const { register, handleSubmit, reset, formState } = useForm<MemberInfo>({
    mode: 'onChange',
  });

  const { errors } = formState;

  const onSubmit = async (values: MemberInfo) => {
    await UserService.updateMyData(values);
  };
  const formElements = Object.keys(formValidation) as Array<
    keyof typeof formValidation
  >;
  useEffect(() => {
    reset({
      generation: userData.memberInfo.generation,
      introduce: userData.memberInfo.introduce,
      nickname: userData.memberInfo.nickname,
      phoneNumber: userData.memberInfo.phoneNumber,
      major: userData.memberInfo.major,
      gitEmail: userData.memberInfo.gitEmail,
      studentID: userData.memberInfo.studentID,
      positionType: userData.memberInfo.positionType,
      hashTag: userData.memberInfo.hashTag,
      githubUrl: userData.memberInfo.githubUrl,
      blogUrl: userData.memberInfo.blogUrl,
      etcUrl: userData.memberInfo.etcUrl,
      birthday: userData.memberInfo.birthday,
    });
  }, [userData]);
  return (
    <FormWrapper>
      <FormInner>
        <FormTitleWrapper>
          <FormTitle>개인정보수정</FormTitle>
        </FormTitleWrapper>
        <ProfileEditImage image={userData?.profileImageUrl} />
        {formElements.map((element) => {
          const elementName = formValidation[element];
          return (
            <FormElementWrapper key={element}>
              <FormLabel essential={!!elementName.required}>
                {elementName.label}
              </FormLabel>
              <TextInput
                disabled={
                  elementName.isBlock ||
                  !!(elementName.isModifyBlock && userData.memberInfo[element])
                }
                error={errors[element]}
                placeholder={elementName.placeholder}
                {...register(element, elementName)}
              />
            </FormElementWrapper>
          );
        })}

        <FormButtonWrapper>
          <GDSCButton
            text={'저장하기'}
            color={'googleBlue'}
            onClick={() => handleSubmit(onSubmit)}
          />
        </FormButtonWrapper>
      </FormInner>
    </FormWrapper>
  );
};

export default memo(ProfileEdit);
