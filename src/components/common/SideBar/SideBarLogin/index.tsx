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
  WriteButtonWrapper,
} from '../styled';
import ProfileImage from '../../ProfileImage';
import SettingIcon from '../../../../assets/SettingIcon';
import { GDSCButton, GDSCButtonL } from '../../Button';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { menuState } from '../../../../store/menu';
import { useCookies } from 'react-cookie';
import { IUserDataType } from '../../../../types/userDataType';

const SideBarLogin: React.FC<{ userData: IUserDataType | undefined }> = ({
  userData,
}) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useRecoilState(menuState);
  const [UserCookies, setUserCookie, removeUserCookie] = useCookies(['user']);
  const [TokenCookies, setTokenCookie, removeTokenCookie] = useCookies([
    'token',
  ]);
  const postBlock = userData?.role === 'GUEST';

  const handleLogout = () => {
    removeUserCookie('user', {
      path: '/',
    });
    removeTokenCookie('token', {
      path: '/',
    });
    window.location.href = 'https://gdsc-dju-blog.web.app/';
  };

  return (
    <>
      {userData && (
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
                setMenu({ ...menu, isOpen: false });
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
                setMenu({ ...menu, isOpen: false });
              }}
            />
          </MyBlogButtonWrapper>
          <BottomButtonWrapper>
            <WriteButtonWrapper>
              <GDSCButton
                text="글쓰기"
                disable={postBlock}
                onClick={() => {
                  !postBlock && navigate(`/post/write`);
                  !postBlock && setMenu({ ...menu, isOpen: false });
                }}
              />
            </WriteButtonWrapper>
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
