import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
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
`;
export const CreatorName = styled.div`
  color: ${(props) => props.theme.color.grey900};

  font-size: ${(props) => props.theme.fontSize.body2};
`;
export const CreatorSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 28px;
  width: 100px;
  flex-wrap: wrap;
`;
