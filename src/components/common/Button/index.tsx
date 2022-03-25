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
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}
const GDSCButtonL = (props: Iprops) => {
  const { text, color, disable, onClick, type } = props;
}

  return (
    <StyledButton
      background={colorStyle(color)}
      color={color && '#fff'}
      size={'large'}
      border={color && '#fff'}
      disable={disable}
      onClick={onClick}
      type={type}
    >
      {text}
    </StyledButton>
  );
};
const GDSCButton = (props: Iprops) => {
  const { text, color, disable, onClick, type } = props;

  return (
    <StyledButton
      color={color && '#fff'}
      border={color && '#fff'}
      background={colorStyle(color)}
      disable={disable}
      onClick={onClick}
      type={type}
    >
      {text}
    </StyledButton>
  );
};

export { GDSCButtonL, GDSCButton };
