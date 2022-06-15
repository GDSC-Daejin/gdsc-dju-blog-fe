import styled from 'styled-components';

export const SearchResultTitle = styled.div`
  display: flex;
  gap: 5px;
  align-items: end;
  margin: 6.25rem 0px 6.25rem;
  h2 {
    font-size: ${(props) => props.theme.fontSize.body1};
  }
  h3 {
    font-size: ${(props) => props.theme.fontSize.body3};
  }
`;

export const LayoutInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0px auto;
`;

export const NoResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 400px;
  span {
    font-size: ${(props) => props.theme.fontSize.body1};
    color: ${(props) => props.theme.color.grey400};
  }
`;
