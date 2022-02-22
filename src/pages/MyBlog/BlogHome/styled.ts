import styled from 'styled-components';

export const ProfileWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: row;
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
  margin-bottom: 2px;
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
`;
export const BlogNamePosition = styled.p<{ color: string }>`
  font-size: ${(props) => props.theme.fontSize.h5};
  color: ${(props) => props.color};
  font-family: 'Google Sans', sans-serif;
  position: relative;
  bottom: -5px;
`;
export const IntroduceText = styled.p`
  font-size: ${(props) => props.theme.fontSize.body1};
  color: ${(props) => props.theme.color.grey900};
  max-width: 555px;
`;
