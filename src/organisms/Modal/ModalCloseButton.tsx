import React from 'react';
import { X as XIcon } from 'react-feather';

import { css } from '@emotion/css';
import { Size } from '../../utils/constants';
import ModalUtils from './Modal.utils';

const ModalCloseButton: React.FC = () => {
  const className: string = css({
    backgroundColor: 'inherit',
    cursor: 'pointer',
    display: 'block',
    marginBottom: Size.MD,
    marginLeft: 'auto',
    marginRight: Size.SM
  });

  return (
    <button
      aria-label="Close Modal Button"
      className={className}
      onClick={ModalUtils.closeModal}
      type="button"
    >
      <XIcon />
    </button>
  );
};

export default ModalCloseButton;
