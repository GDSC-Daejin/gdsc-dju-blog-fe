import styled from 'styled-components';

export const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
export const PositionCircle = styled.div<{ color?: string }>`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 10px;
  background: ${(props) => props.color};
`;
export const StyledImageWrapper = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  align-items: center;
  position: relative;
`;
