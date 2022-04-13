import { atom } from 'recoil';
const MODAL = 'modal';

export const MODAL_KEY = {
  SHOW: 'show',
  TITLE: 'title',
  CONTENT: 'content',
  TYPE: 'type',
};
export const ModalState = {
  [MODAL_KEY.SHOW]: true,
  [MODAL_KEY.TITLE]: '',
  [MODAL_KEY.CONTENT]: '정말 이대로 나가시겠어요? 작성해둔 글이 사라져요!',
  [MODAL_KEY.TYPE]: '',
  onClick: () => {
    return 0;
  },
};
export const modalState = atom<typeof ModalState>({
  key: MODAL,
  default: ModalState,
});
