import React from 'react';

import { GDSCButton } from '../Button';
import { useRecoilState } from 'recoil';
import { AnimatePresence } from 'framer-motion';
import { modalState, MODAL_KEY } from '../../../store/modal';
import { ModalInner } from './styled';

const variants = {
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
const ApplyModal: React.FC = () => {
  const [modal, setModal] = useRecoilState(modalState);
  return (
    <AnimatePresence>
      {modal.show && (
        <ModalInner>
          <GDSCButton text={'제출하기'} color={'GDSC blue'} />
          <GDSCButton
            text={'돌아가기'}
            onClick={() => setModal({ ...modal, [MODAL_KEY.SHOW]: false })}
          />
        </ModalInner>
      )}
    </AnimatePresence>
  );
};

export default ApplyModal;
