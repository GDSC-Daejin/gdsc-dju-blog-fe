import styled from 'styled-components';

export const ModalInner = styled.div`
  margin: 0 auto;
  background: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  z-index: 999;
`;
