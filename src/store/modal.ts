import { atom } from 'recoil';
const MODAL = 'modal';

export const MODAL_KEY = {
  SHOW: 'show',
  TYPE: 'type',
};
export const ModalState = {
  [MODAL_KEY.SHOW]: false,
  [MODAL_KEY.TYPE]: 'login',
  onClick: null,
};

interface IModalState {
  [p: string]: string | boolean | (() => void) | null;
  onClick: (() => void) | null;
}

export const modalState = atom<IModalState>({
  key: MODAL,
  default: ModalState,
});
