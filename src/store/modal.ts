import { atom } from 'recoil';
const MODAL = 'modal';

export const MODAL_KEY = {
  SHOW: 'show',
  TYPE: 'type',
};
export const ModalState = {
  [MODAL_KEY.SHOW]: false,
  [MODAL_KEY.TYPE]: 'login',
  onClick: () => {
    return 0;
  },
};
export const modalState = atom<typeof ModalState>({
  key: MODAL,
  default: ModalState,
});
