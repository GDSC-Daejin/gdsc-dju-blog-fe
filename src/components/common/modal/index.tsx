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
const Modal: React.FC = () => {
  const [modal, setModal] = useRecoilState(modalState);
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
                <ModalContent>{modal.content}</ModalContent>
                <ModalButtonWrapper>
                  <GDSCButton
                    text={'임시저장'}
                    onClick={() =>
                      setModal({ ...modal, [MODAL_KEY.SHOW]: false })
                    }
                  />
                  <GDSCButton text={'삭제하기'} color={'toss red'} />
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
