import styled from 'styled-components';

export const GdscLogoWrapper = styled.div`
  margin-right: 20px;
  @media screen and (max-width: 520px) {
    & svg {
      width: 40px;
      height: 20px;
    }
  }
`;
export const DaejinUnivLogoWrapper = styled.div`
  width: 52px;
  padding-top: 12px;
  padding-bottom: 5px;
  display: flex;
  margin-left: 5px;
  @media screen and (max-width: 520px) {
    display: none;
  }
`;
export const GdscBlogLogoWrapper = styled.div`
  display: flex;
  padding-bottom: 20px;
  @media screen and (max-width: 700px) {
    & svg {
      width: 100px;
    }
  }
  @media screen and (max-width: 520px) {
    display: none;
  }
`;
export const SubLogoWrapper = styled.div`
  align-items: center;
`;
