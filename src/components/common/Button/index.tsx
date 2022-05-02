import React from 'react';
import { StyledButton } from './styled';
import { theme } from '../../../styles/theme';

interface ButtonProps {
  text: string;
  color?: keyof typeof theme.color;
  disable?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}
const GDSCButtonL: React.FC<ButtonProps> = ({
  text,
  color,
  disable,
  onClick,
  type,
}) => {
  return (
    <StyledButton
      background={color ? color : 'white'}
      color={color ? 'white' : 'grey900'}
      size={'large'}
      border={color ? color : 'white'}
      disable={disable}
      onClick={onClick}
      type={type}
    >
      {text}
    </StyledButton>
  );
};
const GDSCButton: React.FC<ButtonProps> = ({
  text,
  color,
  disable,
  onClick,
  type,
}) => {
  return (
    <StyledButton
      color={color ? 'white' : 'grey900'}
      border={color ? color : 'white'}
      background={color ? color : 'white'}
      disable={disable}
      onClick={onClick}
      type={type}
    >
      {text}
    </StyledButton>
  );
};

export { GDSCButtonL, GDSCButton };
