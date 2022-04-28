import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BlogCardButton = styled.button<{ ButtonActive: boolean }>`
  width: 40px;
  height: 4px;
  background-color: ${(props) =>
    props.ButtonActive ? props.theme.color.grey500 : props.theme.color.grey300};
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
