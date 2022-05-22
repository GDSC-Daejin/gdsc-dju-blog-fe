import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SideBarWrapper = styled(motion.div)`
  display: flex;
  position: fixed;
  z-index: 1009;
  left: 0px;
  top: 0px;
  width: 400px;
  height: 100%;
  @media screen and (max-width: 500px) {
    width: 100vw;
    height: 100vh;
  }
`;
export const SideBarInner = styled(motion.aside)`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  justify-content: center;
  @media screen and (max-width: 500px) {
    align-items: center;
  }
`;
export const MenuToggleIconWrapper = styled.div`
  display: flex;
  border: none;
  position: absolute;
  top: 24px;
  left: 55px;
  @media screen and (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    top: 17px;
    left: 20px;
    & svg {
      width: 20px;
      height: 20px;
    }
  }
`;
export const SideBarText = styled(motion.a)`
  display: block;
  margin: 20px;
  color: ${(props) => props.theme.color.grey900};
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSize.h7};
  font-weight: 600;
`;
export const GrayBox = styled(motion.div)`
  display: flex;
  position: fixed;
  background: ${(props) => props.theme.color.grey900};
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  opacity: 0.35;
`;
export const SideBarDesign = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
`;
export const ProfileImageWrapper = styled.div`
  display: flex;
  margin-top: 60px;
  margin-left: 20px;
  margin-bottom: 24px;
  @media screen and (max-width: 500px) {
    margin-left: 0;
    margin-bottom: 14px;
  }
`;
export const ProfileInformation = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    margin-bottom: 12px;
  }
`;
export const ProfileName = styled.div`
  display: flex;
  padding-right: 10px;
  font-size: ${(props) => props.theme.fontSize.h4};
  font-weight: bold;
  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontSize.h5};
  }
`;
export const ProfileJobPosition = styled.div`
  display: flex;
  padding-right: 10px;
  padding-bottom: 5px;
  font-size: ${(props) => props.theme.fontSize.body1};
  color: ${(props) => props.theme.color.grey600};
  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontSize.body3};
  }
`;
export const SettingIconWrapper = styled.div`
  display: flex;
  margin-bottom: 7px;
  cursor: pointer;
  & svg {
    @media screen and (max-width: 500px) {
      width: 12px;
      height: 12px;
    }
  }
`;
export const MyBlogButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
`;
export const BottomButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
`;
export const WrittingButtonWrapper = styled.div`
  display: flex;
  margin-right: 16px;
`;
export const LogoutButtonWrapper = styled.div`
  display: flex;
`;
export const GdscSideLogoWrapper = styled.div`
  display: flex;
  margin-top: 150px;
  margin-left: 10px;
  margin-bottom: 25px;
  & svg {
    width: 95px;
    height: 45px;
    @media screen and (max-width: 500px) {
      width: 80px;
      height: 40px;
    }
  }
`;
export const GdscSideUnivWrapper = styled.div`
  display: flex;
  width: 100px;
  margin-left: 7px;
  margin-bottom: 10px;
  & svg {
    height: 18px;
    @media screen and (max-width: 500px) {
      width: 85px;
      height: 16px;
    }
  }
`;
export const GdscSideBlogLogoWrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
  & svg {
    width: 216px;
    height: 40px;
    @media screen and (max-width: 500px) {
      width: 182px;
      height: 35px;
    }
  }
`;
export const GoogleLogoWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 28px;
  top: 8px;
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
  padding-bottom: 60px;
  @media screen and (max-width: 500px) {
    padding-bottom: 22px;
  }
  & button {
    padding: 5px 25px 8px 50px;
  }
`;
export const MobileMenuIconWrapper = styled.div`
  position: absolute;
  top: 54px;
  right: 31px;
  display: none;
  @media screen and (max-width: 500px) {
    display: flex;
  }
`;
