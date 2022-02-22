import React from 'react';
import { HashTageWrapper } from './styled';

const HashTageLight = (props: { text: string }) => {
  const { text } = props;
  return <HashTageWrapper light={true}>#{text}</HashTageWrapper>;
};
const HashTageDark = (props: { text: string }) => {
  const { text } = props;
  return <HashTageWrapper light={false}>#{text}</HashTageWrapper>;
};

export { HashTageLight, HashTageDark };
