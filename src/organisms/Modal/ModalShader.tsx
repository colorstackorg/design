import React from 'react';
import { animated, Transition } from 'react-spring';

import { css } from '@emotion/css';
import { Color } from '../../utils/constants';
import useModal from './Modal.state';
import ModalUtils from './Modal.utils';

const ModalShader: React.FC = () => {
  const show: boolean = useModal((state) => state.isOpen);

  const className: string = css({
    backgroundColor: Color.BLACK,
    height: '100vh',
    left: 0,
    position: 'fixed',
    top: 0,
    width: '100vw',
    zIndex: 11
  });

  return (
    <Transition
      items={show}
      enter={{ opacity: 0.75 }}
      from={{ opacity: 0 }}
      leave={{ opacity: 0 }}
    >
      {(style, item: boolean) => {
        if (!item) return null;

        return (
          <animated.div
            aria-label="Modal Shader"
            role="button"
            onClick={ModalUtils.closeModal}
            className={className}
            tabIndex={0}
            style={style}
          />
        );
      }}
    </Transition>
  );
};

export default ModalShader;
