import styled from 'styled-components';

export const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-right: 90px;
`;
export const PositionCircle = styled.div<{ color?: string }>`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 5px;
  background: ${(props) => props.color};
`;
export const StyledImageWrapper = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  align-items: center;
  position: relative;
`;
