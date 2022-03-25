import styled from 'styled-components';

export const ProfileWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 86px;
`;
export const ProfileImageWrapper = styled.div`
  margin-right: 90px;
`;
export const ProfileDetailWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
export const Role = styled.p`
  color: ${(props) => props.theme.color.grey500};
  font-size: ${(props) => props.theme.fontSize.body1};
  font-family: 'Google Sans', sans-serif;
`;
export const BlogNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  margin-bottom: 3px;
`;
export const BlogName = styled.h2`
  margin-right: 10px;
  font-size: ${(props) => props.theme.fontSize.h2};
  font-weight: bold;
  font-family: 'Google Sans', sans-serif;
  line-height: 1.2;
`;
export const BlogNamePosition = styled.p<{ color: string }>`
  font-size: ${(props) => props.theme.fontSize.h5};
  color: ${(props) => props.color};
  font-family: 'Google Sans', sans-serif;
  position: relative;
  bottom: -7px;
`;
export const SettingIconWrapper = styled.div`
  margin-left: 43px;
  display: flex;
  flex-direction: column-reverse;
  height: 36px;
  cursor: pointer;
`;
export const IntroduceText = styled.p`
  font-size: ${(props) => props.theme.fontSize.body1};
  color: ${(props) => props.theme.color.grey900};
  max-width: 555px;
`;
export const HashTageSection = styled.section`
  margin-top: 25px;
  display: flex;
  max-width: 555px;
  flex-wrap: wrap;
`;
export const HashTageWrapper = styled.div`
  margin-bottom: 12px;
`;
export const TopMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 59px;
`;
export const ButtonWrapper = styled.div`
  width: 216px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const PostSectionWrapper = styled.section`
  margin-bottom: 110px;
`;
export const PostCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;
export const PageBarSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 215px;
`;
