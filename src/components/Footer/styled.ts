import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  position: relative;
  background: linear-gradient(
      180deg,
      rgba(135, 135, 135, 0.1) 0%,
      rgba(177, 177, 177, 0) 18.76%
    ),
    #ffffff;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const FooterInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 55px 0;
  box-sizing: border-box;
  overflow: hidden;
  border-top: 1px solid #eaeaea;
  width: 100vw;
  height: 100%;
`;
export const CreatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CreatorTitle = styled.div`
  color: ${(props) => props.theme.color.grey700};
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSize.body1};
  margin-bottom: 10px;
  min-width: 100px;
  @media (max-width: 512px) {
    font-size: ${(props) => props.theme.fontSize.body2};
  }
}
`;
export const CreatorName = styled.p`
  color: ${(props) => props.theme.color.grey600};
  font-size: ${(props) => props.theme.fontSize.body2};
  //display: inline-block;
  max-width: 120px;
  margin-bottom: 6px;
  @media (max-width: 512px) {
    font-size: ${(props) => props.theme.fontSize.body3};
  }
  cursor: pointer;
}
`;
export const CreatorSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  //flex-wrap: wrap;
  @media (max-width: 512px) {
    margin-right: 20px;
  }

  &:nth-child(3) {
    margin-right: 0;
  }
  &:nth-child(5) {
    @media (max-width: 720px) {
      display: none;
    }
  }
  &:nth-child(6) {
    margin-right: 0;
    @media (max-width: 875px) {
      display: none;
    }
  }
`;
export const CreatorSectionInner = styled.div`
  display: flex;
  flex-direction: row;
`;
export const StyledTr = styled.tr`
  margin-right: 16px;
  &:nth-child(2) {
    margin-right: 0;
  }
`;
export const StyledColumn = styled.div`
  width: 1px;
  height: 100px;
  background: ${(props) => props.theme.color.grey300};
  margin: 0 30px;
  border: 0 solid;
  @media (max-width: 720px) {
    display: none;
  }
`;
export const BlogIconWrapper = styled.div`
  margin-right: 60px;
  @media (max-width: 512px) {
    margin-right: 38px;
  }
`;
export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Copyright = styled.span`
  position: absolute;
  width: 162px;
  display: flex;
  right: 0;
  bottom: 20px;
`;
