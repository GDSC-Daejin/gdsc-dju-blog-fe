import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from '../../../../store/user';
import ProfileImage from '../../ProfileImage';
import MockProfile from '../../../../assets/MockProfile.png';
import SettingIcon from '../../../../assets/SettingIcon';
import { GDSCButton, GDSCButtonL } from '../../Button';
import { ILoginUserData } from '../../../../types/userData';
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

const SideBarLogin = (user: ILoginUserData) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useRecoilState(userState);
  return (
    <>
      <ProfileImageWrapper>
        <ProfileImage image={MockProfile} position="frontend" />
      </ProfileImageWrapper>
      <ProfileInformation>
        <ProfileName>{user.memberInfo.nickname ?? user.username}</ProfileName>
        <ProfileJobPosition>{user.memberInfo.positionType}</ProfileJobPosition>
        <SettingIconWrapper>
          <SettingIcon />
        </SettingIconWrapper>
      </ProfileInformation>
      <MyBlogButtonWrapper>
        <GDSCButtonL
          text="내 블로그"
          onClick={() => {
            navigate(`/${user.memberInfo.nickname}`);
          }}
        />
      </MyBlogButtonWrapper>
      <BottomButtonWrapper>
        <WrittingButtonWrapper>
          <GDSCButton
            text="글쓰기"
            onClick={() => {
              navigate(`/post/write`);
            }}
          />
        </WrittingButtonWrapper>
        <LogoutButtonWrapper>
          <GDSCButton
            text="로그아웃"
            onClick={() => {
              localStorage.removeItem('token');
              localStorage.removeItem('recoil-persist');
              setUserData({ ...userData, id: 0 });
              navigate(`/`);
            }}
          />
        </LogoutButtonWrapper>
      </BottomButtonWrapper>
    </>
  );
};

export default SideBarLogin;
