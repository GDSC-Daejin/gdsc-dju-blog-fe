import React from 'react';
import { StyledButton } from './styled';
const colorStyle = (color?: string) => {
  switch (color) {
    case 'GDSC blue':
      return '#4385F3';
    case 'toss red':
      return '#F44336';
    case 'toss blue 200':
      return '#90C2FF';
    default:
      return '#fff';
  }
};
interface Iprops {
  text: string;
  color?: string;
  disable?: boolean;
}
const GDSCButtonL = (props: Iprops) => {
  const { text, color, disable } = props;

  return (
    <StyledButton
      background={colorStyle(color)}
      color={color && '#fff'}
      size={'large'}
      border={color && '#fff'}
      disable={disable}
    >
      {text}
    </StyledButton>
  );
};
const GDSCButton = (props: Iprops) => {
  const { text, color, disable } = props;

  return (
    <StyledButton
      color={color && '#fff'}
      border={color && '#fff'}
      background={colorStyle(color)}
      disable={disable}
    >
      {text}
    </StyledButton>
  );
};

export { GDSCButtonL, GDSCButton };
