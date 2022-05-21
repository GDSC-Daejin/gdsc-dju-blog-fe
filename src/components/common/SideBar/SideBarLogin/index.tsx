import React, { useEffect } from 'react';
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
import ProfileImage from '../../ProfileImage';
import MockProfile from '../../../../assets/MockProfile.png';
import SettingIcon from '../../../../assets/SettingIcon';
import { GDSCButton, GDSCButtonL } from '../../Button';
import { userData } from '../../../../api/Mocks/userData';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { MENU_KEY, menuState } from '../../../../store/menu';
import { useCookies } from 'react-cookie';

const SideBarLogin = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useRecoilState(menuState);
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  return (
    <>
      <ProfileImageWrapper>
        <ProfileImage image={MockProfile} position="frontend" />
      </ProfileImageWrapper>
      <ProfileInformation>
        <ProfileName></ProfileName>
        {/* {user.memberInfo.nickname ?? user.username} */}
        <ProfileJobPosition></ProfileJobPosition>
        {/* {user.memberInfo.positionType} */}
        <SettingIconWrapper>
          <SettingIcon />
        </SettingIconWrapper>
      </ProfileInformation>
      <MyBlogButtonWrapper>
        <GDSCButtonL
          text="내 블로그"
          onClick={() => {
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
          <GDSCButton
            text="로그아웃"
            onClick={() => {
              removeCookie('user', {
                path: '/',
              });
            }}
          />
        </LogoutButtonWrapper>
      </BottomButtonWrapper>
    </>
  );
};

export default SideBarLogin;
