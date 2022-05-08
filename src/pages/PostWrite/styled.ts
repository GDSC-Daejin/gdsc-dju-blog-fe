import styled, { css } from 'styled-components';

export const PostInformation = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin: 50px 0px 40px 0px;
`;
export const PostThumbnailWrapper = styled.div`
  display: flex;
  /*@media screen and (max-width: 630px) {
    & svg {
      width: 100px;
      height: 58px;
    }
  }*/
`;
export const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  flex-grow: 1;
  padding-left: 30px;
  margin-right: 20px;
  /*@media screen and (max-width: 630px) {
    padding-left: 8px;
  }*/
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
  /*@media screen and (max-width: 630px) {
    font-size: ${(props) => props.theme.fontSize.h6};
  }*/
`;
export const PostHashtag = styled.input`
  display: flex;
  font-size: ${(props) => props.theme.fontSize.body1};
  &::placeholder {
    color: ${(props) => props.theme.color.grey400};
  }
  border: none;
`;
export const PostGDSCButtonWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column-reverse;
`;
export const PostBottomButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin: 40px 0px 200px 0px;
`;
export const PostBottomButtonLWrapper = styled.div`
  display: flex;
  padding-right: 12px;
  @media screen and (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    display: none;
`;
export const PostBottomButtonCWrapper = styled.div`
  display: flex;
  padding-right: 12px;
`;
export const PostBottomButtonRWrapper = styled.div`
  display: flex;
`;
