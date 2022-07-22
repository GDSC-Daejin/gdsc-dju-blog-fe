import styled from 'styled-components';

export const SearchResultTitle = styled.div`
  width: 1200px;
  color: ${(props) => props.theme.colors.grey900};
  .searchResultTitle {
    display: flex;
    align-items: center;
    align-self: flex-start;
    padding: 50px 0px;
    h2 {
      font-size: ${({ theme }) => theme.fontSize.body1};
    }
    h3 {
      font-size: ${({ theme }) => theme.fontSize.body3};
    }
  }
  .searchResultContent {
    padding: 20px 0px;
    span {
      font-size: ${({ theme }) => theme.fontSize.body3};
      font-weight: 500;
      line-height: 1.625rem;
    }
  }
`;

export const PageBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 110px 0px;
`;

export const LayoutInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 50px auto;
`;

export const BlogCardGridLayoutWrapper = styled.div`
  padding: 10px 0px;
`;

export const NoResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 400px;
  span {
    font-size: ${({ theme }) => theme.fontSize.body1};
    color: ${({ theme }) => theme.colors.grey400};
  }
`;
