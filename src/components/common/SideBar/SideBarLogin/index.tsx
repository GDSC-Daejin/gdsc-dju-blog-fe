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
import MockProfile from '../../../../assets/MockProfile.png';
import SettingIcon from '../../../../assets/SettingIcon';
import { GDSCButton, GDSCButtonL } from '../../Button';
import { userData } from '../../../../api/Mocks/userData';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { MENU_KEY, menuState } from '../../../../store/menu';

const SideBarLogin = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useRecoilState(menuState);

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
        <GDSCButtonL
          text="내 블로그"
          onClick={() => {
            navigate(`/:user_name`);
            setMenu({ ...menu, [MENU_KEY.APPMENU]: false });
          }}
        />
      </MyBlogButtonWrapper>
      <BottomButtonWrapper>
        <WrittingButtonWrapper>
          <GDSCButton
            text="글쓰기"
            onClick={() => {
              navigate(`/post/write`);
              setMenu({ ...menu, [MENU_KEY.APPMENU]: false });
            }}
          />
        </WrittingButtonWrapper>
        <LogoutButtonWrapper>
          <GDSCButton text="로그아웃" />
        </LogoutButtonWrapper>
      </BottomButtonWrapper>
    </>
  );
};

export default SideBarLogin;
