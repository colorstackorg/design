import React from 'react';
import { createPortal } from 'react-dom';

import useModal from './Modal.state';
import ModalShader from './ModalShader';

const ModalPortal: React.FC = () => {
  const content: JSX.Element = useModal((state) => state.content);

  return createPortal(
    <>
      <ModalShader />
      {content}
    </>,
    document.body
  );
};

export default ModalPortal;
