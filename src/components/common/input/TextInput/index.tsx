import React, { forwardRef, memo } from 'react';
import { FieldError } from 'react-hook-form';

import { ErrorBox, StyledInput, StyledInputWrapper } from './styled';
import { FormikErrors, FormikTouched } from 'formik';

export interface Iprops {
  name?: string;
  error?: FieldError | undefined;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
  placeholder?: string;
  image?: string;
  file?: boolean;
  onChange?: (e: any) => void;
  type?: string;
  value?: string | null;
  disabled?: boolean;
}
const TextInput = forwardRef<HTMLInputElement, Iprops>(
  (
    { name, placeholder, onChange, type, disabled, error, touched, value },
    ref,
  ) => {
    return (
      <>
        <StyledInputWrapper error={false} disabled={!disabled}>
          <StyledInput
            className={'formInput'}
            name={name}
            type={type}
            ref={ref}
            onChange={onChange && onChange}
            placeholder={placeholder}
            disabled={disabled}
          />
        </StyledInputWrapper>
        <ErrorBox>{error && <>{error.message}</>}</ErrorBox>
      </>
    );
  },
);

export default TextInput;
