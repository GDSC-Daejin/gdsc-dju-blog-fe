import React from 'react';

import { GDSCButton } from '../Button';
import { useRecoilState } from 'recoil';
import { AnimatePresence } from 'framer-motion';
import { modalState, MODAL_KEY } from '../../../store/modal';
import {
  ModalBackground,
  ModalButtonWrapper,
  ModalContent,
  ModalContentWrapper,
  ModalInner,
} from './styled';
import OutsideClickHandler from '../../../Utils/OutsideClickHandler';

interface ModalProps {
  onClick?: () => void;
}
const modalAnimate = {
  active: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  unActive: {
    opacity: 0,
    scale: 0,
    y: 200,
  },
};
const modalType = {
  login: {
    description: '로그인이 필요한 서비스입니다.',
    leftButton: '뒤로가기',
    rightButton: '로그인',
  },
  savePost: {
    description: '정말 이대로 나가시겠어요? 작성해둔 글이 사라져요!',
    leftButton: '아니요',
    rightButton: '삭제하기',
  },
  uploadPost: {
    description: '작성하신 글을 업로드 할까요?',
    leftButton: '뒤로가기',
    rightButton: '업로드',
  },
};
const Modal: React.FC<ModalProps> = ({ onClick }) => {
  const [modal, setModal] = useRecoilState(modalState);
  console.log(onClick);
  return (
    <AnimatePresence>
      {modal.show && (
        <ModalBackground
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <OutsideClickHandler
            outsideClick={() => setModal({ ...modal, [MODAL_KEY.SHOW]: false })}
          >
            <ModalInner
              variants={modalAnimate}
              initial={'unActive'}
              animate={'active'}
              transition={{ duration: 0.5 }}
            >
              <ModalContentWrapper>
                <ModalContent>
                  {modalType[modal.type as keyof typeof modalType].description}
                </ModalContent>
                <ModalButtonWrapper>
                  <GDSCButton
                    text={
                      modalType[modal.type as keyof typeof modalType].leftButton
                    }
                    onClick={() =>
                      setModal({ ...modal, [MODAL_KEY.SHOW]: false })
                    }
                  />
                  <GDSCButton
                    text={
                      modalType[modal.type as keyof typeof modalType]
                        .rightButton
                    }
                    color={'tossRed'}
                    onClick={() => (onClick ? onClick() : undefined)}
                  />
                </ModalButtonWrapper>
              </ModalContentWrapper>
            </ModalInner>
          </OutsideClickHandler>
        </ModalBackground>
      )}
    </AnimatePresence>
  );
};

export default Modal;
