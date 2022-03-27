import styled from 'styled-components';

export const GdscLogoWrapper = styled.div`
  margin-right: 14px;
  @media screen and (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    & svg {
      width: 40px;
      height: 20px;
    }
  }
`;
export const DaejinUnivLogoWrapper = styled.div`
  width: 35px;
  padding-top: 12px;
  padding-bottom: 5px;
  display: flex;
  margin-left: 5px;
  @media screen and (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    display: none;
  }
`;
export const GdscBlogLogoWrapper = styled.div`
  display: flex;
  padding-bottom: 20px;
  @media screen and (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    display: none;
  }
`;
export const SubLogoWrapper = styled.div`
  align-items: center;
`;