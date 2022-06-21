import {
  RegisterOptions,
  UseFormRegister,
  FieldValues,
  UseFormSetValue,
  UseFormWatch,
  UseFormTrigger,
} from 'react-hook-form';

export interface IFormStructure {
  refName: string;
  type: 'text' | 'tel' | 'email';
  title: string;
  select?: boolean;
  nickNameCheck?: boolean;
  register: UseFormRegister<FieldValues>;
  setValue?: UseFormSetValue<FieldValues>;
  watch?: UseFormWatch<FieldValues>;
  trigger?: UseFormTrigger<FieldValues>;
  checkNicknameState?: boolean;
  setCheckNickname?: React.Dispatch<React.SetStateAction<boolean>>;
  placeholder?: string;
  condition?: RegisterOptions;
  errors: {
    [x: string]: any;
  };
}

export const errorCheck = (error: string | undefined) => {
  return error !== undefined;
};
