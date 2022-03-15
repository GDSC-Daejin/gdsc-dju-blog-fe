import React from 'react';
import {
  BottomButtonWrapper,
  LogoutButtonWrapper,
  MyBlogButtonWrapper,
  ProfileImageWrapper,
  ProfileInformation,
  ProfileIntroduceWrapper,
  ProfileJobPosition,
  ProfileName,
  SettingIconWrapper,
  SideBarText,
  WrittingButtonWrapper,
} from '../SideBar/styled';
import ProfileImage from '../../ProfileImage';
import MockProfile from '../../../../Images/MockProfile.png';
import SettingIcon from '../../../../Images/SettingIcon';
import { GDSCButton, GDSCButtonL } from '../../Button';
import { SideBarData } from '../../SideBarData';

const opacityVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const SideBarLogin = () => {
  return (
    <>
      <ProfileImageWrapper>
        <ProfileImage image={MockProfile} position="frontend" />
      </ProfileImageWrapper>
      <ProfileInformation>
        <ProfileName>Gabi</ProfileName>
        <ProfileJobPosition>member</ProfileJobPosition>
        <SettingIconWrapper>
          <SettingIcon />
        </SettingIconWrapper>
      </ProfileInformation>
      <ProfileIntroduceWrapper>
        한 줄 소개글 쓰면 됩니다
      </ProfileIntroduceWrapper>
      <MyBlogButtonWrapper>
        <GDSCButtonL text="내 블로그" disable={false} />
      </MyBlogButtonWrapper>
      <BottomButtonWrapper>
        <WrittingButtonWrapper>
          <GDSCButton text="글쓰기" disable={false} />
        </WrittingButtonWrapper>
        <LogoutButtonWrapper>
          <GDSCButton text="로그아웃" disable={true} />
        </LogoutButtonWrapper>
      </BottomButtonWrapper>

      {SideBarData.map(({ name, to, id }) => (
        <SideBarText
          key={id}
          href={to}
          whileHover={{ scale: 1.1 }}
          variants={opacityVariants}
          transition={{ delay: 0.5, duration: 0.1 }}
        >
          {name}
        </SideBarText>
      ))}
    </>
  );
};

export default SideBarLogin;
