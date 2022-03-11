import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(
      180deg,
      rgba(135, 135, 135, 0.1) 0%,
      rgba(177, 177, 177, 0) 18.76%
    ),
    #ffffff;
  padding: 55px 140px;
  border-top: 1px solid #eaeaea;
  font-size: 0.8rem;
  color: #666;
`;
export const CreatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CreatorTitle = styled.div`
  color: ${(props) => props.theme.color.grey900};
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSize.body1};
  margin-bottom: 10px;
  min-width: 100px;
`;
export const CreatorName = styled.p`
  color: ${(props) => props.theme.color.grey600};
  font-size: ${(props) => props.theme.fontSize.body2};
  //display: inline-block;
  max-width: 120px;
`;
export const CreatorSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  flex-wrap: wrap;
  &:nth-child(3) {
    margin-right: 0;
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
`;
export const StyledBlogIcon = styled.img`
  margin-right: 60px;
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
