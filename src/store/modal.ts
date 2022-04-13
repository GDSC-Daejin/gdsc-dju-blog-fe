import { atom } from 'recoil';
const MODAL = 'modal';

export const MODAL_KEY = {
  SHOW: 'show',
  TITLE: 'title',
  CONTENT: 'content',
  TYPE: 'type',
};
export const ModalState = {
  [MODAL_KEY.SHOW]: false,
  [MODAL_KEY.TITLE]: '',
  [MODAL_KEY.CONTENT]: '',
  [MODAL_KEY.TYPE]: '',
  onClick: () => {
    return 0;
  },
};
export const modalState = atom<typeof ModalState>({
  key: MODAL,
  default: ModalState,
});
