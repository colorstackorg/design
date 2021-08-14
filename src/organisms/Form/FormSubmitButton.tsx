import React from 'react';

import { css, cx } from '@emotion/css';
import Button from '../../atoms/Button/Button';
import { ButtonProps } from '../../atoms/Button/Button.types';
import { useForm } from './Form.state';

export type FormSubmitButtonProps = ButtonProps & { invisible?: boolean };

const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({
  children,
  className: otherClassName,
  invisible = false,
  ...props
}) => {
  const isValid: boolean = useForm((state) => state.isValid);
  const loading: boolean = useForm((state) => state.loading);

  const invisibleClassName: string = css({
    display: 'none'
  });

  const className: string = cx(
    { [invisibleClassName]: invisible },
    otherClassName
  );

  return (
    <Button
      disabled={!isValid}
      loading={loading}
      className={className}
      type="submit"
      {...props}
    >
      {children}
    </Button>
  );
};

export default FormSubmitButton;
