import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SideBarWrapper = styled(motion.div)`
  display: flex;
  position: fixed;
  z-index: 1009;
  left: 0px;
  top: 0px;
  width: 400px;
  height: 100vh;
`;
export const SideBarInner = styled(motion.aside)`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  justify-content: center;
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
/*export const SideBarBtnInner = styled.div`
  position: absolute;
  left: 55px;
  @media screen and (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    left: 20px;
`;
export const SideBarBtnWrapper = styled.div`
  position: sticky;
  top: 24px;
  z-index: 1002;
  @media screen and (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    top: 17px;
`;*/
export const SideBarText = styled(motion.a)`
  display: block;
  margin: 20px;
  color: ${(props) => props.theme.color.grey900};
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSize.h7};
  font-weight: 600;
`;
/*export const SideBarBtnIconWrapper = styled.div`
  border: none;
  color: ${(props) => props.theme.color.white};
  cursor: pointer;
  & svg {
    @media screen and (max-width: ${(props) =>
      props.theme.windowSize.tablet}px) {
      width: 20px;
      height: 20px;
  }
`;*/
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
  padding-bottom: 24px;
`;
export const ProfileInformation = styled.div`
  display: flex;
  align-items: end;
  padding-bottom: 20px;
`;
export const ProfileName = styled.div`
  display: flex;
  padding-right: 10px;
  font-size: ${(props) => props.theme.fontSize.h4};
  font-weight: bold;
`;
export const ProfileJobPosition = styled.div`
  display: flex;
  padding-right: 10px;
  padding-bottom: 5px;
  font-size: ${(props) => props.theme.fontSize.body1};
  color: ${(props) => props.theme.color.grey600};
`;
export const SettingIconWrapper = styled.div`
  display: flex;
  padding-bottom: 7px;
  cursor: pointer;
`;
export const MyBlogButtonWrapper = styled.div`
  display: flex;
  padding-bottom: 12px;
`;
export const BottomButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
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
  padding-left: 10px;
  padding-bottom: 25px;
  & svg {
    width: 95px;
    height: 45px;
  }
`;
export const GdscSideUnivWrapper = styled.div`
  display: flex;
  width: 100px;
  padding-left: 7px;
  padding-bottom: 10px;
  & svg {
    height: 18px;
  }
`;
export const GdscSideBlogLogoWrapper = styled.div`
  display: flex;
  padding-bottom: 19px;
  & svg {
    width: 216px;
    height: 40px;
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
  padding-bottom: 22px;
  & button {
    padding: 5px 25px 8px 50px;
  }
`;
export const MobileMenuIconWrapper = styled.div`
  position: absolute;
  top: 54px;
  right: 31px;
`;
