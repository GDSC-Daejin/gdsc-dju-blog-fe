import React from 'react';
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

const ProfileEdit = () => {
  const image = '';

  return (
    <LayoutContainer>
      <ContainerInner>
        <FormWrapper>
          <FormInner>
            <FormTitleWrapper>
              <FormTitle>개인정보수정</FormTitle>
            </FormTitleWrapper>
            <ProfileEditImage image={image} />
            <FormElementWrapper>
              <FormLabel essential={true}>이름(실명)</FormLabel>
              <TextInput disabled={true} placeholder={'김구글'} />
            </FormElementWrapper>
            <FormElementWrapper>
              <FormLabel>닉네임</FormLabel>
              <TextInput disabled={true} placeholder={'정제슨'} />
            </FormElementWrapper>
            <FormElementWrapper>
              <FormLabel essential={true}>한줄소개</FormLabel>
              <TextInput placeholder={'70자 제한'} />
            </FormElementWrapper>
            <FormElementWrapper>
              <FormLabel essential={true}>해시태그</FormLabel>
              <TextInput
                placeholder={',로 구분(해시태그 당 15글자, 10개 제한)'}
              />
            </FormElementWrapper>
            <FormElementWrapper>
              <FormLabel essential={true}>전화번호</FormLabel>
              <TextInput placeholder={'010-0000-0000'} />
            </FormElementWrapper>
            <FormElementWrapper>
              <FormLabel essential={true}>gmail</FormLabel>
              <TextInput placeholder={'gdsc@gmail.com'} />
            </FormElementWrapper>
            <FormElementWrapper>
              <FormLabel essential={true}>학과</FormLabel>
              <TextInput placeholder={'소속한 학과를 입력하세요'} />
            </FormElementWrapper>
            <FormElementWrapper>
              <FormLabel essential={true}>학번</FormLabel>
              <TextInput placeholder={'20221234'} />
            </FormElementWrapper>
            <FormElementWrapper>
              <FormLabel essential={true}>포지션</FormLabel>
              <TextInput disabled={true} placeholder={'Frontend'} />
            </FormElementWrapper>
            <FormElementWrapper>
              <FormLabel essential={true}>깃허브 주소</FormLabel>
              <TextInput placeholder={'https://'} />
            </FormElementWrapper>
            <FormElementWrapper>
              <FormLabel essential={true}>블로그 주소</FormLabel>
              <TextInput placeholder={'https://'} />
            </FormElementWrapper>
            <FormElementWrapper>
              <FormLabel essential={true}>포트폴리오/이력서 주소</FormLabel>
              <TextInput placeholder={'https://'} />
            </FormElementWrapper>
            <FormButtonWrapper>
              <GDSCButton text={'저장하기'} color={'GDSC blue'} />
            </FormButtonWrapper>
          </FormInner>
        </FormWrapper>
      </ContainerInner>
    </LayoutContainer>
  );
};

export default ProfileEdit;
