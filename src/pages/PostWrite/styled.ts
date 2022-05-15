import styled, { css } from 'styled-components';

export const PostInformation = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0px 12px 0px;
`;
export const PostThumbnailWrapper = styled.div`
  display: flex;
`;
export const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 30px;
  @media screen and (max-width: 530px) {
    margin-left: 8px;
  }
`;
export const PostTitle = styled.input`
  display: flex;
  border: none;
  width: 100%;
  padding-bottom: 10px;
  font-size: ${(props) => props.theme.fontSize.h4};
  &::placeholder {
    color: ${(props) => props.theme.color.grey400};
  }
  @media screen and (max-width: 530px) {
    font-size: ${(props) => props.theme.fontSize.h6};
    padding-bottom: 4px;
`;
export const PostHashtag = styled.input`
  display: flex;
  font-size: ${(props) => props.theme.fontSize.body1};
  &::placeholder {
    color: ${(props) => props.theme.color.grey400};
  }
  border: none;
  @media screen and (max-width: 530px) {
    font-size: ${(props) => props.theme.fontSize.body3};
`;
export const PostGDSCButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 20px;
`;
export const PostBottomButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin: 40px 0px 200px 0px;
`;
export const PostBottomButtonLWrapper = styled.div`
  display: flex;
  padding-right: 12px;
  @media screen and (max-width: 530px) {
    display: none;
  }
`;
export const PostBottomButtonCWrapper = styled.div`
  display: flex;
  padding-right: 12px;
`;
export const PostBottomButtonRWrapper = styled.div`
  display: flex;
`;
export const PostThumbnailInner = styled.div`
  cursor: pointer;
  @media screen and (max-width: 530px) {
    & svg {
      width: 100px;
      height: 58px;
    }
  }
`;
export const PostFileImage = styled.img`
  width: 170px;
  height: 100px;
  border-radius: 10px;
  @media screen and (max-width: 530px) {
    width: 100px;
    height: 58px;
  }
`;
