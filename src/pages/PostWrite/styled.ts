import styled, { css } from 'styled-components';

export const PostInformation = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin: 50px 0px 40px 0px;
`;
export const PostThumbnailWrapper = styled.div`
  display: flex;
`;
export const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;
export const PostTitle = styled.div`
  display: flex;
  padding-bottom: 10px;
  font-size: ${(props) => props.theme.fontSize.h3};
  color: ${(props) => props.theme.color.grey400};
`;
export const PostHashtag = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.fontSize.body1};
  color: ${(props) => props.theme.color.grey400};
`;
export const PostGDSCButtonWrapper = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
`;
export const PostBottomButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin: 40px 0px 100px 0px;
`;
export const PostBottomButtonLWrapper = styled.div`
  display: flex;
  padding-right: 12px;
`;
export const PostBottomButtonCWrapper = styled.div`
  display: flex;
  padding-right: 12px;
`;
export const PostBottomButtonRWrapper = styled.div`
  display: flex;
`;
