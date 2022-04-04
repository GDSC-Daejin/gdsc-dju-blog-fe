import React from 'react';
import {
  BottomButtonWrapper,
  LogoutButtonWrapper,
  MyBlogButtonWrapper,
  ProfileImageWrapper,
  ProfileInformation,
  ProfileJobPosition,
  ProfileName,
  SettingIconWrapper,
  WrittingButtonWrapper,
} from '../styled';
import ProfileImage from '../../ProfileImage';
import MockProfile from '../../../../Images/MockProfile.png';
import SettingIcon from '../../../../Images/SettingIcon';
import { GDSCButton, GDSCButtonL } from '../../Button';
import { userData } from '../../../../api/Mocks/userData';

const SideBarLogin = () => {
  return (
    <>
      <ProfileImageWrapper>
        <ProfileImage image={MockProfile} position="frontend" />
      </ProfileImageWrapper>
      <ProfileInformation>
        <ProfileName>{userData.memberInfo.nickname}</ProfileName>
        <ProfileJobPosition>
          {userData.memberInfo.positionType}
        </ProfileJobPosition>
        <SettingIconWrapper>
          <SettingIcon />
        </SettingIconWrapper>
      </ProfileInformation>
      <MyBlogButtonWrapper>
        <GDSCButtonL text="내 블로그" />
      </MyBlogButtonWrapper>
      <BottomButtonWrapper>
        <WrittingButtonWrapper>
          <GDSCButton text="글쓰기" />
        </WrittingButtonWrapper>
        <LogoutButtonWrapper>
          <GDSCButton text="로그아웃" />
        </LogoutButtonWrapper>
      </BottomButtonWrapper>
    </>
  );
};

export default SideBarLogin;
