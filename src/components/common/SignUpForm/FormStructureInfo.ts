import {
  RegisterOptions,
  UseFormRegister,
  FieldValues,
  UseFormSetValue,
} from 'react-hook-form';

export interface IFormStructure {
  refName: string;
  type: 'text' | 'tel' | 'email';
  title: string;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  placeholder?: string;
  condition?: RegisterOptions;
  errors: {
    [x: string]: any;
  };
}

export const errorCheck = (error: string | undefined) => {
  return error !== undefined ? true : false;
};
