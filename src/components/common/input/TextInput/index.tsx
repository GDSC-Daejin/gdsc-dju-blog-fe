import React, { useEffect, useState } from 'react';

import { ErrorBox, StyledInput, StyledInputWrapper } from './styled';

export interface Iprops {
  name?: string;
  setError?: (error: boolean) => void;
  placeholder?: string;
  image?: string;
  file?: boolean;
  onChange?: (e: any) => void;
  type?: string;
  value?: string;
  checkError?: (props: boolean) => void;
  disabled?: boolean;
}
const TextInput = (props: Iprops) => {
  const { name, placeholder, onChange, type, disabled } = props;
  const [error, setError] = useState({ name: '', error: false });

  return (
    <>
      <StyledInputWrapper error={error.error}>
        <StyledInput
          className={'formInput'}
          name={name}
          type={type}
          // onChange={(e: any) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
        />
      </StyledInputWrapper>
    </>
  );
};

export default TextInput;
