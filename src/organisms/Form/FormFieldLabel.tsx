import React from 'react';

import { css, cx } from '@emotion/css';
import { Color, Size } from '../../utils/constants';
import { useFormField } from './FormField.state';
import FormFieldLabelText from './FormFieldLabelText';

type FormFieldLabelProps = React.HTMLProps<HTMLDivElement>;

const FormFieldLabel: React.FC<FormFieldLabelProps> = ({
  className: otherClassName,
  ...props
}) => {
  const error: boolean = useFormField((state) => !!state.error);
  const label: string = useFormField((state) => state.label);

  // If there is no label, then don't show the label. This would be the case
  // for example when an input only has a placeholder but nothing else.
  if (!label) return null;

  const baseClassName: string = css({
    display: 'flex',
    marginBottom: Size.XS
  });

  const errorClassName: string = css({
    '> *': { color: Color.ERROR },
    color: Color.ERROR
  });

  const className: string = cx(
    baseClassName,
    { [errorClassName]: error },
    otherClassName
  );

  return (
    <div className={className} {...props}>
      <FormFieldLabelText>{label}</FormFieldLabelText>
    </div>
  );
};

export default FormFieldLabel;
