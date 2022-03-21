import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const SideBarWrapper = styled(motion.div)`
  display: flex;
  position: fixed;
  z-index: 1009;
  left: 0px;
  top: 0px;
  width: 486px;
  height: 100vh;
`;
export const SideBarInner = styled(motion.aside)`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
`;
export const SideBarBtnInner = styled.div`
  position: absolute;
  left: 55px;
`;
export const SideBarBtnWrapper = styled.div`
  position: sticky;
  top: 25px;
  z-index: 1002;
`;
export const SideBarText = styled(motion.a)`
  display: block;
  margin: 20px;
  color: black;
  text-decoration: none;
  font-size: 1.75rem;
  font-weight: 600;
`;
export const SideBarBtnIcon = styled.div`
  border: none;
  background-color: #ffffff;
  cursor: pointer;
`;
export const GrayBox = styled.div<{ open: boolean }>`
  display: none;
  ${(props: any) =>
    props.open
      ? css`
          display: flex;
          position: fixed;
          width: 100vw;
          height: 100vh;
          background-color: #191f18;
          right: 0px;
          top: 0px;
          z-index: 1003;
          opacity: 0.35;
        `
      : css`
          opacity: 0;
        `};
`;
export const SideBarDesign = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 143px;
  white-space: nowrap;
`;
export const ProfileImageWrapper = styled.div`
  display: flex;
  margin-top: 60px;
  padding-bottom: 24px;
`;
export const ProfileInformation = styled.div`
  display: flex;
  align-items: end;
  padding-bottom: 4px;
`;
export const ProfileName = styled.div`
  display: flex;
  padding-right: 10px;
  font-size: 3.2rem;
  font-weight: bold;
`;
export const ProfileJobPosition = styled.div`
  display: flex;
  padding-right: 10px;
  padding-bottom: 5px;
  font-size: 1.6rem;
  color: #6b7684;
`;
export const SettingIconWrapper = styled.div`
  display: flex;
  padding-bottom: 7px;
`;
export const ProfileIntroduceWrapper = styled.div`
  display: flex;
  font-size: 1.6rem;
  padding-bottom: 20px;
  color: #191f28;
`;
export const MyBlogButtonWrapper = styled.div`
  display: flex;
  padding-bottom: 12px;
`;
export const BottomButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 50px;
`;
export const WrittingButtonWrapper = styled.div`
  display: flex;
  padding-right: 16px;
`;
export const LogoutButtonWrapper = styled.div`
  display: flex;
`;
export const GdscSideLogoWrapper = styled.div`
  display: flex;
  margin-top: 150px;
  padding-bottom: 25px;
`;
export const GdscSideUnivWrapper = styled.div`
  display: flex;
  width: 100px;
  padding-bottom: 10px;
  & svg {
    height: 18px;
  }
`;
export const GdscSideBlogLogoWrapper = styled.div`
  display: flex;
  padding-bottom: 8px;
`;
export const GoogleLogoWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 10px;
  top: 7px;
  & div {
    border-radius: 5px;
    width: 34px;
    height: 32px;
    top: 1px;
    left: 10px;
  }
`;
export const GoogleButtonWrapper = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 80px;
`;
export const SideMenuWrapper = styled.div`
  display: flex;
`;
