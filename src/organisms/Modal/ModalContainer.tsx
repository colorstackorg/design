import React from 'react';
import { animated, Transition } from 'react-spring';

import { css } from '@emotion/css';
import { Size } from '../../utils/constants';
import useModal from './Modal.state';

const ModalContainer: React.FC = ({ children }) => {
  const show: boolean = useModal((state) => state.isOpen);

  const className: string = css({
    borderTopLeftRadius: Size.SS,
    borderTopRightRadius: Size.SS,
    left: 0,
    maxHeight: `calc(100vh - ${Size.XL}px)`,
    overflow: 'scroll',
    position: 'fixed',
    width: '100vw',
    zIndex: 13
  });

  return (
    <Transition
      items={show}
      enter={{ bottom: '0vh' }}
      from={{ bottom: '-100vh' }}
      leave={{ bottom: '-100vh' }}
    >
      {(style, item) => {
        if (!item) return null;

        return (
          <animated.div className={className} style={style}>
            {children}
          </animated.div>
        );
      }}
    </Transition>
  );
};

export default ModalContainer;
