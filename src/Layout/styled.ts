import styled from 'styled-components';

export const NavigationWrapper = styled.div`
  @media screen and (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    display: none;
`;
export const MobileNavigationWrapper = styled.div`
  display: none
}
  @media screen and (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    display: flex;
`;
