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
import { alertState } from '../../../../store/alert';
import { useGetUserData } from '../../../../api/hooks/useGetUserData';

const SideBarLogin = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useRecoilState(menuState);
  const [UserCookies, setUserCookie, removeUserCookie] = useCookies(['user']);
  const [TokenCookies, setTokenCookie, removeTokenCookie] = useCookies([
    'token',
  ]);

  const { userData } = useGetUserData(TokenCookies.token);

  const handleLogout = () => {
    removeUserCookie('user', {
      path: '/',
    });
    removeTokenCookie('token', {
      path: '/',
    });
  };
  console.log(userData?.memberInfo);

  return (
    <>
      {userData && userData.memberInfo && (
        <>
          <ProfileImageWrapper>
            <ProfileImage
              image={userData.profileImageUrl}
              position={userData.memberInfo.positionType}
            />
          </ProfileImageWrapper>
          <ProfileInformation>
            <ProfileName>{userData.memberInfo.nickname}</ProfileName>
            <ProfileJobPosition>
              {userData.memberInfo.positionType}
            </ProfileJobPosition>
            <SettingIconWrapper
              onClick={() => {
                navigate(`/${userData.memberInfo.nickname}/edit`);
                setMenu({ ...menu, [MENU_KEY.APP_MENU]: false });
              }}
            >
              <SettingIcon />
            </SettingIconWrapper>
          </ProfileInformation>
          <MyBlogButtonWrapper>
            <GDSCButtonL
              text="내 블로그"
              onClick={() => {
                navigate(`/${userData.memberInfo.nickname}`);
                setMenu({ ...menu, [MENU_KEY.APP_MENU]: false });
              }}
            />
          </MyBlogButtonWrapper>
          <BottomButtonWrapper>
            <WrittingButtonWrapper>
              <GDSCButton
                text="글쓰기"
                onClick={() => {
                  navigate(`/post/write`);
                  setMenu({ ...menu, [MENU_KEY.APP_MENU]: false });
                }}
              />
            </WrittingButtonWrapper>
            <LogoutButtonWrapper>
              <GDSCButton text="로그아웃" onClick={handleLogout} />
            </LogoutButtonWrapper>
          </BottomButtonWrapper>
        </>
      )}
    </>
  );
};

export default SideBarLogin;
