import React, { memo, useEffect, useState } from 'react';

import { ErrorBox, StyledInput, StyledInputWrapper } from './styled';

export interface Iprops {
  name?: string;
  error?: string;
  touched?: boolean;
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
  const { name, placeholder, onChange, type, disabled, error, touched } = props;
  console.log(`${name}: ${error}`);
  const errorToggle = !!(error && touched);
  console.log(error);
  console.log(touched);
  return (
    <>
      <StyledInputWrapper error={errorToggle}>
        <StyledInput
          className={'formInput'}
          name={name}
          type={type}
          onChange={onChange && onChange}
          placeholder={placeholder}
          disabled={disabled}
        />
      </StyledInputWrapper>
      {error && touched && <ErrorBox>{error}</ErrorBox>}
    </>
  );
};

export default memo(TextInput);
