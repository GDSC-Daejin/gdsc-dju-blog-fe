import styled from 'styled-components';

export const NavigationDesign = styled.nav`
  background-color: ${(props) => props.theme.color.white};
  position: fixed;
  top: 0;
  z-index: 990;
  height: 70px;
  width: 100%;
  @media screen and (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    height: 60px;
  }
`;
export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 92%;
  margin: 0 auto;
  height: 100%;
`;
export const NavigationInner = styled.div`
  padding: 0 20px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
export const BlogWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 50px;
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    display: none;
  }
`;
export const DeskNavigationWrapper = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  position: relative;
`;
export const VectorWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.windowSize.tablet}px) {
    display: none;
  }
`;
export const SearchInputWrapper = styled.div`
  display: flex;
  position: relative;
  & svg {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 8px;
    &:hover {
      fill: ${(props) => props.theme.color.grey300};
    }
  }
`;
export const SearchWrapper = styled.label`
  display: flex;
  margin-right: 40px;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    display: none;
  }
`;
export const Search = styled.input`
  min-width: 400px;
  height: 30px;
  font-size: ${({ theme }) => theme.fontSize.body2};
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.color.grey300};
  padding-left: 20px;
  color: ${(props) => props.theme.color.grey900};
  @media (max-width: ${({ theme }) => theme.windowSize.desk}px) {
    min-width: 280px;
  }
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    display: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.color.grey300};
  }
`;

export const GdscLogoWrapper = styled.div`
  & svg {
    width: 40px;
    height: 20px;
    @media(min-width:  ${({ theme }) => theme.windowSize.tablet}px) {
      display: none;
    }
`;
