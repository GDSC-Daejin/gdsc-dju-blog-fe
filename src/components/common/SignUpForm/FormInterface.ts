import {
  RegisterOptions,
  UseFormRegister,
  FieldValues,
  FieldError,
} from 'react-hook-form';

export interface IFormStructure {
  refName: string;
  type: 'text' | 'tel' | 'email';
  title: string;
  register: UseFormRegister<FieldValues>;
  placeholder?: string;
  condition?: RegisterOptions;
  errors: {
    [x: string]: any;
  };
}
